import { Link, useLocation } from "react-router-dom";

const AdminNav = () => {
  return (
    <div className="lefthand-nav">
      {/* class "current-tab" 'll highlight depends on current page */}
      <div className="menu">
        <Link to="/admin/blacklist" className="menu-link">
          Blacklist
        </Link>
      </div>
      <div className="menu">
        <Link to="/admin/report" className="menu-link">
          <h5>Report</h5>
        </Link>
      </div>
      <div className="menu">
        <Link to="/admin/confirmpayment" className="menu-link">
          Confirm Payment
        </Link>
      </div>
      <div className="menu">
        <Link to="/admin/confirmdelivery" className="menu-link">
          Confirm Delivery
        </Link>
      </div>
    </div>
  );
};

export default AdminNav;
