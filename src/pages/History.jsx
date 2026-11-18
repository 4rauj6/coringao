import { useRef } from "react";

function History() {
  const scrollToDiv = useRef(null);

  const scrollTrigger = () => {
    window.scrollTo({
      top: scrollToDiv.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="bg-gray-300 ">
        <div className="relative">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.meutimao.com.br%2F_upload%2Felenco%2F2026%2Felenco-de-1910-foi-o-primeiro-da-historia-do-corinthians_5941w.jpg&f=1&nofb=1&ipt=ddbe0e53669e2018d9a6abd68af8c7c2513c5328f171c365e1fe71693eb336b9&ipo=images"
            alt="Foto de fundação do SCCP"
            className="z-0 h-svh w-full object-cover flex justify-center items-center"
          />

          <div className="absolute top-1/5 md:top-1/3 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-40 md:gap-5 text-center">
            <span className="max-w-[90%] font-bebas text-6xl text-white md:text-6xl xl:text-8xl">
              Mais que um <span className="text-red-500">clube.</span> Isso é o{" "}
              <span className="text-red-500">Corinthians.</span>
            </span>

            <button
              className="bg-white px-10 py-3 font-bebas text-black transition-all duration-300 text-xl hover:bg-gray-800 hover:text-white z-30 rounded-md"
              type="button"
              onClick={scrollTrigger}
            >
              Descubra a loucura corinthiana
            </button>
          </div>

          <div className="absolute inset-0 z-10 bg-linear-to-t from-gray-300 via-gray-300/50 via-50% to-transparent pointer-events-none"></div>
        </div>

        <div className="bg-gray-300 mt-100" ref={scrollToDiv}>
          <span>smaidjhsaidh</span>
        </div>
      </section>
    </>
  );
}

export default History;
