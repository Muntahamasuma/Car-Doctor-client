import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const hanldeLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "left-end",
          icon: "success",
          title: "Log out succesfully",
          showConfirmButton: false,
          timer: 1500,
          color: "#FF3811",
        });
      })
      .catch((error) => console.error("error"));
  };
  const navItem = (
    <>
      <li>
        {" "}
        <Link to="/">Home</Link>
      </li>
      <li>
        {" "}
        <Link to="/">About</Link>
      </li>
      <li>
        {" "}
        <Link to="/">Services</Link>
      </li>
      <li>
        {" "}
        <Link to="/">Blog</Link>
      </li>
      <li>
        {" "}
        <Link to="/">Contact</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 h-32">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 text-xl font-semibold rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navItem}
          </ul>
        </div>
        <Link clLinkssName="btn btn-ghost text-xl">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl font-semibold">
          {navItem}
        </ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} className="space-x-2">
              <Link to='/bookings' className="btn btn-outline btn-sm lg:btn-md font-semibold text-xl text-[#FF3811] border-2 border-[#FF3811]">
                Bookings
              </Link>

              <a
                onClick={hanldeLogOut}
                className="btn btn-outline btn-sm lg:btn-md font-semibold text-xl text-[#FF3811] border-2 border-[#FF3811] text-center"
              >
                Logout
              </a>
            </div>
          </div>
        ) : (
          <li className="btn font-semibold text-xl text-white bg-[#FF3811] text-center">
            <Link to="/login">Login</Link>
          </li>
        )}
      </div>
    </div>
  );
};

export default Navbar;
