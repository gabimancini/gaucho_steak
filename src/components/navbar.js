import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Container from "../elements/container";
import { FaBars } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import Logo from '../assets/logo.png';
import Links from "../elements/links";
import SocialIcons from "./socialIcons";
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

const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);

    return (
        <header>
            <Container >
                <nav className="w-full flex justify-between items-center navbar">
                    {/* Logo */}

                    {/* Sidebar */}
                    <div
                        className={`${!toggle ? "  translate-x-[-100%] transition-all duration-1000 " : "translate-x-[0] transition-all duration-1000 "
                            } bg-white absolute w-[100%]  top-[58px] right-0 sidebar`}
                    >
                        <ul className="px-[40px] py-[20px] list-none flex justify-end items-start flex-1 flex-col">
                            {navLinks.map((nav, index) => (

                                <li
                                    key={nav.id}
                                    onClick={() => setActive(nav.title)}
                                    className="my-[20px] text-[20px] text-brown text-narrow font-bold inline-block"
                                >
                                    {nav.hash === false ?
                                        <Link to={nav.path} size=" " type="nav" className={active === nav.title ? "text-red no" : "text-brown"}>{nav.title}</Link>
                                        : <HashLink smooth to={nav.path} size=" " type="nav" className={active === nav.title ? "text-red hash" : "text-brown hash"}>{nav.title}</HashLink>
                                    }
                                </li>
                            ))}
                            <SocialIcons className="mt-[20px]" type='nav' />
                            <Link to="/contactForm" className="self-center mt-[46px] bg-red text-white rounded-lg flex justify-center items-center font-narrow font-bold text-[15px] mt-[20px] px-14 py-3 w-[198px]" icon="envelope" size="medium" type="button" children="Contact us" />

                        </ul>
                    </div>


                    {/* Desktop Navigation 
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
*/}
                    {/* Mobile Navigation */}
                    <div className="sm:hidden flex flex-1  items-center">

                        <button
                            onClick={() => setToggle(!toggle)}
                        >{toggle ? <BsXLg className="text-[24px]" /> : <FaBars className="text-[24px] text-red" />}</button>


                    </div>
                    <Link to="/" className="md:self=start"><img className="width-[98px]" src={Logo} alt="Logo" /></Link>

                </nav>
            </Container>
        </header>
    );
};

export default Navbar;
