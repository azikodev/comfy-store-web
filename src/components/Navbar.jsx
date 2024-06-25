import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import NavLinks from "./NavLinks";
function Navbar() {
  return (
    <div className="bg-base-200 max-w-6x1 mx-auto px-40">
      <div className="navbar align-elment">
        <div className="navbar-start">
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-primary text-3x1 items-center"
          >
            C
          </NavLink>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <ul className="menu hidden lg:menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink to="cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="h-6 w-6" />
              <span className="badge badge-sm badge-primary indicator-item">
                8
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
  I;
}
export default Navbar;
