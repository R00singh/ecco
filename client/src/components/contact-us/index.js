import React from "react";
import "./styles.css"
import { Navber, Footer } from "../shop/partials";

export default function Contact(){
    return (    
        <>
        <Navber />
        <div id="contact"  style={{marginTop: "100px"}}>
          <div>
          <section id="storeInfo" data-aos="fade-up">
    <div class="container">
      <div class="storeInfo__wrapper">
        <div class="storeInfo__item">
          <div class="storeInfo__icon">
            <img src="/Images/clock.svg"/>
          </div>
          <h3 class="storeInfo__title">
            24 Hours
          </h3>
          <p class="storeInfo__text">
            Opening Hour
          </p>
        </div>
        <div class="storeInfo__item">
          <div class="storeInfo__icon">
            <img src="/Images/address.svg"/>
          </div>
          <h3 class="storeInfo__title">
            C.G. City Ahamamu
          </h3>
          <p class="storeInfo__text">
            Address: IIIT, Lucknow , UttarPradesh (INDIA)
          </p>
        </div>
        <div class="storeInfo__item">
          <div class="storeInfo__icon">
            <img src="/Images/phone.svg"/>
          </div>
          <h3 class="storeInfo__title">
            +91- 8002130634
          </h3>
          <p class="storeInfo__text">
            Call Now
          </p>
        </div>
      </div>
    </div>
  </section>


          </div>
               

            </div>
            
        
        <Footer />
        </>
    )
}