import Image from "next/image";
import picture1 from "../assets/Dillon.png";
import picture2 from "../assets/Anna.png";
import picture3 from "../assets/Kas.png";

const Kickstart = () => {
  return (
    <section className="w-full flex justify-center md:my-20 my-5">
      <div className="w-[90%] flex md:flex-row flex-col items-center md:pt-10 pt-5">
        <div className="md:w-[45%] w-full md:p-4  font-fig text-[#303031] text-base md:mr-28 pb-5 md:pb-0 ">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none">
              <g clipPath="url(#clip0_39_6)">
                <rect width="80" height="80" rx="40" fill="#F3F0EA" />
                <circle cx="60" cy="40" r="28" fill="#66645E" />
                <circle cx="60" cy="40" r="12" fill="#807E76" />
                <path d="M53 40L-1 71.1769L-1 8.82308L53 40Z" fill="#71A894" />
                <path d="M62 40L26 60.7846L26 19.2154L62 40Z" fill="#81BFA8" />
              </g>
              <defs>
                <clipPath id="clip0_39_6">
                  <rect width="80" height="80" rx="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>
            <h2 className="font-bold font-young md:text-3xl text-2xl text-[#303031] md:my-6 my-4">
              Kickstart an organization with your co-founders
            </h2>
          </div>
          <div>
            <p>
              It’s the early days, you just had a long conversation with two
              friends about a meaningful challenge that you’re all passionate
              about and have a potential solution for. You’re ready to embark
              the startup journey.
            </p>
          </div>
        </div>

        <div className="md:w-[35%] w-[100%] md:border-4 border-2 border-[#303031]  rounded-lg p-4 flex flex-col min-h-[20em] justify-between md:shadow-[15px_6px_0px_0px_rgba(113,168,148,1)] shadow-[10px_5px_0px_0px_rgba(113,168,148,1)]">
          <div>
            <h2 className="mb-10 md:text-2xl text-lg md:tracking-tighter tracking-tight	font-bold font-space text-[#303031]">
              Members
            </h2>
          </div>
          <div className="flex items-center mb-8 ">
            <div>
              <Image
                className="md:mr-4 mr-2 rounded-[50%]"
                src={picture1}
                alt="image of Dillon"
              />
            </div>
            <div>
              <p className="text-lg tracking-tighter font-semibold font-space text-[#303031]">
                Dillon Kydd
              </p>
              <p className="font-space text-[#66645E] text-base font-medium tracking-tight">
                100 SHARES
              </p>
            </div>
          </div>
          <div className="flex items-center mb-8 ">
            <div>
              <Image
                className="mr-4 rounded-[50%]"
                src={picture2}
                alt="image of Anna"
              />
            </div>
            <div>
              <p className="text-lg tracking-tighter font-semibold font-space text-[#303031]">
                Anna Olsen
              </p>
              <p className="font-space text-[#66645E] text-base font-medium tracking-tight">
                100 SHARES
              </p>
            </div>
          </div>
          <div className="flex items-center mb-8 ">
            <div>
              <Image
                className="mr-4 rounded-[50%]"
                src={picture3}
                alt="image of Kas"
              />
            </div>
            <div>
              <p className="text-lg tracking-tighter font-semibold font-space text-[#303031]">
                Kas Moss
              </p>
              <p className="font-space text-[#66645E] text-base font-medium tracking-tight">
                100 SHARES
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kickstart;
