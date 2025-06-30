import { Toaster } from "sonner";
import Navbar from "../shared/navbar/Navbar";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className="container mx-auto">
      <nav>
        <Navbar />
      </nav>

      <main className="py-10 ">
        {<Outlet />}
        <Toaster />
      </main>
    </div>
  );
};

export default RootLayout;
