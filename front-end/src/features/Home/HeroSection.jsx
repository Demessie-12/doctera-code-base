import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Portfolio_image from "../../Assets/star_icon.png";
import discout_tag from "../../Assets/discount-tag.jpg";
import star_dull from "../../Assets/star_dull_icon.png";
import discount_label from "../../Assets/discount-label.png";

const HeroSection = () => {
  let slideIndex = 0;
  setTimeout(showSlides, 1);
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides?.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
  }

  return (
    <div className="grid w-full grid-cols-2 gap-3">
      <div className="flex flex-col gap-3 pl-2 pt-5 md:pl-5 xl:pl-10">
        <p className="text-xl font-bold text-DocOrange md:text-2xl xl:text-3xl">
          Hi, Welcome to
          <br />
          Doctera
        </p>
        <p className="text-xl font-medium md:text-2xl">
          You get
          <span className="font-bold text-DocOrange xl:text-3xl">
            <Typewriter
              options={{
                strings: [
                  "New instruments",
                  "Original products",
                  "Lab Equipments",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </p>
        <p className="mb-10 text-sm font-medium text-gray-400 md:text-lg">
          Doctera is easy platform to buy medical equipments from your home.
        </p>
      </div>
      <div className="relative m-auto h-auto max-h-[300px] w-2/3 max-w-full py-2">
        <div className="mySlides">
          <img
            className="h-fit w-full max-w-96"
            src={Portfolio_image}
            alt="Portfolio_image"
          />
        </div>
        <div className="mySlides">
          <img
            className="h-fit w-full max-w-96"
            src={discout_tag}
            alt="Portfolio_image"
          />
        </div>
        <div className="mySlides">
          <img
            className="h-fit w-full max-w-96"
            src={star_dull}
            alt="Portfolio_image"
          />
        </div>
        <div className="mySlides">
          <img
            className="h-fit w-full max-w-96"
            src={discount_label}
            alt="Portfolio_image"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
