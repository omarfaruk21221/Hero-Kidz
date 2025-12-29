"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import MyLogo from "@/components/layouts/MyLogo";
import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import GoogleLogInBtn from "@/components/button/GoogleLogInBtn";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const avatarPreview = useMemo(() => {
    try {
      return photoUrl && photoUrl.startsWith("http") ? photoUrl : null;
    } catch {
      return null;
    }
  }, [photoUrl]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!username || !email || !password) {
      setError("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    try {
      // TODO: replace with real registration integration
      console.log("Registering", { username, photoUrl, email });
      await new Promise((res) => setTimeout(res, 900));
    } catch (err) {
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-tr from-[#f7fcff] to-[#fffdf6] p-12 sm:p-6">
      <div className="w-full max-w-2xl bg-white/95 rounded-2xl p-9 shadow-xl border border-gray-100">
        <div className=" flex flex-col items-center gap-3 mb-6">
          <MyLogo />
          <h1 className="text-4xl  font-extrabold ">Create account</h1>
          <p className="text-md  text-gray-600">
            Join Hero Kidz — set up your profile
          </p>
        </div>

        <form
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          onSubmit={handleSubmit}
        >
          {error && (
            <div className="col-span-full bg-red-50 border border-red-100 text-red-700 px-3 py-2 rounded-md text-sm">
              {error}
            </div>
          )}

          <label className="col-span-full text-md text-gray-700">
            Username
            <input
              className="block w-full mt-2 px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Your display name"
              required
              minLength={2}
              autoComplete="name"
            />
          </label>

          <label className="text-md text-gray-700">
            Photo URL
            <div className="flex items-center gap-3 mt-2">
              <input
                className="flex-1 px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 focus:outline-none"
                type="url"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
                placeholder="https://..."
                autoComplete="off"
              />

              <div
                className="w-11 h-11 rounded-full bg-indigo-50 overflow-hidden border border-gray-100 flex items-center justify-center"
                aria-hidden
              >
                {avatarPreview ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={avatarPreview}
                    alt="avatar preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <FaUser />
                )}
              </div>
            </div>
          </label>
          {/* -email---- */}
          <label className="text-md text-gray-700">
            Email
            <input
              className="block w-full mt-2 px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 focus:outline-none"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@domain.com"
              required
              autoComplete="email"
            />
          </label>
          {/* ------password----- */}
          <label className="col-span-full text-md text-gray-700">
            Password
            <div className="relative">
              <input
                className="block w-full mt-2 px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 focus:outline-none"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a strong password"
                required
                minLength={6}
                autoComplete="new-password"
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

          <div className="col-span-full mt-2">
            <button
              className="w-full flex-1 py-3 rounded-lg font-bold text-white bg-linear-to-r from-primary to-accent shadow-md"
              type="submit"
              disabled={loading}
            >
              {loading ? "Creating account..." : "Register"}
            </button>
          </div>
          <div className="col-span-full mt-2">
            <GoogleLogInBtn />
          </div>

          <div className="col-span-full flex items-center justify-center gap-2 mt-3 text-sm text-gray-600">
            <span>Already have an account?</span>
            <Link href="/login" className="font-semibold underline text-accent">
              Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
