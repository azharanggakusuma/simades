import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/solid";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { FaDownload, FaUserPlus, FaEdit, FaTrash } from "react-icons/fa";
import { Info, Save } from "lucide-react";

export default function CardForm() {
  return (
    <>
      {/* Table Section */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Card */}
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="bg-white border border-gray-200 rounded-xl shadow-2xs overflow-hidden dark:bg-neutral-800 dark:border-neutral-700">
                {/* Header */}
                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
                  <div className="flex items-center space-x-2">
                    <h2 className="text-gray-800 text-base font-semibold">
                      Alamat Balai Desa/Kantor Kelurahan
                    </h2>
                    <Info className="w-4 h-4 text-gray-400" />
                  </div>
                  <div>
                    <div className="inline-flex gap-x-2">
                      <a
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        href="#"
                      >
                        <Info className="w-4 h-4" />
                        Aturan Pengisian
                      </a>
                      <a
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                        href="#"
                      >
                        <Save className="w-4 h-4" />
                        Simpan
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Header */}

                {/* Form */}
                <form className="p-6 space-y-6">
                  <div>
                    <label
                      htmlFor="alamat"
                      className="block text-sm text-gray-700 font-medium mb-1"
                    >
                      Alamat Balai Desa/Kelurahan
                    </label>
                    <textarea
                      id="alamat"
                      rows={4}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Isi alamat kantor desa"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="kecamatan"
                      className="block text-sm text-gray-700 font-medium mb-1"
                    >
                      Nama Kecamatan
                    </label>
                    <input
                      id="kecamatan"
                      type="text"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Isi nama kecamatan"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md"
                    >
                      <Save className="w-4 h-4" />
                      Simpan
                    </button>
                  </div>
                </form>
                {/* End Table */}
                {/* Footer */}
                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-neutral-400">
                      Halaman {" "}
                      <span className="font-semibold text-gray-800 dark:text-neutral-200">
                        1/2
                      </span>
                    </p>
                  </div>
                  <div>
                    <div className="inline-flex gap-x-2">
                      <button
                        type="button"
                        className="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      >
                        <MdChevronLeft className="w-5 h-5" />
                        Prev
                      </button>
                      <button
                        type="button"
                        className="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      >
                        Next
                        <MdChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* End Footer */}
              </div>
            </div>
          </div>
        </div>
        {/* End Card */}
      </div>
      {/* End Table Section */}
    </>
  );
}
