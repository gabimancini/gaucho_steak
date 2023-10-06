import clsx from "clsx";
import Heading from "../elements/heading";
import Links from "../elements/links";
import SocialIcons from "./socialIcons";

const ContactInfo = ({headingType, className, type, iconType}) => {
    const classes = clsx(
       'mb-[15px] text-[14px]',
        type === "form" && 'flex flex-col items-center gap-[10px] text-[16px]',
        className
    )
    const hideHeading = clsx(
        "mb-[5px]",
        headingType === 'form' && 'hidden',
        className
    )
    return (
        <div className={className}>
            <Links className={classes} icon="envelope" iconType={iconType} children="info@thegauchobbq.com" type="email" to="mailto:info@thegauchobbq.com" />
            <Links className={classes} icon="tel" iconType={iconType} children="+1 444-444-4444" type="tel" to="tel:+1 444-444-4444" />
            <Heading className={hideHeading} level="h4" children="Follow us" headingType={headingType} />
            <SocialIcons className={"mr-[13px]"} />
        </div>
    )
}
export default ContactInfo;