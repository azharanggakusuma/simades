"use client";

import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  // Array untuk pilihan tahun (misalnya tahun 2023-2030)
  const years = Array.from({ length: 8 }, (_, index) => 2023 + index);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100 dark:bg-neutral-950">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-lg dark:bg-neutral-900 dark:border-neutral-700">
        <div className="p-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
              SIMADES
            </h1>
          </div>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium mb-2 dark:text-white"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Masukan username"
                className="w-full py-3 px-4 border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white transition-all duration-300"
                required
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium dark:text-white"
                >
                  Password
                </label>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Masukan password"
                  className="w-full py-3 px-4 pr-11 border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 dark:text-neutral-400"
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Input Select Tahun Pengisian */}
            <div>
              <label
                htmlFor="year"
                className="block text-sm font-medium mb-2 dark:text-white"
              >
                Tahun Pengisian
              </label>
              <select
                id="year"
                name="year"
                className="w-full py-3 px-4 border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white"
                required
              >
                <option value="" disabled selected>
                  Pilih tahun pengisian
                </option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded dark:bg-neutral-800 dark:border-neutral-700"
              />
              <label htmlFor="remember-me" className="text-sm dark:text-white">
                Ingat saya
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-150 mt-4"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-neutral-400">
              Lupa kata sandi?{" "}
              <a
                href="../examples/html/recover-account.html"
                className="text-blue-600 hover:underline font-medium dark:text-blue-500"
              >
                Reset disini
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
