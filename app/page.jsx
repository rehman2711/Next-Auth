"use client";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const router = useRouter();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleCredLogin = async (e) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
      callbackUrl: "/dashboard",
    });

    console.log(result);

    if (result.error) {
      // alert(result.error);
      toast.error("Invalid Credentials");
      return;
    }

    if (result.status === 200) {
      router.push(result.url);
      toast.success("Logged In Successfully");
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Login to your account
            </h1>
          </div>

          {/* Login Form */}
          <form
            className="space-y-5"
            onSubmit={(e) => {
              handleCredLogin(e);
            }}
          >
            {/* Email */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full text-black px-4 py-2.5 border border-gray-300 rounded-lg
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full text-black px-4 py-2.5 border border-gray-300 rounded-lg
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium
                 hover:bg-blue-700 active:scale-[0.98] transition-all duration-200"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-3 text-sm text-gray-500">or continue with</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* OAuth Buttons */}
          <div className="flex flex-col gap-3">
            <button
              className="bg-gray-100 hover:bg-gray-200 border border-gray-300 py-2 rounded-lg shadow-sm
                   flex items-center justify-center gap-3 transition"
              onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
            >
              <Image src="/github-t.svg" width={22} height={22} alt="github" />
              <span className="font-medium text-gray-800">
                Sign in with GitHub
              </span>
            </button>

            <button
              className="bg-gray-100 hover:bg-gray-200 border border-gray-300 py-2 rounded-lg shadow-sm
                   flex items-center justify-center gap-3 transition"
              onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            >
              <Image src="/google.png" width={22} height={22} alt="google" />
              <span className="font-medium text-gray-800">
                Sign in with Google
              </span>
            </button>
          </div>

          {/* Footer Links */}
          <div className="text-center mt-6 text-sm text-gray-600">
            Don’t have an account?{" "}
            <a href="/" className="text-blue-600 font-medium hover:underline">
              Sign Up
            </a>
          </div>
        </div>

        <div className="bg-black/10 text-black shadow-md p-3 rounded-md text-sm flex flex-col justify-center items-center absolute top-4 right-4">
          <b>For Admin Login Only</b>
          <p>admin@gmail.com | admin@1234</p>
        </div>
      </div>
    </>
  );
}
