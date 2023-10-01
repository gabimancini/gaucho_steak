import clsx from "clsx";

const List = (props)=>{
    const {children,className} = props;
    const classes = clsx(
        'font-narrow font-regular text-[15px] leading-[23px] text-gray-dark',
        className
    )
    return(
        <ul className={classes}>{children}</ul>
    )
}
export default List;
