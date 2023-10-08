import Heading from "../elements/heading";
import Link from "../elements/links";
import Paragraph from "../elements/paragraph";
import List from "../elements/list";
const Card = (props) => {
    let { category, price, description, item, href } = props;

    return (
        <div className="bg-white p-[40px] rounded-[8px] font-narrow md:flex-row">
            <Heading level="h2" children={category} className="text-red" />
            <div className="flex items-center">
                <span className="text-[37px]">$</span>
                <Heading level="h2" children={price} className="text-black text-[37px] font-bold  font-narrow" />
                <span className="ml-[25px] text-gray-light">/ each</span>
            </div>
            <Paragraph type="card" children={description} className="mb-[26px] max-w-[190px]" />
            <List children={item} className="mb-[26px]"/>
            <Link to={href} type="button" size="large" children="See Details" />
        </div>
    )
}
export default Card;