import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";


const Navbar = () => {
    return (
        <>
            <div className="navbar bg-base-100 mt-2">
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-[16px] font-medium">
                            <li><a>Home</a></li>
                            <li><a>Features</a></li>
                            <li><a>How It Works</a></li>
                            <li><a>Customers</a></li>
                            <li><a>Contact Us</a></li>
                        </ul>
                    </div>
                    <a href="/">
                        <img className="w-full h-full" src={Logo} alt="Logo" />
                    </a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[16px] font-medium">
                        <li><a>Home</a></li>
                        <li><a>Features</a></li>
                        <li><a>How It Works</a></li>
                        <li><a>Customers</a></li>
                        <li><a>Contact Us</a></li>
                    </ul>
                </div>
                <div className="ml-4">
                    <button className="btn px-12 text-[16px] bg-[#ff9f1c] rounded-full">Register</button>
                </div>
            </div>
        </>
    );
};

export default Navbar;