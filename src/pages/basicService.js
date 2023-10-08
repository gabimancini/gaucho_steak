import Contact from "../sections/contact";
import Container from "../elements/container";
import FaqAccordion from "../components/faqAccordion";
import Paragraph from "../elements/paragraph";
import SectionTitle from "../components/sectionTitle";

const BasicService = () => {
    return (
        <div id="basic">
            <Container>
                <SectionTitle children="basic service" />
                <Paragraph>
                    Excellent choice! This service is suitable for enjoying family gatherings and small events up to 30 guests.
                    The service includes the preparation of Argentine style barbecue with wood and charcoal and the garnishes.  The different cuts of meat are selected to give the best experience of Argentine cuisine.
                    We will need a space with a minimum surface area of ​​10 x 10 feet outdoors.
                    Waiter service is not provided (ask for service).
                    If you have any questions or queries, contact us, we are at your service.
                </Paragraph>
            </Container>
            <FaqAccordion />
            <Container className="py-[40px]">
                <Contact/>
            </Container>
        </div>
    )
}
export default BasicService;
