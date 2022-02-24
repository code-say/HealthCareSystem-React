// import Footer from "../../core/Footer";
// import Navbar from "../Navbar";
// import Image from ".../assets/img-01.png"
import React from "react";
import emailjs from '@emailjs/browser';

import Menu from "./Menu";
import "../styles/Contact.css";
import { useState } from "react";
import { Link } from "react-router-dom";


const Result = () => {
  return(
    <p>Your message has been successfully sent. We will contact you soon</p>
  )
}

const Contact = () => {

  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wl4ervg', 'template_7pswnzg', e.target, 'user_8qT7hL8XYcD1JIbVfM82b')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
      showResult(true)
  };

  // hide result
  setTimeout(() => {
    showResult(false)
  }, 5000 ); 


   
      
      
      
      // {/* <form action="" onSubmit={sendEmail}>
      
      //         <div class="formWord">
      //           <h2>Contact Us!</h2>
      //           <h3><span>Full Name</span></h3>
      //           <br />
      //           <input class="input100" type="text" name="fullName" required />
      //           <br />
      //           <h3><span>Phone Number</span></h3>
      //           <br />
      //           <input class="input100" type="text" name="phone" required />
      //           <br />
      //           <h3><span>Enter Email</span></h3>
      //           <br />
      //           <input class="input100" type="text" name="email" required />
      //           <br />
      //         </div>
      //         <div class="formWord">
      //           <h3><span>Message</span></h3>
      //           <br />
      //           <textarea name="message" required></textarea>
      //           <br />
      //           <button>SUBMIT</button>

      //           <div class="row">{result ? <Result /> : null}</div>
      //         </div>
      //       </form> */}
 return (
        <div>
          <form action="" onSubmit={sendEmail}>
            <section className="bg-info py-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 my-auto">
                                <h4>Contact Us</h4>

                            </div>
                            <div className="col-md-8 my-auto ">
                              <Link to="/">
                                <h6 className="float-end text-white">
                                    Home / Contact Us

                                </h6>
                                </Link>

                            </div>
                        </div>
                    </div>

            </section>

            <section className="section">
                <div className="container">
                    <div className="card shadow ">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6 border-right ">
                                    <h6>Contact Form</h6>
                                    <hr/>
                                    <div className="form-group">
                                        <label className="mb-1">Full Name</label>
                                        <input type="text" className="form-control " placeholder="Enter Full Name"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Phone Number</label>
                                        <input type="text" className="form-control " placeholder="Enter Phone Number"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="mb-1">Email Address</label>
                                        <input type="text" className="form-control " placeholder="Enter Email Address"/>
                                    </div>
                                    <div className="form-group"> 
                                        <label className="mb-1">Message</label>
                                        <textarea className="form-control " placeholder= "Type your Message..." rows="3"></textarea>
                                    </div> 
                                    <div className="form-group py-3 "> 
                                        
                                        <button className="btn btn-primary shadow w-100 "  > Send Message </button>
                                    </div> 
                                </div>
                                {/* <div className="col-md-6 border-start">
                                    <h5 className="main-heading">Address Information</h5>
                                    <div className="underline"></div>

                                    <p>
                                        tawanda nhare 
                                    </p>

                                    <p>
                                        phone:  003979890i02
                                    </p>

                                    <p>
                                        nharetawanda@gmail.com
                                    </p>

                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="row">{result ? <Result /> : null}</div>
            </form>
        </div>
    );
};
          

  export default Contact;