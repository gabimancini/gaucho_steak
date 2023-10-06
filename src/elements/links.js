import clsx from "clsx";
import { BsEnvelopeFill, BsTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Links = (props) => {
    const {icon,iconType,link, className, type, size, children, ...rest } = props;
    const classes = clsx(
        type === "button" && "bg-red text-white rounded-lg flex justify-center items-center font-narrow font-bold text-[15px]",
        (type === 'email' || 'tel') && 'flex items-center',
        size === 'large' && 'mt-[20px] px-14 py-3 w-[198px]',
        size === "medium" && "mt-[20px] px-6 py-2.5 w-[132px]",
        className
    )
    const iconClass = clsx(
        "mr-2.5" ,
        iconType === 'form' && 'w-[35px] text-[25px]'
    )
    return (
        <Link className={classes} type={type} size={size} {...rest}>
          {icon === "envelope" && <BsEnvelopeFill className={iconClass} iconType={iconType} />}
          {icon === "tel" && <BsTelephoneFill className={iconClass} iconType={iconType} />}
        {children}
        </Link>
    )
}
export default Links;