import { Routes, Route } from "react-router-dom";
import BasicService from "../pages/basicService";
import Home from "../pages/home";
import About from "../pages/about";
import ContactForm from "../pages/contactForm";
import Faq from "../pages/faq";
import Policy from "../pages/policy";
const RoutePath = ()=> {
    return ( 
        <Routes>
          <Route path="/" element={<Home />}/>
            <Route  path="/about" exact element={<About />} />
            <Route  path="/contact" exact element={<ContactForm />} />
            <Route path="/policy" exact element ={<Policy />} />
            <Route path="/faq" exact element ={<Faq />} />
            <Route path="/basic" exact element ={<BasicService />} />
            {/*<Route path="*" element={<NoPage />} />*/}
       
        </Routes> 
    );
  }
  export default RoutePath;