import Container from "../elements/container";
import Heading from "../elements/heading";
import Links from "../elements/links";
const Contact = () => {
    return (
        <section id="contact">
            <Container>
                <Heading className="text-center font-bold font-narrow " level="h2" children="For additional information or to customize a service, please" />
                <Links to="/contact" icon="envelope" size="medium" type="button" children="Contact us" />
            </Container>
        </section>
    )
}
export default Contact;