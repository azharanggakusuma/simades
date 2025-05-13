'use client';

import {
  UserGroupIcon,
  DocumentTextIcon,
  BuildingOfficeIcon,
  MapIcon,
  ArrowRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';

export default function Stats() {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const [dataDesa, setDataDesa] = useState<any[]>([]);
  const [dataKecamatan, setDataKecamatan] = useState<string[]>([]);

  useEffect(() => {
    fetch('/api/kab_cirebon.json')
      .then((res) => res.json())
      .then((data) => {
        setDataDesa(data.data_desa);
        const uniqueKecamatan = Array.from(new Set(data.data_desa.map((d: any) => d.Kecamatan)));
        setDataKecamatan(uniqueKecamatan);
      });
  }, []);

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <Card title="Formulir" value="16" icon={<DocumentTextIcon className="w-5 h-5" />} onView={() => setOpenModal('formulir')} />
        <Card title="Desa/Kelurahan" value="424" icon={<BuildingOfficeIcon className="w-5 h-5" />} onView={() => setOpenModal('desa')} />
        <Card title="Kecamatan" value="40" icon={<MapIcon className="w-5 h-5" />} onView={() => setOpenModal('kecamatan')} />
        <Card title="Users" value="425" icon={<UserGroupIcon className="w-5 h-5" />} onView={() => setOpenModal('users')} />
      </div>

      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition duration-300">
          <div className="relative w-full max-w-4xl mx-4 md:mx-auto bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl p-6 md:p-8 overflow-auto max-h-[85vh] animate-fadeIn">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition"
              onClick={() => setOpenModal(null)}
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white capitalize">
              Data {openModal}
            </h2>

            <div className="overflow-x-auto">
              {openModal === 'formulir' && (
                <Table
                  headers={['Nama', 'Link']}
                  rows={[
                    { nama: 'Formulir Kegiatan', link: '/formulir/kegiatan' },
                    { nama: 'Formulir Laporan', link: '/formulir/laporan' },
                  ].map(item => [item.nama, <a href={item.link} className="text-blue-600 underline">{item.link}</a>])}
                />
              )}

              {openModal === 'desa' && (
                <Table
                  headers={['Kode', 'Nama', 'Kecamatan']}
                  rows={dataDesa.map(d => [d.Kode_Desa, d.Nama_Desa, d.Kecamatan])}
                />
              )}

              {openModal === 'kecamatan' && (
                <Table
                  headers={['Kecamatan']}
                  rows={dataKecamatan.map(nama => [nama])}
                />
              )}

              {openModal === 'users' && (
                <Table
                  headers={['Nama', 'Role']}
                  rows={[
                    ['Admin Desa', 'Admin'],
                    ['Operator Kecamatan', 'User'],
                    ['Super Admin', 'Superuser'],
                  ]}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Card({
  title,
  value,
  icon,
  onView,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  onView: () => void;
}) {
  return (
    <div className="flex flex-col bg-white border border-gray-200 shadow-md rounded-xl dark:bg-neutral-900 dark:border-neutral-800 transition hover:shadow-lg">
      <div className="p-4 md:p-5 flex justify-between gap-x-3">
        <div>
          <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">{title}</p>
          <h3 className="mt-1 text-xl font-semibold text-gray-800 dark:text-neutral-200">{value}</h3>
        </div>
        <div className="shrink-0 flex justify-center items-center size-11 bg-blue-600 text-white rounded-full dark:bg-blue-900 dark:text-blue-200">
          {icon}
        </div>
      </div>
      <button
        onClick={onView}
        className="py-3 px-4 md:px-5 inline-flex justify-between items-center text-sm text-gray-600 border-t border-gray-200 hover:bg-gray-50 dark:border-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-800 w-full"
      >
        View data
        <ArrowRightIcon className="w-4 h-4" />
      </button>
    </div>
  );
}

function Table({
  headers,
  rows,
}: {
  headers: string[];
  rows: (string | JSX.Element)[][];
}) {
  return (
    <table className="min-w-full text-sm border divide-y divide-gray-200 dark:divide-neutral-800">
      <thead className="bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-white">
        <tr>
          {headers.map((header, i) => (
            <th key={i} className="p-3 text-left font-semibold border dark:border-neutral-800">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white dark:bg-neutral-900 text-gray-700 dark:text-neutral-300">
        {rows.map((row, i) => (
          <tr key={i} className="hover:bg-gray-50 dark:hover:bg-neutral-800">
            {row.map((cell, j) => (
              <td key={j} className="p-3 border dark:border-neutral-800">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
