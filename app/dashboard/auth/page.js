"use client";

import { useEffect, useState } from "react";
import Select from "react-select";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginType, setLoginType] = useState("desa"); // 'desa', 'kecamatan', or 'admin'
  const [desaOptions, setDesaOptions] = useState([]);
  const [kecamatanOptions, setKecamatanOptions] = useState([]);

  const years = Array.from({ length: 5 }, (_, index) => 2024 + index);

  useEffect(() => {
    fetch("/api/kab_cirebon.json")
      .then((res) => res.json())
      .then((data) => {
        const sortedDesa = [...data.data_desa].sort((a, b) =>
          a.Nama_Desa.localeCompare(b.Nama_Desa)
        );

        const desaList = sortedDesa.map((desa) => ({
          value: desa.Kode_Desa,
          label: `${desa.Nama_Desa} - ${desa.Kecamatan}`,
        }));
        setDesaOptions(desaList);

        // Extract unique kecamatan names
        const kecamatanSet = new Set(data.data_desa.map((d) => d.Kecamatan));
        const kecamatanList = [...kecamatanSet]
          .sort()
          .map((kec) => ({ value: kec, label: kec }));
        setKecamatanOptions(kecamatanList);
      });
  }, []);

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
            {/* Role Login */}
            <div>
              <label className="block text-sm font-medium mb-2 dark:text-white">
                Login sebagai
              </label>
              <div className="flex space-x-4">
                {["desa", "kecamatan", "admin"].map((role) => (
                  <label
                    key={role}
                    className="flex items-center text-sm dark:text-white"
                  >
                    <input
                      type="radio"
                      name="loginType"
                      value={role}
                      checked={loginType === role}
                      onChange={() => setLoginType(role)}
                      className="mr-2"
                    />
                    {role.charAt(0).toUpperCase() + role.slice(1)}
                  </label>
                ))}
              </div>
            </div>

            {/* Select Desa */}
            {loginType === "desa" && (
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-white">
                  Nama Desa
                </label>
                <Select
                  options={desaOptions}
                  placeholder="Pilih desa..."
                  className="text-sm"
                  isSearchable
                />
              </div>
            )}

            {/* Select Kecamatan */}
            {loginType === "kecamatan" && (
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-white">
                  Nama Kecamatan
                </label>
                <Select
                  options={kecamatanOptions}
                  placeholder="Pilih kecamatan..."
                  className="text-sm"
                  isSearchable
                />
              </div>
            )}

            {/* Username hanya untuk Admin */}
            {loginType === "admin" && (
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-white">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Masukkan username"
                  className="w-full py-3 px-4 border rounded-lg text-sm dark:bg-neutral-900 dark:text-white"
                />
              </div>
            )}

            {/* Password untuk semua */}
            <div>
              <label className="block text-sm font-medium mb-2 dark:text-white">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Masukkan password"
                  className="w-full py-3 px-4 pr-11 border rounded-lg text-sm dark:bg-neutral-900 dark:text-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Tahun hanya untuk Desa */}
            {loginType === "desa" && (
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-white">
                  Tahun Pengisian
                </label>
                <select
                  name="year"
                  className="w-full py-3 px-4 border rounded-lg text-sm dark:bg-neutral-900 dark:text-white"
                >
                  <option value="">Pilih tahun</option>
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
              className="w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
