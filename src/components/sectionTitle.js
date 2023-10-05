import Heading from "../elements/heading";
import { FaUtensils } from "react-icons/fa";
import clsx from "clsx";
const SectionTitle = (props) => {
    const { children, className } = props;
    const classes = clsx(
        "flex items-center mb-[13px] self-start",
        className
    )
    return (
        <div className={classes}>
            <Heading level="h2">{children}</Heading>
            <FaUtensils className="ml-[10px]" />
        </div>
    )
}
export default SectionTitle;