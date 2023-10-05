import clsx from "clsx"
const Paragraph = (props)=>{
    const {className, type, children} = props;
    const classes = clsx(
        'text-gray-dark',
        type === 'hero_sub' && 'font-bold font-bernier mb-[25px] text-[16px] text-center text-orange',
        type === 'hero_p' && 'font-bold font-narrow leading-[29px] mb-[16px] text-[26px] text-center text-white tracking-[1.3px]',
        type === 'card' && 'font-narrow text-[15px] leading-[22.5px]',
        className
    )
    return(
        <p className={classes} type={type}>{children}</p>
    )
}
export default Paragraph;