import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <NavLink
          to="/cursos"
          activeClassName={({ isActive }) =>
            isActive ? "active" : "nav-link active"
          }
        >
          AL-MENTE
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              to="/cursos"
              activeClassName={({ isActive }) =>
                isActive ? "active" : "nav-link active"
              }
              aria-current="page"
            >
              Nuestro Cursos
            </NavLink>
            <NavLink
              to="/terapias"
              activeClassName={({ isActive }) =>
                isActive ? "active" : "nav-link active"
              }
            >
              Terapias
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
