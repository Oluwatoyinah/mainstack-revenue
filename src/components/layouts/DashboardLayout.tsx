import Navbar from "@components/dashboard-view/nav/Navbar";
import SideBar from "@components/dashboard-view/nav/SideBar";
import { ReactNode } from "react";

interface DashboardLayoutProps {
  children?: ReactNode;
}
const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="h-screen p-4 dashboard ">
      <Navbar />
      <main className="mt-5 py-8  mx-auto">
        <SideBar />
        <div className="container mx-auto  max-w-[80%]">
          <div className="dashboard-main-content h-full mx-auto">{children}</div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
