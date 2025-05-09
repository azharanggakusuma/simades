export default function Footer() {
  return (
    <div className="sm:ml-64">
      <footer className="mt-auto w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-3 px-6 flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
        <span>© {new Date().getFullYear()} Diskominfo Kab. Cirebon</span>
        <span className="text-xs">Version 1.0.0</span>
      </footer>
    </div>
  );
}
