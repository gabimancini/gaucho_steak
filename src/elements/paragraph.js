import clsx from "clsx"
const Paragraph = (props)=>{
    const {className, type, children} = props;
    const classes = clsx(
        type === 'hero_sub' && 'font-bold font-bernier mb-[25px] text-[16px] text-center text-orange',
        type === 'hero_p' && 'font-bold font-narrow leading-[29px] mb-[36px] text-[26px] text-center text-white tracking-[1.3px]',
        type === 'card' && 'font-narrow text-[15px] leading-[22.5px] text-gray-dark',
        className
    )
    return(
        <p className={classes} type={type}>{children}</p>
    )
}
export default Paragraph;