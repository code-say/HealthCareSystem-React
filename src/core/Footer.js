import React from "react";

const Footer = () => {
    return(
       
        <footer class="text-center text-lg-start bg-light text-muted h-20">
       
          <section
            class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
          >
            
            {/* <div class="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>
       
        
            <div>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-google"></i>
              </a>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-github"></i>
              </a>
            </div> */}
           
          </section>
         
        
          
          <section className="">
            <div className="container text-center text-md-start mt-5">
       
              <div className="row mt-3">
            
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3"></i>Capg Clinic
                  </h6>
                  <p>
                  Capg Clinic 24|7 is the largest multi-channel digital healthcare platform in India, 
                  created with a vision of eliminating flexibility blockages from the healthcare industry. 
                  We believe in making healthcare affordable to everyone by combining analytic excellence, 
                  affordable cost, and extensive research with advanced technology. 
                  </p>
                </div>
            
        
                
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                
                  <h6 className="text-uppercase fw-bold mb-4">
                    Products
                  </h6>
                  <p>
                    <a href="#!" className="text-reset">Health Care</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Personal Care</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Baby Care</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Nutrition</a>
                  </p>
                </div>
             
        
               
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                  <h6 className="text-uppercase fw-bold mb-4">
                    Services
                  </h6>
                  <p>
                    <a href="#!" className="text-reset">Doctor Consultation</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Physicians</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Gynaecologists</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Dietitians</a>
                  </p>
                </div>
       

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    Contact
                  </h6>
                  <p><i className="fas fa-home me-3"></i> Kolkata, KL 10012, India</p>
                  <p>
                    <i className="fas fa-envelope me-3"></i>
                    info@example.com
                  </p>
                  <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                  <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                </div>
              </div>
            </div>
          </section>
        
          <div className="text-center p-4" style={{backgroundcolor: "rgba(0, 0, 0, 0.05)"}}>
            © 2022-2023
            {/* <a class="text-reset fw-bold" href="#">CodeSay</a> */}
          </div>
        </footer>
    );
};

export default Footer;