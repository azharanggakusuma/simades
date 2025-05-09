import { FaUsers } from 'react-icons/fa';
import { MdLocationCity } from 'react-icons/md';
import { FaBuilding } from 'react-icons/fa';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';

export default function Stats() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {/* Users */}
      <Card title="Users" value="424" icon={<FaUsers size={20} />} />
      {/* Desa */}
      <Card title="Desa" value="412" icon={<MdLocationCity size={20} />} />
      {/* Kelurahan */}
      <Card title="Kelurahan" value="12" icon={<FaBuilding size={20} />} />
      {/* Kecamatan */}
      <Card title="Kecamatan" value="40" icon={<HiOutlineOfficeBuilding size={20} />} />
    </div>
  );
}

function Card({ title, value, icon }) {
  return (
    <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-800">
      <div className="p-4 md:p-5 flex justify-between gap-x-3">
        <div>
          <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
            {title}
          </p>
          <div className="mt-1 flex items-center gap-x-2">
            <h3 className="mt-1 text-xl font-medium text-gray-800 dark:text-neutral-200">
              {value}
            </h3>
          </div>
        </div>
        <div className="shrink-0 flex justify-center items-center size-11 bg-blue-600 text-white rounded-full dark:bg-blue-900 dark:text-blue-200">
          {icon}
        </div>
      </div>
      <a
        className="py-3 px-4 md:px-5 inline-flex justify-between items-center text-sm text-gray-600 border-t border-gray-200 hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 rounded-b-xl dark:border-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
        href="#"
      >
        View data
        <svg
          className="shrink-0 size-4"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </a>
    </div>
  );
}
