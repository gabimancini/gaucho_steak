import Heading from "../elements/heading";
import Paragraph from "../elements/paragraph";
import NavLinks from "./navLinks";
import { Link } from "react-router-dom";
import Container from "../elements/container";
const Footer = ()=>{
    return(
        <footer className="bg-brown text-white">
<Container>
        <div>
        <Heading level="h1" children="The Gaucho BBQ"/>
        <Paragraph  children="Argentine style barbecue.  A good option for all types of events." />
        </div> 
        <div className="flex">
        <ul className="px-[40px] py-[20px] list-none flex justify-end items-start flex-1 flex-col">
                <NavLinks className='text-white' />
            </ul>
            <ul></ul>
        </div>
        <div className="flex flex-col items-center">
            <Paragraph  children="© 2023 The Gaucho BBQ LLC | All rights reserved." />
            <Link >Privacy Policy </Link>
        </div>
        </Container>
</footer>
    )
}
export default Footer;