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
        description: "Great! Once the service is confirmed and reserved, all that remains is to wait for the grillers on the day and time selected.",
    }
]
export default workData;