"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { apiClient } from "@/lib/api-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { Loader2, AlertCircle, ArrowRight } from "lucide-react";

const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await apiClient.post<{ access_token: string; token_type: string }>(
        "/api/auth/login",
        { email, password }
      );

      await login(response.access_token);
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message || "Invalid email or password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSuccess = async (credentialResponse: any) => {
    setError("");
    setIsLoading(true);
    try {
      const response = await apiClient.post<{ access_token: string; refresh_token: string }>(
        "/api/auth/google",
        { credential: credentialResponse.credential }
      );
      await login(response.access_token);
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message || "Google sign-in failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex bg-[#FFFEF9] font-sans selection:bg-[#8b5cf6] selection:text-white">
      {/* Left Pane - Form */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 sm:p-12 lg:p-24 relative z-10 bg-white shadow-[20px_0_60px_rgba(0,0,0,0.05)]">
        
        {/* Top-Left Back Link */}
        <Link href="/" className="absolute top-8 left-8 text-sm font-bold text-gray-400 hover:text-gray-900 transition-colors flex items-center gap-2">
          ← Back to Site
        </Link>

        <div className="w-full max-w-[400px]">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center mb-10"
          >
            <div className="w-16 h-16 mb-4 flex items-center justify-center">
              <img src="/Untitled_design-removebg-preview.png" alt="ToolStack Logo" className="w-full h-full object-contain" />
            </div>
            <h1 className="text-3xl font-serif text-[#1F2937] tracking-tight">
              Welcome back
            </h1>
            <p className="text-gray-500 text-sm mt-2 font-medium">
              Log in to your ToolStack account
            </p>
          </motion.div>

          {error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl text-sm mb-6 flex items-start gap-3 shadow-sm"
            >
              <AlertCircle className="w-5 h-5 shrink-0 text-red-500" />
              <span className="font-medium">{error}</span>
            </motion.div>
          )}

          <motion.form 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            onSubmit={handleSubmit} 
            className="space-y-5"
          >
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">Work Email</label>
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]/20 focus:border-[#8b5cf6] transition-all"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">Password</label>
                <Link href="/forgot-password" className="text-xs font-bold text-[#8b5cf6] hover:text-[#7c3aed] transition-colors">
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                required
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]/20 focus:border-[#8b5cf6] transition-all"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 px-4 bg-[#1F2937] hover:bg-black text-white font-bold rounded-xl text-sm transition-all duration-200 disabled:opacity-70 flex items-center justify-center gap-2 shadow-lg shadow-gray-900/20 group"
            >
              {isLoading ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Signing in...</>
              ) : (
                <>Sign In <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
              )}
            </button>
          </motion.form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-white px-4 text-gray-400 font-bold uppercase tracking-wider">Or continue with</span>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {GOOGLE_CLIENT_ID ? (
              <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
                <div className="flex justify-center [&>div]:!w-full border border-gray-200 rounded-xl overflow-hidden hover:bg-gray-50 transition-colors shadow-sm">
                  <GoogleLogin
                    onSuccess={handleGoogleSuccess}
                    onError={() => setError("Google sign-in failed")}
                    shape="rectangular"
                    size="large"
                    width="100%"
                    text="signin_with"
                  />
                </div>
              </GoogleOAuthProvider>
            ) : (
              <div className="text-center py-4 px-4 rounded-xl bg-gray-50 border border-gray-200 border-dashed">
                <p className="text-xs text-gray-500 font-medium">
                  Google SSO not configured. <br/> Set <code className="bg-white border border-gray-200 px-1.5 py-0.5 rounded text-gray-600 text-[10px] font-mono mt-1 inline-block">NEXT_PUBLIC_GOOGLE_CLIENT_ID</code>
                </p>
              </div>
            )}
          </motion.div>

          <p className="text-center text-sm text-gray-500 mt-10 font-medium">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-[#8b5cf6] hover:text-[#7c3aed] font-bold transition-colors">
              Sign up for free
            </Link>
          </p>
        </div>
      </div>

      {/* Right Pane - Visuals (Hidden on Mobile) */}
      <div className="hidden lg:flex w-1/2 bg-[#1a1130] relative overflow-hidden flex-col items-center justify-center p-12">
        {/* Animated Background Gradients */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#8b5cf6] rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-pulse" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#3b82f6] rounded-full mix-blend-screen filter blur-[100px] opacity-20" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 max-w-[500px] text-center"
        >
          {/* Glassmorphism Card */}
          <div className="w-full bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-3xl shadow-2xl flex flex-col items-center">
             <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl rotate-3 mb-8">
               <span className="text-4xl">⚡</span>
             </div>
             <h2 className="text-3xl font-serif text-white font-bold mb-4">The ultimate AI toolkit</h2>
             <p className="text-gray-300 text-sm leading-relaxed mb-8">
               Manage voices, tests, fees, videos, and emails from a single unified AI-driven dashboard. Experience the power of 10x automation.
             </p>
             
             {/* Stats/Badges */}
             <div className="flex gap-4">
                <div className="bg-white/5 border border-white/10 rounded-full px-4 py-2 flex items-center gap-2">
                   <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                   <span className="text-xs text-white font-bold tracking-wider">All Systems Operational</span>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}