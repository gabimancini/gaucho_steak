import Container from "../elements/container";
import Heading from "../elements/heading";
import Link from "../elements/links";
import Paragraph from "../elements/paragraph";

const Hero = () => {
    return (
        <section id="hero" className="bg-cover bg-hero bg-no-repeat h-[308px]">
            <Container>
                <Heading level="h1" children="the gaucho bbq" />
                <Paragraph type="hero_sub" children="Smoke and Grill" />
                <Paragraph type="hero_p" children="Argentinian grilled barbecue at home, events and family gatherings." />
                <Link children="Book Now" type ="button" size="medium"/>
            </Container>
        </section>
    )
}
export default Hero;