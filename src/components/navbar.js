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
      <Container className="h-[64px] relative" >
        <nav className="fixed  h-[64px] bg-yellow px-[20px] w-full flex justify-between navbar z-[999]">
             {/* Sidebar */}
          <div
            onClick={() => setToggle(!toggle)}
            className={`${!toggle ? "  translate-x-[-100%] transition-all duration-1000 " : "translate-x-[0] transition-all duration-1000 "
              } bg-white absolute w-[100%]  top-[58px] right-0 sidebar z-[999]`}
          >
            <ul className="px-[40px] py-[20px] pb-[40px] list-none flex justify-end items-start flex-1 flex-col">
              <NavLinks type='nav' />
              <SocialIcons className="mt-[20px]" type='nav' />
              <Links to="/contact" className="self-center mt-[46px]" icon="envelope" size="medium" type="button" children="Contact us" />
            </ul>
          </div>
          <div className="sm:hidden flex flex-1  items-center">
            <button
              onClick={() => setToggle(!toggle)}
            >{toggle ? <BsXLg className="stroke-1 text-[24px] text-red" /> : <FaBars className="text-[24px] text-red" />}</button>
          </div>
          {/* Desktop Navigation */}
          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            <NavLinks type='nav' />
            <SocialIcons type='nav' />
          </ul>
          {/* Mobile Navigation */}
          <Links to="/" className="absolute right-[24px] w-[98px] md:left-[24px]"><img src={Logo} alt="Logo" /></Links>

        </nav>
          {/* Logo */}
    
      </Container>
    </header>
  );
};

export default Navbar;
