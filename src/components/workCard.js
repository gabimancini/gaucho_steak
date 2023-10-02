import Heading from "../elements/heading";
import Paragraph from "../elements/paragraph";
const WorkCard = (props)=>{
    const {children,title, description} = props;
    return(
        <div className="flex mb-[20px]">
        <div>{children}</div>
        <div>
            <Heading level='h3' children={title} />
            <Paragraph className="font-narrow text-[16px]" children={description} />
            </div>
        </div>
    )
}
export default WorkCard;