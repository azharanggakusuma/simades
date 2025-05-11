"use client";

import { useEffect, useState } from "react";
import Select from "react-select";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginType, setLoginType] = useState("desa"); // 'desa' or 'admin'
  const [desaOptions, setDesaOptions] = useState([]);

  const years = Array.from({ length: 5 }, (_, index) => 2024 + index);

  useEffect(() => {
    if (loginType === "desa") {
      fetch("/api/kab_cirebon.json")
        .then((res) => res.json())
        .then((data) => {
          const sortedData = [...data.data_desa].sort((a, b) =>
            a.Nama_Desa.localeCompare(b.Nama_Desa)
          );

          const options = sortedData.map((desa) => ({
            value: desa.Kode_Desa,
            label: `${desa.Nama_Desa} - ${desa.Kecamatan}`,
          }));

          setDesaOptions(options);
        });
    }
  }, [loginType]);

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
            {/* Radio Login Type */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 dark:text-white">
                Login sebagai
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center text-sm dark:text-white">
                  <input
                    type="radio"
                    name="loginType"
                    value="desa"
                    checked={loginType === "desa"}
                    onChange={() => setLoginType("desa")}
                    className="mr-2"
                  />
                  Desa
                </label>
                <label className="flex items-center text-sm dark:text-white">
                  <input
                    type="radio"
                    name="loginType"
                    value="admin"
                    checked={loginType === "admin"}
                    onChange={() => setLoginType("admin")}
                    className="mr-2"
                  />
                  Admin
                </label>
              </div>
            </div>

            {loginType === "desa" ? (
              <>
                {/* Select Nama Desa */}
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium mb-2 dark:text-white"
                  >
                    Nama Desa
                  </label>
                  <Select
                    inputId="username"
                    name="username"
                    options={desaOptions}
                    placeholder="Cari dan pilih nama desa..."
                    className="text-sm"
                    isSearchable
                  />
                </div>
              </>
            ) : (
              <>
                {/* Input Username */}
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
                    className="w-full py-3 px-4 border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white"
                    required
                  />
                </div>
              </>
            )}

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-2 dark:text-white"
              >
                Password
              </label>
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

            {/* Tahun Pengisian (hanya untuk Desa) */}
            {loginType === "desa" && (
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
            )}

            {/* Tombol Login */}
            <button
              type="submit"
              className="w-full py-3 px-4 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-150 mt-4"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
