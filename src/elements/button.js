import { clsx } from "clsx";
import { FaTelegramPlane } from "react-icons/fa";
const Button = (props) => {
    const { icon, size, className, children, ...rest } = props;
    const classes = clsx(
        "bg-red text-white rounded-lg flex justify-center items-center font-narrow font-bold text-[15px]",
        size === 'large' && 'px-14 py-3 w-[198px]',
        size === "medium" && "px-6 py-2.5 w-[132px]",
        className
    )

    return (
        <button className={classes} size={size} {...rest}>
          
            {icon === "send" && <FaTelegramPlane className="mr-2.5" />}
            {children}
        </button>
    )
}
export default Button;
