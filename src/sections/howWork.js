import Container from "../elements/container";
import SectionTitle from "../components/sectionTitle";
import WorkCard from "../components/workCard";
// Data
import workData from "../data/workData";
const HowWork = () => {
    return (
        <section id="how_work">
            <Container>
            <SectionTitle children="How does it work" />
            {
                workData.map((work,index)=>{
                    return(
                        <WorkCard children={work.icon} title={work.title} description={work.description}/>
                    )
                })
            }
            </Container>
        </section>
    )
}
export default HowWork;