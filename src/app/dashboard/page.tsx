"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/navigation";
import { apiClient } from "@/lib/api-client";
import { motion } from "framer-motion";

interface Subscription {
  id: string;
  user_id: string;
  tool_name?: string;
  plan_id?: string;
  bundle_id?: string;
  billing_cycle: string;
  status: string;
  is_pro: boolean;
  current_period_start?: string;
  current_period_end?: string;
  created_at: string;
  plan?: { id: string; name: string; tier: string; prices: Record<string, number>; features?: string[] };
  bundle?: { id: string; name: string; slug: string; prices: Record<string, number> };
}

export default function DashboardPage() {
  const { user, isLoading, logout, isAuthenticated } = useAuth();
  const router = useRouter();
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loadingSubs, setLoadingSubs] = useState(true);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isLoading, isAuthenticated, router]);

  useEffect(() => {
    if (isAuthenticated) {
      const fetchSubs = async () => {
        try {
          const res = await apiClient.get<{ subscriptions: Subscription[] }>("/api/v1/subscriptions");
          setSubscriptions(res.subscriptions);
        } catch (err) {
          console.error("Failed to load subscriptions", err);
        } finally {
          setLoadingSubs(false);
        }
      };
      fetchSubs();
    }
  }, [isAuthenticated]);

  if (isLoading || !isAuthenticated) {
    return (
      <div className="min-h-screen" style={{ background: "#09090b", color: "#fafafa", display: "flex", alignItems: "center", justifyContent: "center" }}>
        Loading dashboard...
      </div>
    );
  }

  const handleCancelSub = async (id: string) => {
    if (confirm("Are you sure you want to cancel this subscription?")) {
      try {
        await apiClient.post(`/api/v1/subscriptions/${id}/cancel`);
        setSubscriptions(s => s.map(sub => sub.id === id ? { ...sub, status: "cancelled" } : sub));
      } catch (err: any) {
        alert(err.message || "Failed to cancel subscription");
      }
    }
  };

  return (
    <div style={{ background: "#09090b", minHeight: "100vh", color: "#fafafa", fontFamily: "'Outfit', sans-serif" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "1.5rem" }}>
          <div>
            <h1 style={{ fontSize: "2rem", fontWeight: 600, margin: 0 }}>Dashboard</h1>
            <p style={{ color: "#a1a1aa", marginTop: "0.25rem" }}>Manage your account and subscriptions</p>
          </div>
          <button onClick={logout} className="btn btn-secondary">Sign Out</button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: "2rem" }}>
          {/* Profile Section */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="glass-panel" style={{ padding: "2rem" }}>
              <div style={{
                width: "64px", height: "64px", borderRadius: "50%",
                background: "linear-gradient(135deg, #f43f5e, #fb923c)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem"
              }}>
                {user?.full_name?.charAt(0).toUpperCase() || user?.email?.charAt(0).toUpperCase()}
              </div>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 600 }}>{user?.full_name || "User"}</h2>
              <p style={{ color: "#a1a1aa", fontSize: "0.9rem", marginBottom: "1.5rem" }}>{user?.email}</p>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "1.5rem" }}>
                <span className="badge badge-success">
                  {user?.role || "user"}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Subscriptions Section */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <div className="glass-panel" style={{ padding: "2rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                <h2 style={{ fontSize: "1.2rem", fontWeight: 600, margin: 0 }}>Active Subscriptions</h2>
                <button onClick={() => router.push("/pricing")} className="btn btn-primary" style={{ padding: "0.4rem 0.8rem", fontSize: "0.85rem" }}>
                  Browse Plans
                </button>
              </div>

              {loadingSubs ? (
                <p style={{ color: "#a1a1aa", padding: "1rem 0" }}>Loading your subscriptions...</p>
              ) : subscriptions.length === 0 ? (
                <div style={{ textAlign: "center", padding: "3rem 1rem", background: "rgba(0,0,0,0.2)", borderRadius: "12px", border: "1px dashed rgba(255,255,255,0.08)" }}>
                  <p style={{ color: "#a1a1aa", marginBottom: "1rem" }}>You don&apos;t have any active subscriptions.</p>
                  <button onClick={() => router.push("/pricing")} className="btn btn-primary">
                    View Plans
                  </button>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {subscriptions.map(sub => (
                    <div key={sub.id} style={{
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      padding: "1rem", background: "rgba(0,0,0,0.2)", borderRadius: "12px",
                      border: "1px solid rgba(255,255,255,0.08)"
                    }}>
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.25rem" }}>
                          <h3 style={{ fontSize: "1rem", fontWeight: 600 }}>{sub.plan?.name || sub.bundle?.name || "Unknown Plan"}</h3>
                          <span className={`badge ${sub.status === "active" ? "badge-success" : sub.status === "cancelled" ? "badge-danger" : "badge-warning"}`}>
                            {sub.status}
                          </span>
                        </div>
                        <p style={{ color: "#a1a1aa", fontSize: "0.85rem" }}>
                          {sub.billing_cycle} billing &bull; Renews on {sub.current_period_end ? new Date(sub.current_period_end).toLocaleDateString() : "N/A"}
                        </p>
                      </div>
                      <div style={{ display: "flex", gap: "0.5rem" }}>
                        {sub.status === "active" && (
                          <button onClick={() => handleCancelSub(sub.id)} className="btn btn-danger" style={{ padding: "0.3rem 0.8rem", fontSize: "0.8rem" }}>
                            Cancel Plan
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}