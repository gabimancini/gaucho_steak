import Contact from "../sections/contact";
import Hero from "../sections/hero";
import HowWork from "../sections/howWork";
import Offer from "../sections/offer";
import Services from "../sections/services";
const Home = () => {
    return (
        <>
            <Hero />
            <main className="py-[40px]">
            <Offer />
            <HowWork />
            <Services />
            <Contact />
        </main>
        </>
    )
}
export default Home;