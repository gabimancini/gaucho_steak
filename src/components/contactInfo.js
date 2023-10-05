import Heading from "../elements/heading";
import Links from "../elements/links";
import SocialIcons from "./socialIcons";
const ContactInfo = () => {
    return (
        <>
            <Links className="mb-[15px] text-[14px]" icon="envelope" children="info@thegauchobbq.com" type="email" to="mailto:info@thegauchobbq.com" />
            <Links className="mb-[15px] text-[14px]" icon="tel" children="+1 444-444-4444" type="tel" to="tel:+1 444-444-4444" />
            <Heading className="mb-[5px]" level="h4" children="Follow us" />
            <SocialIcons className="ml-0 mr-[26px]" />
        </>
    )
}
export default ContactInfo;