import { useState, useRef } from "react";
import Button from "../elements/button";
import Input from "../elements/input";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';

const Form = () => {
    const [isSummitted, setIsSummitted] = useState(false)
    const [form, setForm] = useState({
        name: '',
        email: '',
        tel: ''
    });
    const contactForm = useRef();
    const [areaValue, setAreaValue] = useState({
        message: ""
    })
    const [isValid, setIsValid] = useState(true);

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
        setIsSummitted(false);
    };

    const handleOnChangeArea = (event) => {
        setAreaValue({
            ...areaValue,
            [event.target.name]: event.target.value,
        });
        console.log(areaValue.message)
    }

    const handleSubmit = (event) => {
        emailjs.sendForm('service_8vl6j2s', 'template_lh9ndco', contactForm.current, '7kGGMthtNLDqmb8Cx')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        console.log("Enviado");
        setForm({
            name: '',
            email: '',
            tel: ''
        });
        setAreaValue({ message: "" })
        setIsSummitted(true);
        event.preventDefault();
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
        <form ref={contactForm} onSubmit={handleSubmit} className="flex flex-col gap-[25px] bg-white px-[14px] min-w-[328px] py-[24px] rounded-[16px] ">
            <Input
                name="name"
                htmlFor="name"
                children="Full name"
                id="name"
                type="text"
                placeholder="Your name"
                value={form.name}
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
            {
                isSummitted && <div
                    className="mb-3 inline-flex w-full items-center rounded-lg bg-green-100 px-6 py-5 text-base text-green-700"
                    role="alert">
                    <span class="mr-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="h-5 w-5">
                            <path
                                fill-rule="evenodd"
                                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                clip-rule="evenodd" />
                        </svg>
                    </span>
                    Thanks for contacting us! We will be in touch with you shortly.
                </div>
            }
            <Button type="submit" children="Send message" icon="send" size="x-large" />
            <Link className="text-[14px] block  text-black text-center underline underline-offset-4 " >Privacy Policy </Link>

        </form>
    );
}
export default Form;