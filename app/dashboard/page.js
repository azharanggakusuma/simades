import Sidebar from "./components/Sidebar";
import Stats from "./components/Stats";

export default function Dashboard() {
  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <Stats />
        </div>
      </div>
    </>
  );
}
