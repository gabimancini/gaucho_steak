import clsx from "clsx";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
const SocialIcons = (props)=>{
    const {className, type} = props;
    const classes = clsx(
        'text-[35px]',
        type === 'nav' && 'text-brown',
        type === 'footer' && 'text-white',
        className)
    return(
        <div className="flex gap-[13px]">
            <FaFacebookSquare className={classes} />
            <FaInstagramSquare className={classes} />
        </div>
    )
}
export default SocialIcons;