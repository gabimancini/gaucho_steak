import clsx from "clsx";
const Input = (props)=>{
    const {children,className, htmlFor, type, required, ...rest} = props;
    const classes = clsx(
        'rounded-[8px] border-[1px] border-gray-dark-opacity py-[9px] px-[26px]',
        className
    )
    return(
        <div className="flex flex-col">
        <label className=" font-narrow mb-[5px] text-[18px] relative" htmlFor={htmlFor}>
        {children}
        {required === true&&<span className="absolute text-red text-[24px]">*</span>}
        </label>
        <input className={classes} type={type} {...rest}  required={required} />
        
        </div>
    )
}
export default Input;