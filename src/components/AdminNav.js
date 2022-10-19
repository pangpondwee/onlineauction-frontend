import { Link, useLocation } from "react-router-dom";

const AdminNav = () => {
	const location = useLocation();
  const path = location.pathname.split("/")[2];
  const c_tab = (search) => {
    if(path === search){
      return "menu current-tab"
    }
    return "menu"
  }
  return (
    <div className="lefthand-nav">
      {/* class "current-tab" 'll highlight depends on current page */}
      <div className={c_tab("blacklist")}>
        <Link to="/admin/blacklist" className="menu-link">
          Blacklist
        </Link>
      </div>
      <div className={c_tab("report")}>
        <Link to="/admin/report" className="menu-link">
          <h5>Report</h5>
        </Link>
      </div>
      <div className={c_tab("confirmpayment")}>
        <Link to="/admin/confirmpayment" className="menu-link">
          Confirm Payment
        </Link>
      </div>
      <div className={c_tab("confirmdelivery")}>
        <Link to="/admin/confirmdelivery" className="menu-link">
          Confirm Delivery
        </Link>
      </div>
      <div className={c_tab("confirmrefund")}>
        <Link to="/admin/confirmrefund" className="menu-link">
          Confirm Refund
        </Link>
      </div>
    </div>
  );
};

export default AdminNav;
