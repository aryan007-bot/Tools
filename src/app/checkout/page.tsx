"use client";

import { useEffect, useState, Suspense } from "react";
import { useAuth } from "@/hooks/use-auth";
import { useRouter, useSearchParams } from "next/navigation";
import { apiClient } from "@/lib/api-client";
import { motion } from "framer-motion";

function CheckoutContent() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const planId = searchParams.get("plan_id");
  const billingCycle = searchParams.get("billing_cycle") || "monthly";
  
  const [preview, setPreview] = useState<any>(null);
  const [loadingPreview, setLoadingPreview] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push(`/login?redirect=/checkout?plan_id=${planId}&billing_cycle=${billingCycle}`);
    }
  }, [isLoading, isAuthenticated, router, planId, billingCycle]);

  useEffect(() => {
    if (isAuthenticated && planId) {
      const fetchPreview = async () => {
        try {
          const res = await apiClient.post("/checkout/preview", {
            plan_id: planId,
            billing_cycle: billingCycle
          });
          setPreview(res);
        } catch (err: any) {
          setError(err.message || "Failed to load checkout preview.");
        } finally {
          setLoadingPreview(false);
        }
      };
      fetchPreview();
    } else if (isAuthenticated && !planId) {
      router.push("/pricing");
    }
  }, [isAuthenticated, planId, billingCycle, router]);

  const handleCheckout = async () => {
    setProcessing(true);
    setError("");
    try {
      const res = await apiClient.post<{ subscription_id: string; razorpay_subscription_id: string; message: string }>("/checkout/create", {
        plan_id: planId,
        billing_cycle: billingCycle
      });
      
      // Since Razorpay is mocked for now, we will simulate success
      alert(`Success: ${res.message}\nSubscription ID: ${res.subscription_id}\n\n(In production, Razorpay would open here)`);
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message || "Failed to create checkout session.");
    } finally {
      setProcessing(false);
    }
  };

  if (isLoading || loadingPreview) {
    return <div className="min-h-screen pt-28 flex justify-center items-center">Loading checkout...</div>;
  }

  return (
    <div className="pt-28 min-h-screen bg-gray-50/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gray-900 px-8 py-6 text-white">
            <h1 className="text-2xl font-bold font-display tracking-tight">Complete your purchase</h1>
            <p className="text-gray-400 mt-1">Review your plan details below.</p>
          </div>
          
          <div className="p-8">
            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-6">
                {error}
              </div>
            )}

            {preview && (
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-6 border-b border-gray-100">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">Subscription Plan</h3>
                    <p className="text-gray-500 capitalize">{billingCycle} Billing</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-lg text-gray-900">${preview.subtotal.toFixed(2)}</p>
                  </div>
                </div>

                <div className="space-y-3 pb-6 border-b border-gray-100 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${preview.subtotal.toFixed(2)}</span>
                  </div>
                  {preview.discount > 0 && (
                    <div className="flex justify-between text-emerald-600">
                      <span>Discount</span>
                      <span>-${preview.discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-gray-600">
                    <span>Tax</span>
                    <span>${preview.tax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center text-lg font-bold text-gray-900">
                  <span>Total due today</span>
                  <span>${preview.total.toFixed(2)}</span>
                </div>
                
                <p className="text-xs text-gray-500 text-center">
                  Your subscription will automatically renew on {new Date(preview.renewal_date).toLocaleDateString()} for ${preview.recurring_amount.toFixed(2)}.
                </p>

                <button
                  onClick={handleCheckout}
                  disabled={processing}
                  className="w-full bg-blue-600 text-white font-medium py-3 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-70 mt-4"
                >
                  {processing ? "Processing..." : `Pay $${preview.total.toFixed(2)} securely`}
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-28 flex justify-center items-center">Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
