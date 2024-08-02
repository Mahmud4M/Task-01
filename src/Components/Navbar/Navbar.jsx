import { Link } from "react-scroll";
import Logo from "../../assets/logo.png";
import "./NavRes.css";


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
                            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow text-black text-[16px] font-extrabold bg-white">
                            <li><Link>Home</Link></li>
                            <li><Link>Features</Link></li>
                            <li><Link>How It Works</Link></li>
                            <li><Link>Customers</Link></li>
                            <li><Link>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="lg:visible invisible">
                        <a href="/">
                            <img className="w-full h-full" src={Logo} alt="Logo" />
                        </a>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[16px] font-medium">
                        <li><Link>Home</Link></li>
                        <li><Link>Features</Link></li>
                        <li><Link>How It Works</Link></li>
                        <li><Link>Customers</Link></li>
                        <li><Link>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="lg:ml-4 ml-32">
                    <button className="register btn px-12 text-[16px] bg-[#ff9f1c] rounded-full">Register</button>
                </div>
            </div>
        </>
    );
};

export default Navbar;