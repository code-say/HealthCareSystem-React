import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Vmc from "./HomeCrad/Vmc";

import about from "../assets/about.jpg";
import Base from "./Base";



const About = () => {
    return (
        <Base title="About" description="We take care of your Health">
        <div>
             {/* <section className="bg-info py-2">
                 <div className="container">
                     <div className="row">
                         <div className="col-md-4 my-auto">
                             <h4>About Us</h4>

                         </div>
                         <div className="col-md-8 my-auto ">
                             <Link to="/">
                             <h6 className="text-white">
                                 Home / About Us
                             </h6>
                             </Link>

                         </div>
                     </div>
                 </div>

             </section> */}

             <section className="  border-bottom section">
             <img className="w-100 pb-25 mt-0 mb-5 mt-n5" src={about} alt="" />
                 <div className="container">
                     
                     <h5 className="main-heading" >Our Company</h5>
                     <div className="underline"></div>
                     <p className="text-white">
                     It's what we all feel instinctively – and science backs it up. 
                     A growing body of research shows that those who live in a caring, 
                     connected environment enjoy greater health and well-being than those who are isolated.
                      At Atria, we are dedicated to creating vibrant communities where older adults realize healthier,
                       happier, more meaningful lives – trading in loneliness for the company of neighbors, 
                     inactivity for movement and boredom for purposeful engagement.
                     </p>
                 </div>
             </section>

             <Vmc/>
            
        </div>
        </Base>
    )
}

export default About; 