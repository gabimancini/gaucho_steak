import clsx from "clsx"
const Paragraph = (props)=>{
    const {className, type, children} = props;
    const classes = clsx(
        'font-narrow text-gray-dark text-[17px]',
        type === 'hero_sub' && 'font-bold font-bernier mb-[25px] text-[17px] text-center text-orange',
        type === 'hero_p' && 'font-bold leading-[29px] mb-[16px] text-[26px] text-center text-white tracking-[1.3px]',
        type === 'card' && 'text-[15px] leading-[22.5px]',
        type === 'policy' && 'self-start',
        type === 'faq' && 'self-start',
        className
    )
    return(
        <p className={classes} type={type}>{children}</p>
    )
}
export default Paragraph;