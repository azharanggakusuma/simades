export default function Breadcrumb() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="flex items-center justify-between mt-16">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Welcome Back!</h1>
          <p className="text-sm text-gray-500 mt-1">Diskominfo Kab. Cirebon</p>
        </div>

        {/* Breadcrumb Navigation */}
        <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <span className="text-gray-600">Dashboard</span>
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
            </li>
            <li className="text-gray-800 font-medium">Home</li>
          </ol>
        </nav>
      </div>
    </>
  );
}
