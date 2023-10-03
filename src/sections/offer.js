import CarouselDefault from "../components/carousel";
import Container from "../elements/container";
import Paragraph from "../elements/paragraph";
import SectionTitle from "../components/sectionTitle";

const Offer = () => {
    return (
        <section id="offer">
            <Container>
                <SectionTitle children="What we offer" />
                <Paragraph className="font-narrow text-[16px]" children="We provide a catering service specialized in Argentine style barbecue, with exclusive cuts of meat accompanied by salads and delicacies such as vegetable marinades. Our service is designed for family reunions, work and business events. The number of people that our service covers ranges from 10 to 100 people maximum. The service will be subject to availability. You organize your event and we provide the grills along with the meat.
The service includes the grill staff, the grills, the meat and the side dishes. Important: waiters are not included.
For any questions do not hesitate to contact us.." />
                
            <CarouselDefault />
              
            </Container>
        </section>
    )
}
export default Offer;