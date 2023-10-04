import clsx from "clsx";
import { BsEnvelopeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Links = (props) => {
    const {icon,link, className, type, size, children, ...rest } = props;
    const classes = clsx(
        type === "button" && "bg-red text-white rounded-lg flex justify-center items-center font-narrow font-bold text-[15px]",
        type === "nav" && 'my-[20px] text-[20px] text-brown text-narrow font-bold inline-block',
        type === "footer" && 'text-white',
        size === 'large' && 'mt-[20px] px-14 py-3 w-[198px]',
        size === "medium" && "mt-[20px] px-6 py-2.5 w-[132px]",
        className
    )
    return (
        <a className={classes} type={type} size={size} {...rest}>
          {icon === "envelope" && <BsEnvelopeFill className="mr-2.5" />}
        {children}
        </a>
    )
}
export default Links;