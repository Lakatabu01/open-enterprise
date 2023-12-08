"use client";
import Jassir from "../assets/Jassir.png";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const Onboard = () => {
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
    <section ref={targetElementRef} className="w-full flex justify-center ">
      <div
        className={`w-[90%] py-20 flex md:flex-row flex-col justify-between items-center ${
          isVisible ? "animate-slide-in-right" : ""
        }`}>
        <div className="border-4 rounded-2xl md:w-[40%] w-full border-[#303031] p-4 font-space">
          <div className="flex items-center mb-8 ">
            <div>
              <Image
                className="mr-4 rounded-[50%]"
                src={Jassir}
                alt="image of Jassir"
              />
            </div>
            <div>
              <p className="text-lg tracking-tighter font-semibold font-space text-[#303031]">
                Jassir Jonis
              </p>
              <p className="font-space text-[#66645E] text-base font-medium tracking-tight">
                Pre-seed angel investor
              </p>
            </div>
          </div>

          <div>
            <p className="text-[#303031] text-base font-medium tracking-tight">
              Hey guys, love what you’re doing and I’m convinced that together
              we’ll achieve amazing things.
            </p>
          </div>

          <div className="flex mt-8">
            <div className="pr-20">
              <p className="text-[#66645E] text-base font-medium tracking-tight ">
                COMMIT
              </p>
              <p className="text-[#303031] text-lg tracking-tight">
                10,000 DAI
              </p>
            </div>
            <div>
              <p className="text-[#66645E] text-base font-medium tracking-tight">
                SHARES
              </p>
              <p className="text-[#303031] text-lg tracking-tight">20</p>
            </div>
          </div>

          <button className="w-[90%] bg-[#303031] text-[#fff] py-4 px-8 mt-8 rounded-lg">
            Go to vote
          </button>
        </div>

        <div className="md:w-[50%] w-full flex flex-col mt-8 md:mt-0 ">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none">
              <rect width="80" height="80" rx="40" fill="#F3F0EA" />
              <circle opacity="0.2" cx="40" cy="40" r="32" fill="#71A894" />
              <circle opacity="0.4" cx="40" cy="40" r="24" fill="#71A894" />
              <circle opacity="0.6" cx="40" cy="40" r="17" fill="#71A894" />
              <circle cx="40" cy="40" r="9" fill="#71A894" />
            </svg>
          </div>
          <div>
            <h2 className="font-bold font-young md:text-3xl text-2xl text-[#303031] md:my-10 my-4 md:mr-14">
              Onboard users, investors and advisors as you grow
            </h2>
          </div>
          <div>
            <p className="font-fig text-[#303031] text-base font-normal">
              You’ve bootstrapped and delivered an MVP, and some investors and
              advisors are interested in having a chat with you. As an Open
              Enterprise, you can onboard them seamlessly into your digital
              organization and align them with your success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Onboard;
