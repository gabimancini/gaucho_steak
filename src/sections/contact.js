import Container from "../elements/container";
import Heading from "../elements/heading";
import Link from "../elements/link";
const Contact = () => {
    return (
        <section id="contact">
            <Container>
                <Heading className="text-center font-bold font-narrow " level="h2" children="For additional information or to customize a service, please" />
                <Link icon="envelope" size="medium" type="button" children="Contact us" />
            </Container>
        </section>
    )
}
export default Contact;