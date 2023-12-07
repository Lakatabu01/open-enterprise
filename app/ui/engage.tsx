import Image from "next/image";
import Jason from "../assets/Jason.png";
import Alex from "../assets/Alex.png";
import Lizzie from "../assets/Lizzie.png";
import cover from "../assets/cover.png";

const Engage = () => {
  return (
    <section className="w-full flex justify-center   mt-20 ">
      <div className="w-[90%] flex justify-between flex-col md:flex-row mb-20 items-center">
        <div className="md:w-[45%] w-full flex flex-col ">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none">
              <path
                d="M18.1178 17.3726C12.1166 23.3738 8.74519 31.5131 8.74519 40C8.74518 48.487 12.1166 56.6263 18.1178 62.6275C24.1189 68.6286 32.2582 72 40.7452 72C49.2321 72 57.3714 68.6286 63.3726 62.6275L40.7452 40L18.1178 17.3726Z"
                fill="#71A894"
              />
              <circle
                cx="40.7451"
                cy="40"
                r="22.4"
                transform="rotate(135 40.7451 40)"
                fill="#303031"
              />
              <path
                opacity="0.5"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24.906 24.1607C16.1582 32.9085 16.1582 47.0914 24.906 55.8391C33.6537 64.5869 47.8366 64.5869 56.5843 55.8391C56.5843 55.8391 56.5843 55.8391 56.5843 55.8391L40.7452 39.9999L24.906 24.1607Z"
                fill="#71A894"
              />
            </svg>
          </div>
          <div>
            <h2 className="font-bold font-young md:text-3xl text-2xl text-[#303031] my-10 md:mr-14">
              Engage highly committed contributors{" "}
            </h2>
          </div>
          <div>
            <p className="font-fig text-[#303031] text-base font-normal">
              You need talented people on-demand across various tasks that your
              full-time workforce can’t prioritize at the moment. As an Open
              Enterprise, you can easily fund tasks and have people apply to
              work on them in return for funds or shares.
            </p>
          </div>
        </div>

        <div className="md:w-[50%] w-full border">
          <div className="w-[90%] border-4 rounded-2xl  border-[#303031] p-4 mx-auto shadow-[0px_6px_0px_0px_rgba(113,168,148,1)]">
            <div className="flex justify-between items-center mb-6">
              <h4 className="font-space text-[#303031] text-base font-medium tracking-tight">
                Write a how-to on Open Enterprise
              </h4>
              <div className="bg-[#71A894] rounded-3xl font-space text-[#fff] text-base py-2 px-4 font-medium tracking-tight">
                1 SHARE
              </div>
            </div>
            <div>
              <p className="font-space text-[#66645E] text-base font-medium tracking-tight">
                Looking for an amazing copywriter using Open Enterprise to help
                us write an article on how to get started.
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="w-[60%] border-4 rounded-2xl  border-[#303031] p-5 mt-6 bg-[#F3F0EA]">
              <div>
                <h2 className="mb-10 text-2xl tracking-tighter	font-bold font-space text-[#303031]">
                  3 applicants
                </h2>
              </div>

              <div className="flex items-center justify-between mb-8 ">
                <div className="flex items-center  ">
                  <div>
                    <Image
                      className="mr-4 rounded-[50%]"
                      src={Jason}
                      alt="image of Jason"
                    />
                  </div>
                  <div>
                    <p className="text-lg tracking-tighter font-semibold font-space text-[#303031]">
                      Jason Kwon{" "}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <svg
                    className="mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none">
                    <path
                      d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z"
                      fill="#F5C64F"
                    />
                  </svg>

                  <p className="text-lg tracking-tighter font-semibold font-space text-[#303031]">
                    4.8
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between mb-8 ">
                <div className="flex items-center  ">
                  <div>
                    <Image
                      className="mr-4 rounded-[50%]"
                      src={Alex}
                      alt="image of Alex"
                    />
                  </div>
                  <div>
                    <p className="text-lg tracking-tighter font-semibold font-space text-[#303031]">
                      Alex Rose{" "}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <svg
                    className="mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none">
                    <path
                      d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z"
                      fill="#F5C64F"
                    />
                  </svg>

                  <p className="text-lg tracking-tighter font-semibold font-space text-[#303031]">
                    4.5
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between mb-8 ">
                <div className="flex items-center  ">
                  <div>
                    <Image
                      className="mr-4 rounded-[50%]"
                      src={Lizzie}
                      alt="image of Lizzie"
                    />
                  </div>
                  <div>
                    <p className="text-lg tracking-tighter font-semibold font-space text-[#303031]">
                      Lizzie Ulrich{" "}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <svg
                    className="mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none">
                    <path
                      d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z"
                      fill="#F5C64F"
                    />
                  </svg>

                  <p className="text-lg tracking-tighter font-semibold font-space text-[#303031]">
                    4.2
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[40%] border-4  flex flex-col items-center rounded-2xl ml-6 relative top-10 border-[#71A894] p-5  bg-[#fff]">
              <div>
                <Image
                  className="mr-4 rounded-[50%]"
                  src={cover}
                  alt="image of Alex"
                />
              </div>

              <div className="font-space my-5">
                <h2 className="text-lg tracking-tighter font-semibold font-space text-[#303031]">
                  Alex Rose
                </h2>
                <p className="font-space text-[#66645E] text-sm font-medium tracking-tight">
                  UX Writer
                </p>
              </div>

              <div className="flex items-center justify-between w-[95%] mt-4 mb-8 ">
                <div className="">
                  <p>4 commits</p>
                </div>

                <div className="flex items-center">
                  <svg
                    className="mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none">
                    <path
                      d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z"
                      fill="#F5C64F"
                    />
                  </svg>

                  <p className="text-lg tracking-tighter font-semibold font-space text-[#303031]">
                    4.2
                  </p>
                </div>
              </div>

              <button className="w-[90%] bg-[#303031] text-[#fff] py-2 px-4 mt-4  rounded-lg">
                View profile{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Engage;
