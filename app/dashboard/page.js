import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Stats from "./components/Stats";
import Footer from "./components/Footer";

export default function Dashboard() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <Sidebar />

      <main className="flex-grow p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <Stats />
        </div>
      </main>

      <Footer />
    </div>
  );
}
