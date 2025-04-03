import DashboardLayout from "@components/layouts/DashboardLayout";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    </>
  );
}

export default App;
