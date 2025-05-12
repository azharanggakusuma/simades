// components/Loading.js
export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid mx-auto mb-4"></div>
        <p className="text-gray-700 text-sm">Loading...</p>
      </div>
    </div>
  );
}
