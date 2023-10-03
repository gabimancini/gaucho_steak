import { Carousel } from "@material-tailwind/react";
import FirstImg from '../assets/gallery_1_mobile.png'

export default function CarouselDefault() {
    return (
        <Carousel className="rounded-xl mt-[20px] mb-[20px]">
            <img
                src={FirstImg}
                alt="image 1"
                className="h-full w-full object-cover"
            />
            <img
                src={FirstImg}
                alt="image 2"
                className="h-full w-full object-cover"
            />
            <img
                src={FirstImg} 
                alt="image 3"
                className="h-full w-full object-cover"
            />
        </Carousel>
    );
}