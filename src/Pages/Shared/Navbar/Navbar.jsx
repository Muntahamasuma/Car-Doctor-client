import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'

const Navbar = () => {
    const navItem = <>
    <li> <Link to='/'>Home</Link></li>
    <li> <Link to='/'>About</Link></li>
    <li> <Link to='/'>Services</Link></li>
    <li> <Link to='/'>Blog</Link></li>
    <li> <Link to='/'>Contact</Link></li>
    </>
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
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 text-xl font-semibold rounded-box z-[1] mt-3 w-52 p-2 shadow">
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
    <button className="btn btn-outline font-semibold text-xl text-[#FF3811] border-2 border-[#FF3811]">Appointment</button>
  </div>
</div>
    );
};

export default Navbar;