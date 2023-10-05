import { useState } from "react";
import Container from "../elements/container";
import { FaBars } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import Logo from '../assets/logo.png';
import Links from "../elements/links";
import SocialIcons from "./socialIcons";
import NavLinks from "./navLinks";

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    return (
        <header>
            <Container className="h-[64px]" >
                <nav className="fixed  h-[64px] bg-yellow px-[20px] w-full flex justify-between items-center navbar z-[999]"
                  onClick={() => setToggle(!toggle)}>
                    {/* Sidebar */}
                    <div
                        className={`${!toggle ? "  translate-x-[-100%] transition-all duration-1000 " : "translate-x-[0] transition-all duration-1000 "
                            } bg-white absolute w-[100%]  top-[58px] right-0 sidebar z-[999]`}
                    >
                        <ul className="px-[40px] py-[20px] pb-[40px] list-none flex justify-end items-start flex-1 flex-col">
                          <NavLinks />
                            <SocialIcons className="mt-[20px]" type='nav' />
                            <Links to="/contactForm" className="self-center mt-[46px]" icon="envelope" size="medium" type="button" children="Contact us" />
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
                        >{toggle ? <BsXLg className="text-[24px] text-red" /> : <FaBars className="text-[24px] text-red" />}</button>


                    </div>
                     {/* Logo */}
                    <Links to="/" className="md:self=start"><img className="width-[98px]" src={Logo} alt="Logo" /></Links>

                </nav>
            </Container>
        </header>
    );
};

export default Navbar;
