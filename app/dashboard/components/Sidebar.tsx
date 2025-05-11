'use client';

import {
  MdDashboard,
  MdAssignment,
  MdGroup,
  MdInsertChartOutlined,
  MdLogout,
  MdSettings,
  MdMenu,
  MdExpandMore
} from "react-icons/md";
import Swal from "sweetalert2";

export default function Sidebar() {
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
        actions: "space-x-3"
      },
      buttonsStyling: false,
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/login";
      }
    });
  };

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
            <a
              href="/dashboard"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <MdDashboard className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
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
              <li>
                <a
                  href="#"
                  className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  Menu 1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  Menu 2
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a
              href="/dashboard/pages/users"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <MdGroup className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="ms-3">Users</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <MdInsertChartOutlined className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="ms-3">Data Report</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <MdMenu className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="ms-3">Manage Form</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <MdMenu className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="ms-3">Manage Menu</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <MdSettings className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="ms-3">Settings</span>
            </a>
          </li>

          {/* Logout - Dibedakan dengan warna merah dan batas atas */}
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
