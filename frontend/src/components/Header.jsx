import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div>
        <h2>Employee Management</h2>
      </div>

      <div className="header-right">
        <button className="notification-button">
          🔔
        </button>

        <div className="profile">
          <div className="profile-avatar">
            S
          </div>

          <div className="profile-info">
            <strong>Srikar</strong>
            <span>Administrator</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;