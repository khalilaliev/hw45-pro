import { Link, Route, Routes, useLocation } from "react-router-dom";
import { NAVBAR_ITEM } from "../utils/NavbarItem";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div className="navbar">
        <div className="navbar-start">
          <a className="navbar-item">Hillel</a>
        </div>
        <div className="navbar-center">
          {NAVBAR_ITEM.map((item) => {
            return (
              <Link
                className={`navbar-item ${
                  pathname === item.path ? "navbar-active" : ""
                }`}
                key={item.path}
                to={item.path}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
      <Routes>
        {NAVBAR_ITEM.map((item) => {
          return (
            <Route key={item.path} path={item.path} element={item.element} />
          );
        })}
      </Routes>
    </>
  );
};

export default Navbar;
