import Container from "../elements/container";
import Form from "../components/form";
import Paragraph from "../elements/paragraph";
import SectionTitle from "../components/sectionTitle";
const ContactForm=()=>{

    return (
        <section id="contact_form">
            <Container>
                <SectionTitle className="self-center" children="contact us" />
                <Paragraph className="text-center" children="Any question or remarks? Just write us a message!" />
                <Form />
            </Container>
        </section>

    )
}
export default ContactForm;