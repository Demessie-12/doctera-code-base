import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Portfolio_image from "../../Assets/star_icon.png";

const HeroSection = () => {
  return (
    <div className="grid w-full grid-cols-2 gap-3">
      <div className="flex flex-col gap-3 pl-2 pt-5 md:pl-5">
        <p className="text-DocOrange text-xl font-bold md:text-2xl">
          Hi, Welcome to
          <br />
          Doctera
        </p>
        <p className="text-xl font-medium">
          You get
          <span className="text-DocOrange font-bold">
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
        <button href="www.google.com" target="_blank">
          Check Resume
        </button>
      </div>
      <div className="flex">
        <img
          className="h-fit w-full max-w-96 rounded-full"
          src={Portfolio_image}
          alt="Portfolio_image"
        />
      </div>
    </div>
  );
};

export default HeroSection;
