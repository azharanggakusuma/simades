"use client";

import {
  MdDashboard,
  MdAssignment,
  MdGroup,
  MdInsertChartOutlined,
  MdLogout,
  MdSettings,
  MdMenu,
  MdExpandMore,
} from "react-icons/md";
import Swal from "sweetalert2";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const handleLogout = () => {
    Swal.fire({
      title: "Logout?",
      text: "Kamu yakin ingin logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, logout",
      cancelButtonText: "Batal",
      customClass: {
        confirmButton:
          "bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none",
        cancelButton:
          "bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 focus:outline-none",
        actions: "space-x-3",
      },
      buttonsStyling: false,
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/dashboard/auth";
      }
    });
  };

  const menuClass = (target: string) =>
    `flex items-center p-2 rounded-lg group transition duration-150 ${
      pathname === target
        ? "bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
        : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    }`;

  const iconClass = (target: string) =>
    `w-5 h-5 transition-colors duration-150 ${
      pathname === target
        ? "text-gray-900 dark:text-white"
        : "text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
    }`;

  const formMenus = [
    {
      name: "Keterangan Tempat",
      href: "/dashboard/pages/forms/keterangan-tempat",
    },
    {
      name: "Keterangan Umum Desa Kelurahan",
      href: "/dashboard/pages/forms/keterangan-umum-desa-kelurahan",
    },
    {
      name: "Kependudukan dan Ketenagakerjaan",
      href: "/dashboard/pages/forms/kependudukan-dan-ketenagakerjaan",
    },
    {
      name: "Bencana Alam dan Mitigasi Bencana Alam",
      href: "/dashboard/pages/forms/bencana-alam-dan-mitigasi",
    },
    {
      name: "Pendidikan dan Kesehatan",
      href: "/dashboard/pages/forms/pendidikan-dan-kesehatan",
    },
    { name: "Sosial Budaya", href: "/dashboard/pages/forms/sosial-budaya" },
    { name: "Olahraga", href: "/dashboard/pages/forms/olahraga" },
    {
      name: "Angkutan, Komunikasi, dan Informasi",
      href: "/dashboard/pages/forms/angkutan-komunikasi-informasi",
    },
    { name: "Ekonomi", href: "/dashboard/pages/forms/ekonomi" },
    { name: "Keamanan", href: "/dashboard/pages/forms/keamanan" },
    {
      name: "Keuangan dan Aset Desa",
      href: "/dashboard/pages/forms/keuangan-aset-desa",
    },
    {
      name: "Perlindungan Sosial, Pembangunan, dan Pemberdayaan Masyarakat",
      href: "/dashboard/pages/forms/perlindungan-sosial-pembangunan-pemberdayaan",
    },
    {
      name: "Aparatur Pemerintahan Desa",
      href: "/dashboard/pages/forms/aparatur-pemerintahan-desa",
    },
    {
      name: "Lembaga Kemasyarakatan di Desa Kelurahan",
      href: "/dashboard/pages/forms/lembaga-kemasyarakatan",
    },
    {
      name: "Data Lokasi Geospasial",
      href: "/dashboard/pages/forms/data-lokasi-geospasial",
    },
  ];

  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800">
        <a href="#" className="flex items-center ps-2.5 mb-5">
          <img
            src="/img/logo_kabcirebon.png"
            className="h-6 me-3 sm:h-7"
            alt="Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            SIMADES
          </span>
        </a>
        <ul className="space-y-2 font-medium">
          <li>
            <a href="/dashboard" className={menuClass("/dashboard")}>
              <MdDashboard className={iconClass("/dashboard")} />
              <span className="ms-3">Dashboard</span>
            </a>
          </li>

          <li>
            <button
              type="button"
              className="flex items-center w-full p-2 text-base text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
            >
              <MdAssignment className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="flex-1 ms-3 text-left whitespace-nowrap">
                Forms
              </span>
              <MdExpandMore className="w-4 h-4" />
            </button>
            <ul id="dropdown-example" className="hidden py-2 space-y-2">
              {formMenus.map((menu, index) => (
                <li key={index}>
                  <a
                    href={menu.href}
                    className={`${menuClass(
                      menu.href
                    )} pl-11 truncate overflow-hidden whitespace-nowrap block`}
                    title={menu.name}
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <a
              href="/dashboard/pages/users"
              className={menuClass("/dashboard/pages/users")}
            >
              <MdGroup className={iconClass("/dashboard/pages/users")} />
              <span className="ms-3">Users</span>
            </a>
          </li>

          <li>
            <a
              href="/dashboard/pages/data-report"
              className={menuClass("/dashboard/pages/data-report")}
            >
              <MdInsertChartOutlined
                className={iconClass("/dashboard/pages/data-report")}
              />
              <span className="ms-3">Data Report</span>
            </a>
          </li>

          <li>
            <a
              href="/dashboard/pages/manage-form"
              className={menuClass("/dashboard/pages/manage-form")}
            >
              <MdMenu className={iconClass("/dashboard/pages/manage-form")} />
              <span className="ms-3">Manage Form</span>
            </a>
          </li>

          <li>
            <a
              href="/dashboard/pages/manage-menu"
              className={menuClass("/dashboard/pages/manage-menu")}
            >
              <MdMenu className={iconClass("/dashboard/pages/manage-menu")} />
              <span className="ms-3">Manage Menu</span>
            </a>
          </li>

          <li>
            <a
              href="/dashboard/pages/settings"
              className={menuClass("/dashboard/pages/settings")}
            >
              <MdSettings className={iconClass("/dashboard/pages/settings")} />
              <span className="ms-3">Settings</span>
            </a>
          </li>

          <li className="border-t border-gray-300 dark:border-gray-600 mt-2 pt-2">
            <button
              onClick={handleLogout}
              className="flex items-center w-full p-2 text-red-600 rounded-lg hover:bg-red-100 dark:hover:bg-red-900 group"
            >
              <MdLogout className="w-5 h-5 text-red-500 group-hover:text-red-700 dark:group-hover:text-red-300" />
              <span className="ms-3">Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
}
