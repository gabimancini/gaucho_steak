import clsx from "clsx";
const Input = (props)=>{
    const {className, type, ...rest} = props;
    const classes = clsx(
        'rounded-[8px]',
        className
    )
    return(
        <input className={classes} type={type} {...rest} />
    )
}
export default Input;