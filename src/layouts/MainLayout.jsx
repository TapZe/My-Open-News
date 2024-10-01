import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex flex-grow mx-2 md:mx-10 my-10 self-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
