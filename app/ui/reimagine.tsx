const ReImagine = () => {
  return (
    <div className="w-full flex items-center flex-col">
      <div className="w-[90%]  flex justify-center">
        <div className="w-[70%]">
          <h2 className="text-center font-young text-2xl text-[#303031]">
            Reimagining what it means to work
          </h2>
          <p className="text-center font-fig pt-5 text-[#66645E] text-base">
            Teams and communities using Open Enterprise fundamentally unlock a
            reality of work that reimagines how people engage in economic
            opportunity, meeting the demands and expectations of a modern
            organization.
          </p>
        </div>
      </div>

      <div className="w-[90%]  flex justify-between mt-12 font-fig text-[#303031] text-base mb-10">
        <div className="bg-white w-[30%] flex flex-col items-center p-4 shadow-[0_2px_8px_0_rgba(0,0,0,0.10)]">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="104"
              height="88"
              viewBox="0 0 104 88"
              fill="none">
              <mask
                id="mask0_28_42"
                // style="mask-type:alpha"
                maskUnits="userSpaceOnUse"
                x="8"
                y="0"
                width="88"
                height="88">
                <circle cx="52" cy="44" r="44" fill="#F3F0EA" />
              </mask>
              <g mask="url(#mask0_28_42)">
                <circle cx="52" cy="44" r="44" fill="#F3F0EA" />
                <circle opacity="0.8" cx="32" cy="43" r="32" fill="#303031" />
                <circle opacity="0.8" cx="72" cy="43" r="32" fill="#71A894" />
              </g>
            </svg>
          </div>
          <div className="my-4">
            <h2 className="text-lg font-bold">Modern workforce</h2>
          </div>
          <div>
            <p className="text-center">
              Multistakeholder governance aligns employees with the
              organization’s wider community.
            </p>
          </div>
        </div>

        <div className="bg-white w-[30%] flex flex-col items-center p-4 shadow-[0_2px_8px_0_rgba(0,0,0,0.10)]">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="104"
              height="88"
              viewBox="0 0 104 88"
              fill="none">
              <mask
                id="mask0_28_46"
                // style="mask-type:alpha"
                maskUnits="userSpaceOnUse"
                x="8"
                y="0"
                width="88"
                height="88">
                <circle cx="52" cy="44" r="44" fill="#F3F0EA" />
              </mask>
              <g mask="url(#mask0_28_46)">
                <circle cx="52" cy="44" r="44" fill="#F3F0EA" />
                <path
                  opacity="0.8"
                  d="M52 20L79.7128 68H24.2872L52 20Z"
                  fill="#303031"
                />
                <path d="M52 68L24.2872 20L79.7128 20L52 68Z" fill="#F3F0EA" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M38.1437 44L52.0001 68L65.8565 44L52.0001 20L38.1437 44Z"
                  fill="#71A894"
                />
              </g>
            </svg>
          </div>
          <div className="my-4">
            <h2 className="text-lg font-bold">Meritocratic by design</h2>
          </div>
          <div>
            <p className="text-center">
              Tokenized ownership aligns deeply committed individuals with the
              organization’s success.
            </p>
          </div>
        </div>

        <div className="bg-white w-[30%] flex flex-col items-center p-4 shadow-[0_2px_8px_0_rgba(0,0,0,0.10)]">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="104"
              height="88"
              viewBox="0 0 104 88"
              fill="none">
              <mask
                id="mask0_28_53"
                // style="mask-type:alpha"
                maskUnits="userSpaceOnUse"
                x="8"
                y="0"
                width="88"
                height="88">
                <circle cx="52" cy="44" r="44" fill="#F3F0EA" />
              </mask>
              <g mask="url(#mask0_28_53)">
                <circle cx="52" cy="44" r="44" fill="#F3F0EA" />
                <circle cx="52" cy="44" r="28" fill="#71A894" />
                <circle opacity="0.8" cx="52" cy="44" r="16" fill="#303031" />
                <path
                  d="M52 36L53.7961 41.5279H59.6085L54.9062 44.9443L56.7023 50.4721L52 47.0557L47.2977 50.4721L49.0938 44.9443L44.3915 41.5279H50.2039L52 36Z"
                  fill="#F3F0EA"
                />
              </g>
            </svg>
          </div>
          <div className="my-4">
            <h2 className="text-lg font-bold">Engineered for resilience</h2>
          </div>
          <div>
            <p className="text-center">
              Open Enterprise supports best practices in sociocratic management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReImagine;
