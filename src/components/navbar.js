import { useState } from "react";
import Container from "../elements/container";
import { FaBars } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import Logo from '../assets/logo.png';
import Link from "../elements/link";
import SocialIcons from "./socialIcons";
export const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "About Us",
        title: "About Us",
    },
    {
        id: "How it works",
        title: "How it works",
    },
    {
        id: "Our Services",
        title: "Our Services",
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
                        className={`${!toggle ? "hidden" : "flex"
                            } bg-white absolute top-[58px] right-0  w-[100%] sidebar`}
                    >
                        <ul className="px-[40px] py-[20px] list-none flex justify-end items-start flex-1 flex-col">
                            {navLinks.map((nav, index) => (
                                <li
                                    key={nav.id}
                                    className={active === nav.title ? "text-red" : "text-brown"}

                                    onClick={() => setActive(nav.title)}
                                >
                                    <Link size=" " type="nav" href={`#${nav.id}`} className={active === nav.title ? "text-red" : "text-brown"}>{nav.title}</Link>
                                </li>
                            ))}
                            <SocialIcons className="mt-[20px]" type='nav'  />
                            <Link className="self-center mt-[46px]" icon="envelope" size="medium" type="button" children="Contact us" />

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
                    <a className="md:self=start"><img className="width-[98px]" src={Logo} alt="Logo" /></a>
                    
                </nav>
            </Container>
        </header>
    );
};

export default Navbar;
