import { FaHome } from "react-icons/fa";
import MyNavLink from "./MyNavLink";
import { RiTimeLine } from "react-icons/ri";
import { BiStats } from "react-icons/bi";
import Image from "next/image";
import logoImg from "@/assets/img/logo.png"

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
        <nav className="shadow ">
            <div className="navbar flex flex-col sm:flex-row sm:justify-between items-center bg-base-100 shadow-sm px-3 sm:px-4 md:px-8 lg:px-16 py-2">
                <div className="sm:flex-1 mb-2 sm:mb-0 flex justify-center sm:justify-start w-full sm:w-auto">
                    <Image 
                        src={logoImg} 
                        alt="Logo" 
                        width={150} 
                        height={75}
                        className="w-28 md:w-36 lg:w-44 h-auto"
                    />
                </div>
                <div className="flex-none">
                    <ul className="flex menu menu-horizontal px-1 ul items-center">
                        {
                            navItems.map((item, index) => (
                                <MyNavLink key={index} href={item.path}>
                                    <div className="flex items-center gap-0.5 text-xs md:text-sm lg:text-base">
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