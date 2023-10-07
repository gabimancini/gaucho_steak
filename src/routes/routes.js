import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import ContactForm from "../pages/contactForm";
import Policy from "../pages/policy";
const RoutePath = ()=> {
    return ( 
        <Routes>
          <Route path="/" element={<Home />}/>
            <Route  path="/about" exact element={<About />} />
            <Route  path="/contact" exact element={<ContactForm />} />
            <Route path="/policy" exact element ={<Policy />} />
            {/*<Route path="*" element={<NoPage />} />*/}
       
        </Routes> 
    );
  }
  export default RoutePath;