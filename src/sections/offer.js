import CarouselDefault from "../components/carousel";
import Container from "../elements/container";
import Paragraph from "../elements/paragraph";
import SectionTitle from "../components/sectionTitle";

const Offer = () => {
    return (
        <section id="offer">
            <Container>
                <SectionTitle children="What we offer" />
                <Paragraph className="font-narrow text-[16px]" children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus." />
                
            <CarouselDefault />
              
            </Container>
        </section>
    )
}
export default Offer;