import { useState } from "react";
import Button from "../elements/button";
import Input from "../elements/input";
import { Link } from "react-router-dom";

const Form = () => {
    const [form, setForm] = useState({
        full_name: '',
        email: '',
        tel: ''
    });
    const [areaValue, setAreaValue] = useState({
        message: ""
    })
    const [isValid, setIsValid] = useState(true);

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const handleOnChangeArea = (event) => {
        setAreaValue({
            ...areaValue,
            [event.target.name]: event.target.value,
    });
        console.log(areaValue.message)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(areaValue.message)
        // Regex pattern for validating USA phone numbers
        const phonePattern = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

        console.log(form.tel)
        if (!phonePattern.test(form.tel)) {
            setIsValid(false);
            console.log("nop")
            return;
        }

        // Phone number is valid, do something with it
        setIsValid(true);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-[25px] bg-white px-[14px] min-w-[328px] py-[24px] rounded-[16px] ">
            <Input
                name="name"
                htmlFor="full_name"
                children="Full name"
                id="full_name"
                type="text"
                placeholder="Your name"
                value={form.full_name}
                onChange={handleChange}
            />
            <Input
                name="email"
                htmlFor="email"
                children="Email:"
                id="email"
                type="email"
                placeholder="john@john.com"
                value={form.email}
                onChange={handleChange}
                required={true}
            />
            <Input
                name="tel"
                htmlFor="tel"
                children="Tel:"
                id="tel"
                type="tel"
                placeholder="4443333333"
                value={form.tel}
                onChange={handleChange}
            />
            {!isValid && <p style={{ color: 'red' }}>Invalid phone number</p>}
            <label htmlFor="message">Message</label>
            <textarea
            className="h-52 rounded-[8px] border-[1px] border-gray-dark-opacity py-[9px] px-[26px] resize-none"
                name="message"
                id="message"
                placeholder="Please write your message..."
                onChange={handleOnChangeArea}
                value={areaValue.message}>
            </textarea>
            <Button type="submit" children="Send message" icon="send" size="x-large" />
            <Link className="text-[14px] block  text-black text-center underline underline-offset-4 " >Privacy Policy </Link>

        </form>
    );
};
export default Form;