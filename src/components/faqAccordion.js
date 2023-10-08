
import faqData from "../data/faqData"

const Accordion = (props) => {
    const { title, description, open } = props;

    return (
            <details className="border-t-gray border-t-[1px] px-[20px] py-[15px] self-stretch last:border-b-gray last:border-b-[1px]">
                <summary className="relative">
                    <label className="font-bold font-narrow text[16px]" for="approach-one">{title}</label>
                </summary>
                <div className="font-narrow text[16px]">{description}</div>
            </details>
    )
}
const FaqAccordion = ()=>{
    return(
        <div className="pt-[40px]">
        {
            faqData.map((data,index)=>{
               return <Accordion key={index} title={data.title} description={data.description}/>
            })
        }
        </div>
    )
}
export default FaqAccordion;