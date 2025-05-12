import {
  UserGroupIcon,
  DocumentTextIcon,
  BuildingOfficeIcon,
  MapIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/solid';

export default function Stats() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {/* KELURAHAN */}
      <Card
        title="Formulir"
        value="16"
        icon={<DocumentTextIcon className="w-5 h-5" />}
      />

      {/* DESA */}
      <Card
        title="Desa/Kelurahan"
        value="424"
        icon={<BuildingOfficeIcon className="w-5 h-5" />}
      />

      {/* KECAMATAN */}
      <Card
        title="Kecamatan"
        value="40"
        icon={<MapIcon className="w-5 h-5" />}
      />

      {/* USERS */}
      <Card
        title="Users"
        value="425"
        icon={<UserGroupIcon className="w-5 h-5" />}
      />
    </div>
  );
}

function Card({ title, value, icon }: { title: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-800">
      <div className="p-4 md:p-5 flex justify-between gap-x-3">
        <div>
          <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">{title}</p>
          <h3 className="mt-1 text-xl font-medium text-gray-800 dark:text-neutral-200">{value}</h3>
        </div>
        <div className="shrink-0 flex justify-center items-center size-11 bg-blue-600 text-white rounded-full dark:bg-blue-900 dark:text-blue-200">
          {icon}
        </div>
      </div>
      <a
        className="py-3 px-4 md:px-5 inline-flex justify-between items-center text-sm text-gray-600 border-t border-gray-200 hover:bg-gray-50 dark:border-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-800"
        href="#"
      >
        View data
        <ArrowRightIcon className="w-4 h-4" />
      </a>
    </div>
  );
}
