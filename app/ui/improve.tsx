const Improve = () => {
  return (
    <section className="w-full flex items-center flex-col mt-24">
      <div className="w-[90%]  flex justify-center">
        <div className="md:w-[70%] w-full">
          <h2 className="text-center font-young font-bold md:text-3xl text-2xl text-[#303031]">
            Help us improve Open Enterprise{" "}
          </h2>
          <p className="text-center font-fig pt-5 text-[#66645E] text-base">
            As an Open Enterprise ourselves, we are actively looking for new
            talent to join our mission of improving and delivering the Open
            Enterprise model to the world. Apply for open tasks and earn a stake
            in our success.
          </p>
        </div>
      </div>

      <div className="w-[90%]  flex md:flex-row flex-col justify-between mt-12 text-[#303031] text-base mb-10">
        <div className="bg-white md:w-[30%] w-full mb-4 md:mb-0 flex flex-col font-space justify-around p-4 shadow-[0_2px_8px_0_rgba(0,0,0,0.10)]">
          <div>
            <div>
              <p className="text-lg">
                Ideate a list of features based on the Sociocracy model
              </p>
            </div>
          </div>

          <div className="my-6">
            <p className="text-[#66645E]">
              We’re looking for someone interested in business theory and
              research that’ll help us bridge the gap between our s...
            </p>{" "}
          </div>

          <div className="flex justify-between items-center w-full mt-3">
            <div className="bg-[#71A894] py-1 px-3 rounded-2xl">
              <p className="text-white">5 AUT</p>
            </div>
            <div>
              <p className="text-[#66645E]">Apply by May 15</p>
            </div>
          </div>
        </div>

        <div className="bg-white md:w-[30%] w-full mb-4 md:mb-0  flex flex-col font-space justify-around  p-4 shadow-[0_2px_8px_0_rgba(0,0,0,0.10)]">
          <div>
            <div>
              <p className="text-lg">Update documentation with FAQs </p>
            </div>
          </div>

          <div className="my-6">
            <p className="text-[#66645E]">
              Review our community chat for the most frequently asked questions
              and document answers for our product docs.
            </p>{" "}
          </div>

          <div className="flex justify-between items-center w-full mt-3">
            <div className="bg-[#71A894] py-1 px-3 rounded-2xl">
              <p className="text-white">10 AUT</p>
            </div>
            <div>
              <p className="text-[#66645E]">Apply by May 18</p>
            </div>
          </div>
        </div>

        <div className="bg-white md:w-[30%] w-full flex flex-col font-space  justify-around   p-4 shadow-[0_2px_8px_0_rgba(0,0,0,0.10)]">
          <div>
            <div>
              <p className="text-lg pr-auto">Tutorial video series </p>
            </div>
          </div>

          <div className="my-6">
            <p className="text-[#66645E]">
              Create a series of video tutorials that cover everything from
              start to finish on using Open Enterprise.
            </p>{" "}
          </div>

          <div className="flex justify-between items-center w-full mt-3">
            <div className="bg-[#71A894] py-1 px-3 rounded-2xl">
              <p className="text-white">40 AUT</p>
            </div>
            <div>
              <p className="text-[#66645E]">Apply by May 20</p>
            </div>
          </div>
        </div>
      </div>

      <button className=" bg-[#303031] text-[#fff] py-2 px-4 mt-4  rounded-lg">
        View more{" "}
      </button>
    </section>
  );
};

export default Improve;
