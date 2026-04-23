import { FaHome } from "react-icons/fa";
import MyNavLink from "./MyNavLink";
import { RiTimeLine } from "react-icons/ri";
import { BiStats } from "react-icons/bi";

const Navbar = () => {

    const navItems = [
        {
            path: "/",
            text: "Home",
            icon: <FaHome />
        },
        {
            path: "/timeline",
            text: "Timeline",
            icon: <RiTimeLine />
        },
        {
            path: "/stats",
            text: "Stats",
            icon: <BiStats />
        },
    ];

    return (
        <nav className="shadow">
            <div className="navbar bg-base-100 shadow-sm px-16">
                <div className="flex-1">
                    <a className="btn btn-ghost text-2xl text-green-950 font-bold">
                        keenKeeper
                    </a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 ul flex justify-between gap-1 items-center">
                        {
                            navItems.map((item, index) => (
                                <MyNavLink key={index} href={item.path}>
                                    <div className="flex items-center gap-0.5">
                                        {item.icon} {item.text}
                                    </div>
                                </MyNavLink>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;