import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import Breadcrumb from "./components/Breadcrumb";
import ChartVisitor from "./components/ChartVisitor";
import ChartTask from "./components/ChartTask";

export default function Dashboard() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <Sidebar />

      <main className="flex-grow p-6 sm:ml-64">
        <Breadcrumb />

        <div className="p-2 mt-8">
          <Stats />

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mt-8 mb-80 lg:mb-48">
            <div className="h-32 rounded lg:col-span-2 mb-72 lg:mb-48">
              <ChartVisitor />
            </div>
            <div className="h-32 rounded">
              <ChartTask />
            </div>
          </div>
        </div>
        {/*
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-8">
          <Stats />
        </div>
        */}
      </main>

      <Footer />
    </div>
  );
}
