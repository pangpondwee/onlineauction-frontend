import { Outlet } from "react-router-dom";
import AdminNav from "../components/AdminNav";

const AdminLayout = () => {
  return (
    <div className="main-account-page">
      <AdminNav />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default AdminLayout;
