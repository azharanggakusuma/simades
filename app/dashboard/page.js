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
          <ChartVisitor />
          <ChartTask />
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
