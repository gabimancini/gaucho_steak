import Contact from "../sections/contact";
import Container from "../elements/container";
import FaqAccordion from "../components/faqAccordion";
import Paragraph from "../elements/paragraph";
import SectionTitle from "../components/sectionTitle";
// Data
import faqData from "../data/faqData";
const Faq = () => {
    return (
        <div className="pb-[40px]">
            <section className="pb-[40px]" id="Faq">
                <Container>
                    <SectionTitle children="Faq" />
                    <Paragraph type="faq" >
                        Welcome to <span className="text-red">The Gaucho BBQ </span> catering FAQ section! Here, we address common questions about our exceptional barbecue catering service. Whether you're planning a backyard bash, family gathering, or special event, we've got you covered. Discover how our mouthwatering barbecue creations and hassle-free catering process can make your next occasion truly unforgettable. If you can't find the answer you're looking for, please don't hesitate to reach out to our friendly team. We're here to ensure your barbecue experience is nothing short of extraordinary!
                    </Paragraph>
                </Container>
                <FaqAccordion />
            </section>
            <Contact />
        </div>
    )
}
export default Faq;