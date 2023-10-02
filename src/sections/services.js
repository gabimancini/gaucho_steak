import Card from "../components/card";
import Container from "../elements/container"; 
import Paragraph from "../elements/paragraph";
import SectionTitle from "../components/sectionTitle";
// Data
import servicesData from "../data/servicesData";
// Icon
import { FaCheckCircle } from "react-icons/fa"; 
const Services = () => {

    return (
        <section id="services">
            <Container>
            <SectionTitle children="our services"  />
                 <Paragraph className="font-narrow font-regular mb-[46px] text-[16px] text-brown" children="We offer a different gastronomic experience. Ideal for all types of events. Customize your service."/>
                <div className="flex flex-col  px-[20px] gap-[26px]">
                    {
                        servicesData.map((service, index) => {
                            let items = service.list;
                            return (
                                <Card
                                    category={service.category}
                                    price={service.price}
                                    description={service.description}
                                    src={service.src}
                                    item={items.map((itemList) => {
                                        return (
                                            <li className="flex items-center text-[15px] font-narrow font-regular leading-[23px] mb-[15px] text-blue-dark">
                                            <FaCheckCircle className="mr-[10px]"/> {itemList}
                                            </li>
                                        )
                                    })}
                                />
                            )
                        })
                    }

                </div>
            </Container>
        </section>
    )
}
export default Services;
 