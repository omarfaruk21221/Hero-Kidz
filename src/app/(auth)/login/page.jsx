"use client";

import React, { useState } from "react";
import Link from "next/link";
import MyLogo from "@/components/layouts/MyLogo";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import GoogleLogInBtn from "@/components/button/GoogleLogInBtn";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }
    setLoading(true);
    try {
      // TODO: replace with real auth integration
      console.log("Logging in", { email, password });
      await new Promise((res) => setTimeout(res, 800));
      // On success redirect or show toast — left as an integration point
    } catch (err) {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    // TODO: wire up to Google auth provider (next-auth / firebase / your backend)
    console.log("Google sign-in (not implemented)");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-tr from-[#f3f6ff] to-[#fffdf6] p-10 sm:p-6">
      <div className="w-full max-w-md bg-white/95 rounded-2xl p-9 shadow-xl border border-gray-100">
        <div className="text-center mb-4">
          <MyLogo />
          <p className="text-sm text-gray-600 mt-2">
            Welcome back — please sign in to continue
          </p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 border border-red-100 text-red-700 px-3 py-2 rounded-md text-sm">
              {error}
            </div>
          )}

          <label className="text-sm text-gray-700">
            Email
            <input
              className="block w-full mt-2 px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@domain.com"
              required
              autoComplete="email"
            />
          </label>

          <label className="text-sm text-gray-700">
            Password
            <div className="relative">
              <input
                className="block w-full mt-2 px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your strong password"
                required
                autoComplete="current-password"
                minLength={6}
              />

              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-500"
                onClick={() => setShowPassword((s) => !s)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>
          </label>

          <button
            className="w-full mt-1 py-3 rounded-lg font-semibold text-white bg-linear-to-r from-primary to-accent  shadow-md disabled:opacity-60"
            type="submit"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>

          <GoogleLogInBtn />

          <div className="flex items-center justify-center gap-2 mt-3 text-sm text-gray-600">
            <span>New here?</span>
            <Link
              href="/register"
              className="font-semibold text-accent underline"
            >
              Create an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
