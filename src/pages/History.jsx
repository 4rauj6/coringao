import { useRef } from "react";

function History() {
  const scrollToDiv = useRef(null);

  const scrollTrigger = () => {
    scrollToDiv.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <section className="bg-gray-300 ">
        <div className="relative">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fp2.trrsf.com%2Fimage%2Ffget%2Fcf%2F1200%2F630%2Fmiddle%2Fimages.terra.com%2F2026%2F10%2F31%2F1681996482-41bcfd9ab658ebaac1661f58080aad6b.jpg&f=1&nofb=1&ipt=3054b7311d3687a457f01586701414f782bf8f7b4948b7f78f42b55c321ce5ab&ipo=imagess"
            alt="Foto de fundação do SCCP"
            className="z-0 h-svh w-full object-cover flex justify-center items-center object-[35%] brightness-85 md:object-[]"
          />

          <div className="absolute top-1/7 left-1/2 z-20 flex -translate-x-1/2 xl:top-1/4 lg:top-1/3  flex-col items-center gap-55 sm:gap-70 md:gap-60 lg:gap-10 text-center">
            <span className="max-w-[93%] font-bebas text-6xl text-white drop-shadow-2xl sm:text-6xl md:text-7xl xl:text-[5em]">
              Mais do que um time, isso é o
              <span className=""> Corinthians.</span>
            </span>

            <button
              className="bg-white min-h-15 min-w-68 font-barlow text-black transition-all duration-300 text-md md:text-lg hover:bg-gray-700 hover:text-white z-30 rounded-md"
              type="button"
              onClick={scrollTrigger}
            >
              Descubra a loucura corinthiana
            </button>
          </div>

          <div className="absolute inset-0 z-10 bg-linear-to-t from-gray-300 via-gray-500/50 via-40% to-transparent pointer-events-none"></div>
        </div>

        <div className="bg-gray-300 mt-100">
          <span ref={scrollToDiv}> smaidjhsaidh</span>
        </div>
      </section>
    </>
  );
}

export default History;
