import Heading from "../elements/heading";
import { FaUtensils } from "react-icons/fa";
const SectionTitle = (props) => {
    const { children } = props
    return (
        <div className="flex items-center mb-[13px] self-start">
            <Heading level="h2">{children}</Heading>
            <FaUtensils className="ml-[10px]" />
        </div>
    )
}
export default SectionTitle;