import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import Footer from "../../../components/Footer";
import Breadcrumb from "../../../components/Breadcrumb";

export default function Form4() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <Sidebar />

      <main className="flex-grow sm:ml-64">
        <div className="p-6">
          <Breadcrumb />
        </div>

        <div className="mb-8 mt-[-45px]">
        
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
