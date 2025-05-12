"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Breadcrumb() {
  const pathname = usePathname();

  const segments = pathname
    .split("/")
    .filter((segment) => segment !== "");

  const formatSegment = (segment: string) =>
    segment
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

  const isDashboardOnly = pathname === "/dashboard";

  // Buat item breadcrumb
  const breadcrumbItems = isDashboardOnly
    ? [{ name: "Home", href: "/" }, { name: "Dashboard", href: "/dashboard" }]
    : segments.map((seg, idx) => ({
        name: formatSegment(seg),
        href: "/" + segments.slice(0, idx + 1).join("/"),
      }));

  const isDashboard = pathname === "/dashboard";
  const pageTitle = isDashboard
    ? "Welcome Back!"
    : breadcrumbItems[breadcrumbItems.length - 1].name;

  return (
    <div className="flex items-center justify-between mt-16">
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">
          {pageTitle}
        </h1>
        {isDashboard && (
          <p className="text-sm text-gray-500 mt-1">Diskominfo Kab. Cirebon</p>
        )}
      </div>

      <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex items-center">
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;
            return (
              <li key={index} className="flex items-center">
                {isLast ? (
                  <span className="text-gray-800 font-medium">{item.name}</span>
                ) : (
                  <Link href={item.href} className="text-gray-600 hover:underline">
                    {item.name}
                  </Link>
                )}
                {!isLast && (
                  <svg
                    className="w-3 h-3 mx-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
