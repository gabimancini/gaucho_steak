import Container from "../elements/container";
import Heading from "../elements/heading";
import WorkCard from "../components/workCard";
import { FaUtensils } from "react-icons/fa";
// Data
import workData from "../data/workData";
const HowWork = () => {
    return (
        <section id="how_work">
            <Container>
            <div className="flex items-center mb-[13px] self-start"><Heading level="h2" children="How does it work" /> <FaUtensils className="ml-[10px]" /></div> 

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