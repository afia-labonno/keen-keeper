'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const MyNavLink = ({href, children}) => {
    const pathName = usePathname();
    console.log("pathname:", pathName)
    return (
        <Link href={href}
            className={`px-4 py-2 font-semibold rounded-md ${pathName === href ? "bg-green-950 text-white" : ""}`}
        >
            {children}
        </Link>
    );
};

export default MyNavLink;