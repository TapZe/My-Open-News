import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <container className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex flex-grow">
        <Outlet />
      </main>
      <Footer />
    </container>
  );
};

export default MainLayout;
