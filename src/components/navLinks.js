import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import clsx from "clsx";
export const navLinks = [
    {
        id: "home",
        path: "/#hero",
        title: "Home",
        hash: true,
    },
    {
        id: "About Us",
        path: "/about",
        title: "About Us",
        hash: false,
    },
    {
        id: "How it works",
        path: '/#how_work',
        title: "How it works",
        hash: true,
    },
    {
        id: "Our Services",
        path: '/#services',
        title: "Our Services",
        hash: true,
    },
];
const NavLinks = (props ) => {
    const { className } = props
    const [active, setActive] = useState("Home");
    const classes = clsx(
        "my-[20px] text-[20px] text-brown font-narrow font-bold inline-block",
        active === true ? "text-red " : "text-brown",
        className
    )
    return (
        <>
            {navLinks.map((nav, index) => (

                <li
                    key={nav.id}
                    onClick={() => setActive(nav.title)} 
                >
                    {nav.hash === false ?
                        <Link to={nav.path} size=" " type="nav" className={classes}>{nav.title}</Link>
                        : <HashLink smooth to={nav.path} size=" " type="nav" className={classes}>{nav.title}</HashLink>
                    }
                </li>
            ))}
        </>
    )
}
export default NavLinks;