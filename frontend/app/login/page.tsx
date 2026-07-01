"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/services/api";
import { useAuthStore } from "@/store/auth-store";

export default function LoginPage() {
  const router = useRouter();

  const setToken = useAuthStore(
    (state) => state.setToken
  );

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleLogin = async () => {
    try {
      console.log("1. Login started");

      setLoading(true);

      const response =
        await api.post(
          "/auth/login",
          {
            email,
            password,
          }
        );

      console.log(
        "2. API Response:",
        response.data
      );

      const token =
        response.data.data.token;

      console.log(
        "3. Token:",
        token
      );

      setToken(token);

      localStorage.setItem(
        "token",
        token
      );

      console.log(
        "4. Token in localStorage:",
        localStorage.getItem(
          "token"
        )
      );

      console.log(
        "5. Redirecting..."
      );

      router.push("/profile");
    } catch (error: any) {
      console.error(
        "Login Error:",
        error
      );

      alert(
        error?.response?.data?.message ||
          error.message ||
          "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-lg">

        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold">
            Namaste 🙏
          </h1>

          <p className="mt-3 text-gray-500">
            Welcome to ConnectX —
            Bharat's own social network 🇮🇳
          </p>
        </div>

        <div className="space-y-5">

          <div>
            <label className="mb-2 block text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="
                w-full
                rounded-xl
                border
                border-gray-300
                px-4
                py-3
                outline-none
                focus:border-blue-600
              "
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
              className="
                w-full
                rounded-xl
                border
                border-gray-300
                px-4
                py-3
                outline-none
                focus:border-blue-600
              "
            />
          </div>

          <button
            type="button"
            onClick={() => {
              console.log(
                "Button clicked"
              );
              handleLogin();
            }}
            disabled={loading}
            className="
              w-full
              rounded-xl
              bg-blue-600
              py-3
              font-semibold
              text-white
              transition
              hover:bg-blue-700
              disabled:opacity-50
            "
          >
            {loading
              ? "Signing In..."
              : "Login"}
          </button>

        </div>

        <p className="mt-8 text-center text-gray-500">
          Don't have an account?{" "}
          <a
            href="/register"
            className="
              font-semibold
              text-blue-600
            "
          >
            Register
          </a>
        </p>

      </div>
    </main>
  );
}
