import { Info, Save } from "lucide-react";

export default function CardForm() {
  return (
    <div className="mt-8 w-full min-h-screen bg-gray-50 p-6">
      <div className="w-full border-t-4 border-blue-500 rounded-md shadow bg-white">
        <div className="px-6 py-4 border-b border-gray-100">
          <div className="flex items-center space-x-2">
            <h2 className="text-gray-800 text-base font-semibold">
              Alamat Balai Desa/Kantor Kelurahan
            </h2>
            <Info className="w-4 h-4 text-gray-400" />
          </div>
        </div>

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
      </div>
    </div>
  );
}
