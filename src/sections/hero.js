import Container from "../elements/container";
import Heading from "../elements/heading";
import { HashLink } from "react-router-hash-link";
import Paragraph from "../elements/paragraph";

const Hero = () => {
    return (
        <section id="hero" className="bg-center bg-cover bg-hero bg-no-repeat h-[308px] md:bg-hero_desktop md:h-[662px]">
            <Container className="h-[100%] max-w-[650px]">
                <Heading level="h1" children="the gaucho bbq" />
                <Paragraph type="hero_sub" children="Smoke and Grill" />
                <Paragraph type="hero_p" children="Argentinian grilled barbecue at home, events and family gatherings." />
                <HashLink className="bg-red text-white rounded-lg flex justify-center items-center font-narrow font-bold text-[15px] px-6 py-2.5" smooth  to="/#services"  >Let's start</HashLink>
            </Container>
        </section>
    )
}
export default Hero;