import Image from "next/image";
import picture from "../assets/Illustration.png";

const Intro = () => {
  return (
    <div className="pt-32 pl-28 flex items-center mb-20">
      <div className="w-1/2">
        <h1 className=" text-6xl font-bold font-young text-[#303031]">
          A new model for open collaboration
        </h1>
        <p className="font-fig pt-5 text-[#66645E] text-xl">
          Run an organization where members get rewarded for their contributions
          with fractional ownership.
        </p>
        <button className="bg-[#71A894] text-white text-lg py-2 px-4 mt-4 rounded-md">
          Request early access
        </button>
      </div>
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="671"
          height="600"
          viewBox="0 0 671 720"
          fill="none">
          <path
            d="M621.53 86.76C684.673 163.98 680.175 297.18 652.832 428.22C625.308 559.26 575.118 688.32 492.367 714.42C409.796 740.52 294.665 663.84 200.941 597.6C107.037 531.54 34.5401 475.92 9.71486 399.96C-15.1103 324.18 7.91594 227.88 63.8626 152.46C119.629 77.04 208.137 22.32 317.871 5.39998C427.606 -11.34 558.388 9.71997 621.53 86.76Z"
            fill="#F3F0EA"
          />
        </svg>
        <Image
          className="z-10 absolute top-2"
          src={picture}
          width="800"
          height="900"
          alt=" Two cartoon characters doing a high five"
        />
      </div>
    </div>
  );
};

export default Intro;
