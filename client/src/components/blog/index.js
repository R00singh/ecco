import React from "react";
import "./styles.css"
import { Navber, Footer } from "../shop/partials";

export default function blog(){
    return (    
        <>
        <Navber />
        <div id="blog" style={{marginTop: "100px"}}>
        <section id="ourStory" data-aos="fade-up">
    <div class="container">
      <div class="ourStory__wrapper">
{/* phoyooooooooo */}

        {<div class="ourStory__img">
          <img src="\Images\Shubham.jpeg"></img>
        </div> }
        <div class="ourStory__info">
          <h3 class="ourStory__title">
            Our Story
          </h3>
          <p class="ourStory__subtitle">
            BringitH
          </p>
          <p class="ourStory__text">
            Welcome to BringitH. We take pride in delivering any basic general necessities to all our fellow IIIT Lucknow college mates as soon as possible.
            <br/><br/>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolor reprehenderit dolores doloribus ea alias a eius similique saepe omnis adipisci cupiditate rem, soluta nemo ratione voluptate nobis incidunt id numquam. Consequuntur vero iure architecto.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section id="ourGoals" data-aos="fade-down">
    <div class="container">
      <div class="ourGoals__info">
        <h3 class="ourGoals__title">
          Our Goals
        </h3>
        <p class="ourGoals__text">
        As hostlers of IIIT Lucknow, we don't have the access to markets or shops for articles of daily use. Also we have to spend a lot of money in transportation as they are far away and if we order such basic items on online sites, they usually take some time and high delivery charges.
So we came up with a better solution where these goods directly comes to us and we don't have to spend our time roaming around in the city.
        </p>
      </div>
      { <div class="ourGoals__imgs__wrapper" data-aos="fade-up">
        <div class="ourGoals__img1">
          <img src="/Images/IMG_20220728_210721_200.jpg"/>
        </div>
        <div class="ourGoals__img2">
          <img src="/Images/WhatsApp Image 2022-07-31 at 8.41.56 PM.jpeg"/>
        </div>
        <div class="ourGoals__img3">
          <img src="/Images/Hamid.jpeg"/>
        </div>
      </div> }
    </div>
  </section>
        </div>
        <Footer />
        </>
    )
}