import ContactInfo from "./contactInfo";
import Heading from "../elements/heading";
import Paragraph from "../elements/paragraph";
import NavLinks from "./navLinks";
import { Link } from "react-router-dom";
import Container from "../elements/container";
const Footer = () => {
    return (
        <footer className="bg-brown py-[30px] text-white ">
            <Container className="grid grid-cols-2 md:grid-cols-[20%,50%,200px] ">
                <div className="self-start col-span-full md:col-span-1">
                    <Heading className="text-[26px] text-white tracking-[3.9px]" level="h2" children="the gaucho bbq" />
                    <Paragraph className="font-narrow mb-[24px] text-[14px] text-white" children="Argentine style barbecue. A good option for all types of events." />
                </div>
                <div className="md:m-auto">
                    <Heading className="mb-[15px]" level='h4' children="Pages" />
                    <ul>
                        <NavLinks cla ssName='text-white' type='footer' />
                    </ul>
                </div>
                <div>
                    <Heading className="mb-[15px]" level='h4' children="Contact us" />
                    <ul>
                        <ContactInfo className="text-[14px]" />
                    </ul>
                </div>


            </Container>
            <div className="border-t-[1px] border-t-white py-[10px] leading-7">
                <Paragraph className="text-[14px] text-center text-white" children="© 2023 The Gaucho BBQ LLC | All rights reserved." />
                <Link to="/policy" className="text-[14px] block text-center" >Privacy Policy </Link>
            </div>
        </footer>
    )
}
export default Footer;