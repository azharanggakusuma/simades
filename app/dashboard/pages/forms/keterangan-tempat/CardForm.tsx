"use client";

import React, { useState } from "react";
import {
  MdChevronLeft,
  MdChevronRight,
  MdInfo,
  MdSave,
} from "react-icons/md";

export default function CardForm() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="bg-white border border-gray-200 rounded-xl shadow-2xs overflow-hidden dark:bg-neutral-800 dark:border-neutral-700">
                {/* Header */}
                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
                  <div className="flex items-center space-x-2">
                    <h2 className="text-gray-800 text-base font-semibold">
                      {currentPage === 1 &&
                        "Alamat Balai Desa/Kantor Kelurahan"}
                      {currentPage === 2 &&
                        "Identitas Wilayah Administrasi"}
                      {currentPage === 3 &&
                        "Informasi Petugas Pengisi Data"}
                    </h2>
                  </div>
                  <div>
                    <div className="inline-flex gap-x-2">
                      <a
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50"
                        href="#"
                      >
                        <MdInfo className="w-4 h-4" />
                        Aturan Pengisian
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Header */}

                {/* Form */}
                <form
                  id="formData"
                  onSubmit={handleSubmit}
                  className="p-6 space-y-6"
                >
                  {currentPage === 1 && (
                    <>
                      <div>
                        <label
                          htmlFor="alamat"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Alamat Balai Desa/Kelurahan
                        </label>
                        <textarea
                          id="alamat"
                          rows={4}
                          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                          placeholder="Isi alamat kantor desa"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="kecamatan"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Nama Kecamatan
                        </label>
                        <input
                          id="kecamatan"
                          type="text"
                          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                          placeholder="Isi nama kecamatan"
                        />
                      </div>
                    </>
                  )}

                  {currentPage === 2 && (
                    <>
                      <div>
                        <label
                          htmlFor="kabupaten"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Nama Kabupaten/Kota
                        </label>
                        <input
                          id="kabupaten"
                          type="text"
                          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                          placeholder="Contoh: Cirebon"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="provinsi"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Nama Provinsi
                        </label>
                        <input
                          id="provinsi"
                          type="text"
                          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                          placeholder="Contoh: Jawa Barat"
                        />
                      </div>
                    </>
                  )}

                  {currentPage === 3 && (
                    <>
                      <div>
                        <label
                          htmlFor="namaPetugas"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Nama Petugas Pengisi Data
                        </label>
                        <input
                          id="namaPetugas"
                          type="text"
                          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                          placeholder="Isi nama lengkap"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="noHp"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Nomor HP
                        </label>
                        <input
                          id="noHp"
                          type="text"
                          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                          placeholder="08xxxxxxxxxx"
                        />
                      </div>
                    </>
                  )}

                  {/* Simpan Button di kiri bawah form */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      form="formData"
                      disabled={currentPage !== totalPages}
                      className={`py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 ${
                        currentPage !== totalPages && "opacity-50 cursor-not-allowed"
                      }`}
                    >
                      <MdSave className="w-4 h-4" />
                      Simpan
                    </button>
                  </div>
                </form>
                {/* End Form */}

                {/* Footer Pagination */}
                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700">
                  <p className="text-sm text-gray-600 dark:text-neutral-400">
                    Halaman{" "}
                    <span className="font-semibold text-gray-800 dark:text-neutral-200">
                      {currentPage}/{totalPages}
                    </span>
                  </p>
                  <div className="inline-flex gap-x-2">
                    <button
                      onClick={prevPage}
                      disabled={currentPage === 1}
                      className="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50"
                    >
                      <MdChevronLeft className="w-5 h-5" />
                      Prev
                    </button>
                    <button
                      onClick={nextPage}
                      disabled={currentPage === totalPages}
                      className="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50"
                    >
                      Next
                      <MdChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                {/* End Footer */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
