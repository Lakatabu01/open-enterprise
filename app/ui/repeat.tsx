import Image from "next/image";
import vector from "../assets/Illustration2.png";

const Repeat = () => {
  return (
    <section className="pt-32  flex  mb-20  justify-center">
      <div className="w-[90%] flex justify-between">
        <div className="w-1/2 p-4">
          <h1 className=" text-4xl font-bold font-young text-[#303031]">
            Start an Open Enterprise{" "}
          </h1>
          <p className="font-fig pt-5 text-[#66645E] text-lg">
            If you can’t wait to run a new or existing organization on Open
            Enterprise and are willing to explore and navigate the beta, we’d
            love to get you started.
          </p>
          <button className="bg-[#71A894] text-white text-base py-2 px-4 mt-4 rounded-md">
            Request early access
          </button>
        </div>
        <div className="w-1/2">
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
