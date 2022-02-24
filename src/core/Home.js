import React from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";

import image1 from "../assets/pexels-miguel-á-padriñán-806427.jpg";
import image2 from "../assets/pexels-negative-space-48604.jpg";
import image3 from "../assets/pexels-pixabay-40751.jpg";
import image4 from "../assets/pexels-pixabay-356040.jpg";
import Slider from "./HomeCrad/Slider";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Vmc from "./HomeCrad/Vmc";


import "../styles/Home.css";





function Home() {
  // console.log("API IS", API);



  return (
    <Base title="Welcome to Health Care" description="We take care of your Health">
      <>
      <Slider />
      <section className="section">
                 <div className="container">
                     <div className="row">
                         <div className="col-md-12 text-center">
                             <h3 className="main-heading" >Our Company</h3>
                             <div className="underline mx-auto"></div>
                             <p className="text-white">
                                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident molestias aliquid blanditiis eveniet 
                                 repellat, pariatur facere consequuntur aut, nesciunt, quisquam suscipit dolorem. Aspernatur ipsam aliquid assumenda, 
                                 dolorem dolores, praesentium harum optio dignissimos omnis soluta sunt ipsa? Cupiditate at totam nesciunt veritatis. 
                                 Nobis doloremque in,obcaecati est distinctio debitis dicta? Necessitatibus.
                             </p>
                             <Link to="/about" className="btn btn-warning shadow" > Read More </Link>
                         </div>
                     </div>
                 </div>
             </section>

             {/* OUR VISION */}

             <Vmc/>

             {/* Services */}
             <section className="section  border-top shadow">
                 <div className="container">
                     <div className="row">
                         <div className="col-md-12 mb-4 text-center">
                             <h3 className="main-heading" >Our Services </h3>
                             <div className="underline mx-auto"></div>
                         </div>
                         <div className="col-md-4 shadow">
                             <div className="card shadow">
                                <img src={image1}className="img-fluid border-bottom card-img-top" 
                                alt="Services" />
                                 <div className="card-body ">
                                    <h6>Service1</h6>
                                    <div className="underline"></div>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Provident molestias aliquid blanditiis eveniet 
                                        repellat, pariatur facere consequuntur aut, nesciunt,  

                                   </p>
                                   <Link to="#" className="btn btn-link" > read more</Link>
                                     
                                 </div> 
                             </div>  
                         </div>

                         <div className="col-md-4 shadow    ">
                             <div className="card shadow">
                                <img src={image2}className="img-fluid border-bottom" alt="home" />
                                 <div className="card-body ">
                                    <h6>Service2</h6>
                                    <div className="underline"></div>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Provident molestias aliquid blanditiis eveniet 
                                        repellat, pariatur facere consequuntur aut, nesciunt,  

                                   </p>
                                   <Link to="#" className="btn btn-link" > read more</Link>
                                     
                                 </div> 
                             </div>  
                         </div>

                         <div className="col-md-4 shadow   ">
                             <div className="card shadow">
                                <img src={image3}className="img-fluid border-bottom" alt="Services" />
                                 <div className="card-body ">
                                    <h6>Service3</h6>
                                    <div className="underline"></div>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Provident molestias aliquid blanditiis eveniet 
                                        repellat, pariatur facere consequuntur aut, nesciunt,  

                                   </p>
                                   <Link to="/services" className="btn btn-link" > read more</Link>
                                     
                                 </div> 
                             </div>  
                         </div>
                         
                     </div>
                 </div>
             </section>   
        </>
      </Base>
  );
}

export default Home;
