import { useState } from "react";
import Navbar from "../../components/layout/Navbar";

export default function Auth() {
  const [mode, setMode] = useState("login");

  return (
    <>
      <Navbar />

      <div className="min-h-screen pt-24 flex items-center justify-center bg-gray-50">

        <div className="w-full max-w-4xl h-[520px] rounded-2xl overflow-hidden grid grid-cols-2 bg-white border border-gray-300 shadow-lg">

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-10 flex flex-col justify-center border-r border-gray-300">

            <div className="flex mb-8 bg-white rounded-lg border overflow-hidden">
              <button
                onClick={() => setMode("login")}
                className={`flex-1 py-2 font-medium transition ${
                  mode === "login"
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-gray-600"
                }`}
              >
                Login
              </button>

              <button
                onClick={() => setMode("signup")}
                className={`flex-1 py-2 font-medium transition ${
                  mode === "signup"
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-gray-600"
                }`}
              >
                Sign Up
              </button>
            </div>

            {mode === "login" && (
              <div className="space-y-5">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
                />

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                  Login
                </button>
              </div>
            )}

            {mode === "signup" && (
              <div className="space-y-5">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
                />

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                  Sign Up
                </button>
              </div>
            )}
          </div>

          <div className="bg-white flex items-center justify-center p-12">
            <div>
              <h2 className="text-4xl font-semibold mb-4 text-gray-800">
                {mode === "login" ? "Welcome Back" : "Join CommunityCare"}
              </h2>

              <p className="text-gray-600 max-w-sm">
                {mode === "login"
                  ? "Login to manage and track community issues easily."
                  : "Create your account to start improving your area today."}
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
