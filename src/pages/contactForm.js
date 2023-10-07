import ContactInfo from "../components/contactInfo";
import Container from "../elements/container";
import Heading from "../elements/heading";
import Form from "../components/form";
import Paragraph from "../elements/paragraph";
import SectionTitle from "../components/sectionTitle";

const ContactForm = () => {

    return (
        <section id="contact_form">
            <Container>
                <SectionTitle className="self-center mb-[15px]" children="contact us" />
                <Paragraph className="text-center max-w-[201px] m-auto text-[17px] font-narrow mb-[22px]" children="Any question or remarks? Just write us a message!" />
                <Form />
            </Container>
            <div className="bg-red py-[34px] mt-[50px] text-white">
                <Heading level="h2" className="mb-[24px] text-center text-white" children="Contact information" />
                <ContactInfo headingType='form' type="form" className="flex flex-col items-center"  iconType='form'/>
            </div>

        </section>

    )
}
export default ContactForm;