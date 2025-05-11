"use client";

import { useEffect, useState } from "react";
import Select from "react-select";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [desaOptions, setDesaOptions] = useState([]);
  const [kecamatanOptions, setKecamatanOptions] = useState([]);
  const [role, setRole] = useState("admin");

  const years = Array.from({ length: 5 }, (_, index) => 2024 + index);

  useEffect(() => {
    fetch("/api/kab_cirebon.json")
      .then((res) => res.json())
      .then((data) => {
        const sortedDesa = [...data.data_desa].sort((a, b) =>
          a.Nama_Desa.localeCompare(b.Nama_Desa)
        );

        const desaOptionsFormatted = sortedDesa.map((desa) => ({
          value: desa.Kode_Desa,
          label: `${desa.Nama_Desa} - ${desa.Kecamatan}`,
        }));

        const kecamatanSet = new Set(
          data.data_desa.map((desa) => desa.Kecamatan)
        );
        const kecamatanOptionsFormatted = Array.from(kecamatanSet)
          .sort()
          .map((kec) => ({
            value: kec,
            label: kec,
          }));

        setDesaOptions(desaOptionsFormatted);
        setKecamatanOptions(kecamatanOptionsFormatted);
      });
  }, []);

  const customSelectStyles = {
    control: (base) => ({
      ...base,
      height: "48px",
      minHeight: "48px",
      borderRadius: "0.5rem",
      borderColor: "#d1d5db",
      fontSize: "0.875rem",
      backgroundColor: "white",
    }),
    input: (base) => ({ ...base, color: "black" }),
    singleValue: (base) => ({ ...base, color: "black" }),
    menu: (base) => ({ ...base, fontSize: "0.875rem" }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? "#f0f0f0" : "white",
      color: "black",
    }),
  };

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
              <label className="block text-sm font-medium mb-2 dark:text-white">
                Login sebagai
              </label>
              <div className="flex items-center gap-6 text-sm dark:text-white">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="role"
                    value="admin"
                    checked={role === "admin"}
                    onChange={() => setRole("admin")}
                  />{" "}
                  Admin
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="role"
                    value="desa"
                    checked={role === "desa"}
                    onChange={() => setRole("desa")}
                  />{" "}
                  Desa
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="role"
                    value="kecamatan"
                    checked={role === "kecamatan"}
                    onChange={() => setRole("kecamatan")}
                  />{" "}
                  Kecamatan
                </label>
              </div>
            </div>

            {role === "admin" && (
              <>
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
                    placeholder="Masukkan username"
                    className="w-full py-3 px-4 border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white"
                    required
                  />
                </div>
              </>
            )}

            {role === "desa" && (
              <>
                <div>
                  <label
                    htmlFor="desa"
                    className="block text-sm font-medium mb-2 dark:text-white"
                  >
                    Pilih Desa
                  </label>
                  <Select
                    inputId="desa"
                    name="desa"
                    options={desaOptions}
                    placeholder="Cari dan pilih desa..."
                    isSearchable
                    styles={customSelectStyles}
                  />
                </div>
              </>
            )}

            {role === "kecamatan" && (
              <>
                <div>
                  <label
                    htmlFor="kecamatan"
                    className="block text-sm font-medium mb-2 dark:text-white"
                  >
                    Pilih Kecamatan
                  </label>
                  <Select
                    inputId="kecamatan"
                    name="kecamatan"
                    options={kecamatanOptions}
                    placeholder="Cari dan pilih kecamatan..."
                    isSearchable
                    styles={customSelectStyles}
                  />
                </div>
              </>
            )}

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
                  placeholder="Masukkan password"
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

            {role === "desa" && (
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

            <button
              type="submit"
              className="w-full py-3 px-4 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-150 mt-2"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
