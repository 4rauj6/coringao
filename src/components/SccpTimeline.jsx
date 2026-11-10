import useCarousel from "../hooks/Carousel";

function SccpTimeline() {
  const timeEvents = [
    {
      id: 1,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.meutimao.com.br%2F_upload%2Felenco%2F2026%2Felenco-de-1910-foi-o-primeiro-da-historia-do-corinthians_5941w.jpg&f=1&nofb=1&ipt=ddbe0e53669e2018d9a6abd68af8c7c2513c5328f171c365e1fe71693eb336b9&ipo=images",
      title: "A fundação - 1910",
      content:
        "Em 1º de setembro de 1910, cinco operários — Joaquim Ambrósio, Antônio Pereira, Carlos Silva, Raphael Perrone e Anselmo Corrêa — fundaram o Sport Club Corinthians Paulista no bairro do Bom Retiro, em São Paulo. Inspirados pelo futebol do clube inglês Corinthian FC, deram início à história do futuro Time do Povo.",
    },
    {
      id: 2,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-y4msZwC0blU%2FT83v69gt7pI%2FAAAAAAAAQoM%2Fo1w67BHx1XY%2Fs1600%2Fcorinthians%2B1953.bmp&f=1&nofb=1&ipt=357b61e9c830fd1b5720b29f16d8528e19d2e68b854871f03615cb02d9a6ede2&ipo=images",
      title: "A década das conquistas - 51/54",
      content:
        "O Corinthians conquista importantes títulos estaduais. Em 1954, vence o Campeonato Paulista do IV Centenário de São Paulo, uma das conquistas mais simbólicas de sua história.",
    },
    {
      id: 3,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.corinthians.com.br%2Fuploads%2F15762524658ce241e1ed84937ee48322b170b9b18c.jpg&f=1&nofb=1&ipt=679f65f3eb08eb0d99a07df51e9c57f542d263e1c90f3a7de7fc59f359d93c10&ipo=images",
      title: "Democracia corinthiana - 82/83",
      content:
        "Liderado por Sócrates, Wladimir e Casagrande, o Corinthians vive um movimento histórico em que jogadores, funcionários e dirigentes participavam das decisões internas do clube. A Democracia Corinthiana também se torna um símbolo de participação política e liberdade durante a ditadura militar brasileira.",
    },
  ];

  const {
    currentItem,
    prevItem,
    nextItem,
    handleMoves,
    handleTouchStart,
    handleTouchEnd,
  } = useCarousel(timeEvents.length);

  return (
    <section>
      <div className="flex flex-col justify-center items-center">
        <div
          className="relative w-full h-full min-h-screen max-h-full px-5 touch-pan-y md:px-8 xl:px-8"
          onTouchStart={handleTouchStart}
          onTouchMove={handleMoves}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative flex justify-center w-full">
            <img
              key={timeEvents[currentItem].id}
              src={timeEvents[currentItem].img}
              alt=""
              className="w-full h-170 xl:h-210 object-cover rounded-xl cursor-grab"
            />
            <div className="absolute flex flex-col left-0 bottom-0 top-107 md:top-120 xl:top-170 w-full bg-red-600 rounded-b-xl ">
              <span className=" text-white text-xl p-2">
                {timeEvents[currentItem].title}
              </span>
              <span className="text-[13px] p-2">
                {timeEvents[currentItem].content}
              </span>
            </div>
          </div>

          <button
            type="button"
            className="absolute left-5 top-75 -translate-y-1/2 bg-black/70 hover:bg-red-600 text-white px-3 py-2 rounded-full cursor-pointer z-20"
            onClick={prevItem}
          >
            prev
          </button>

          <button
            type="button"
            className="absolute right-5 top-75 -translate-y-1/2 bg-black/70 hover:bg-red-600 text-white px-3 py-2 rounded-full cursor-pointer z-20"
            onClick={nextItem}
          >
            next
          </button>
        </div>
      </div>
    </section>
  );
}

export default SccpTimeline;
