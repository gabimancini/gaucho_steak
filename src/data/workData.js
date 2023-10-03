import { FaCheck, FaRegHandPointUp, FaUserClock} from "react-icons/fa";
const workData = [
    {
        icon:<FaRegHandPointUp className="text-[40px] pr-[10px]" />,
        title: "Choose your best option",
        description: "Choose the most convenient catering option for your event or family reunion. Remember to have a minimum space of 10 x 10 feet for the service.",
    },
    {
        icon:<FaCheck className="text-[40px] pr-[10px]" />,
        title: "Reserver our service",
        description: "Once the catering option has been selected, choose the date and time to hire the service. (subject to availability )."
    },
    {
        icon:<FaUserClock className="text-[40px] pr-[10px]" />,
        title: "Wait for us",
        description: "We offer a different gastronomic experience. Ideal for all types of events.  Remember: all our services are customizable, contact us and we will adjust to your needs",
    },
]
export default workData;