"use client";
import Image from "next/image";
import vector from "../assets/Illustration2.png";
import { useState, useRef, useEffect } from "react";

const Repeat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const targetElementRef = useRef<HTMLDivElement | null>(null);

  //Function that checks if element is visible to change state
  //which inturn triggers style for transitioning
  const handleScroll = () => {
    if (targetElementRef.current) {
      const elementRect = targetElementRef.current.getBoundingClientRect();
      const elementTop = elementRect.top;
      const windowHeight = window.innerHeight;
      if (elementTop < windowHeight) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={targetElementRef}
      className={`md:pt-32 pt-16  flex  mb-20  justify-center ${
        isVisible ? "animate-slide-in-up" : ""
      }`}>
      <div className="w-[90%] flex md:flex-row flex-col justify-between">
        <div className="md:w-1/2 w-full p-4">
          <h1 className=" md:text-4xl text-2xl font-bold font-young text-[#303031]">
            Start an Open Enterprise{" "}
          </h1>
          <p className="font-fig pt-5 text-[#66645E] md:text-lg text-base">
            If you can’t wait to run a new or existing organization on Open
            Enterprise and are willing to explore and navigate the beta, we’d
            love to get you started.
          </p>
          <button className="bg-[#71A894] text-white text-base my-10 mx-auto md:my-0 py-2 px-4 md:mt-4 rounded-md">
            Request early access
          </button>
        </div>

        <div className="md:w-1/2 w-full">
          <Image
            className="z-10"
            src={vector}
            width="800"
            height="900"
            alt=" Two cartoon characters doing a high five"
          />
        </div>
      </div>
    </section>
  );
};

export default Repeat;
