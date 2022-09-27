import { Outlet } from "react-router-dom";
import AdminNav from "../components/AdminNav";

const AdminLayout = () => {
	const userStatus=localStorage.getItem("userStatus");
	const loggedIn = localStorage.getItem("isLoggedIn");
  if(!loggedIn){
    return (
      <p>You need to sign in to view admin page</p>
    )
  }
  if(userStatus != "admin"){ // TODO make more secure
    return (
      <p>You do not have permission to view this page</p>
    )
  }
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
