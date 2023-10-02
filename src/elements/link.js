import clsx from "clsx";
const Link = (props) => {
    const { className, type, size, children, ...rest } = props;
    const classes = clsx(
        type === "button" && "bg-red text-white rounded-lg flex justify-center items-center font-narrow font-bold text-[15px]",
        type === "nav" && 'text-brown',
        type === "footer" && 'text-white',
        size === 'large' && 'mt-[20px] px-14 py-3 w-[198px]',
        size === "medium" && "mt-[20px] px-6 py-2.5 w-[132px]",
        className
    )
    return (
        <a className={classes} type={type} size={size} {...rest}>{children}</a>
    )
}
export default Link;