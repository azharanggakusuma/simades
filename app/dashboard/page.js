import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Stats from "./components/Stats";
import Footer from "./components/Footer";

export default function Dashboard() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <Stats />
        </div>
      </div>
      <Footer />
    </div>
  );
}
