import clsx from "clsx";
const Heading = (props)=>{
    const {className, level, children, ...rest} = props;
    const classes = clsx(
        level === 'h1' && 'font-bernier font-regular text-[38px] text-white',
        level === 'h2' && 'font-bernier font-regular text-[24px] text-brown',
        level === 'h3' && 'font-narrow font-bold text-[18px] text-black',
        level === 'h4' && 'font-narrow font-bold text-[16px] text-white',
        className
    )
    return(
        <>
        {level === 'h1' && <h1 className={classes} level={level} {...rest}>{children}</h1>}
        {level === 'h2' && <h2 className={classes} level={level} {...rest}>{children}</h2>}
        {level === 'h3' && <h3 className={classes} level={level} {...rest}>{children}</h3>}
        {level === 'h4' && <h4 className={classes} level={level} {...rest}>{children}</h4>}
    </>
    )
}
export default Heading;
