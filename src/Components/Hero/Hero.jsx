import React from 'react';
import HeroImage from '../hero.jpg';
import GreenBtn from '../GreenBtn/GreenBtn';

const Hero = () => {
  return (
    <div
      name="home"
      className="flex flex-col justify-between w-full h-screen bg-gray-900 text-white text-center md:text-left"
    >
      <div className="grid md:grid-cols-2 max-w-screen-xl m-auto px-3">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl text-gray-500">
            Cheapest Hosting on Planet Earth
          </p>
          <h1 className="pt-1 pb-6 text-5xl md:text-7xl font-bold">
            <span className="text-lightColor">ONNN</span> Web Services
          </h1>
          <p className="text-base font-light text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            facilis nulla eveniet nemo vitae commodi dolor, amet necessitatibus
            quaerat! Quam!
          </p>
          <GreenBtn
            title="sign up"
            className="capitalize py-3 px-6 sm:w-8/12 my-8"
          />
        </div>

        <div className="flex items-center justify-center">
          <img
            src={HeroImage}
            alt="hero"
            className="w-3/4 rounded-full duration-500 hover:ring-green-300 hover:ring-8 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
