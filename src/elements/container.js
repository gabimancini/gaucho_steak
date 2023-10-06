import clsx from "clsx";
const Container = (props)=>{
    const {children, className} = props;
    const classes = clsx(
        "px-[24px] py-[10px] flex flex-col justify-center items-center m-auto max-w-[1240px]",
        className
    )
    return(
        <div className={classes}>{children}</div>
    )
}
export default Container