import clsx from "clsx";
const Container = (props)=>{
    const {children, className} = props;
    const classes = clsx(
        "px-[24px] py-[10px] flex flex-col justify-center items-center",
        className
    )
    return(
        <div className={classes}>{children}</div>
    )
}
export default Container