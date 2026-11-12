import useCarousel from "../hooks/Carousel";

function SccpTimeline() {
  const timeEvents = [
    {
      id: 1,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.meutimao.com.br%2F_upload%2Felenco%2F2026%2Felenco-de-1910-foi-o-primeiro-da-historia-do-corinthians_5941w.jpg&f=1&nofb=1&ipt=ddbe0e53669e2018d9a6abd68af8c7c2513c5328f171c365e1fe71693eb336b9&ipo=images",
      title: "A fundação.",
      year: "1910",
      content:
        "Em 1º de setembro de 1910, cinco operários — Joaquim Ambrósio, Antônio Pereira, Carlos Silva, Raphael Perrone e Anselmo Corrêa — fundaram o Sport Club Corinthians Paulista no bairro do Bom Retiro, em São Paulo. Inspirados pelo futebol do clube inglês Corinthian FC, deram início à história do futuro Time do Povo.",
    },
    {
      id: 2,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-y4msZwC0blU%2FT83v69gt7pI%2FAAAAAAAAQoM%2Fo1w67BHx1XY%2Fs1600%2Fcorinthians%2B1953.bmp&f=1&nofb=1&ipt=357b61e9c830fd1b5720b29f16d8528e19d2e68b854871f03615cb02d9a6ede2&ipo=images",
      title: "A década das conquistas.",
      year: "1951-1952",
      content:
        "O Corinthians conquista importantes títulos estaduais. Em 1954, vence o Campeonato Paulista do IV Centenário de São Paulo, uma das conquistas mais simbólicas de sua história.",
    },
    {
      id: 3,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.corinthians.com.br%2Fuploads%2F15762524658ce241e1ed84937ee48322b170b9b18c.jpg&f=1&nofb=1&ipt=679f65f3eb08eb0d99a07df51e9c57f542d263e1c90f3a7de7fc59f359d93c10&ipo=images",
      title: "Democracia corinthiana.",
      year: "1982-1983",
      content:
        "Liderado por Sócrates, Wladimir e Casagrande, o Corinthians vive um movimento histórico em que jogadores, funcionários e dirigentes participavam das decisões internas do clube. A Democracia Corinthiana também se torna um símbolo de participação política e liberdade durante a ditadura militar brasileira.",
      style: "object-[40%_center]",
    },
    {
      id: 4,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flncimg.lance.com.br%2Fcdn-cgi%2Fimage%2Fwidth%3D950%2Cquality%3D75%2Cfit%3Dpad%2Cformat%3Dwebp%2Fwp-content-galerias%2Fuploads%2F2022%2F04%2FCorinthians-1990.jpg&f=1&nofb=1&ipt=8ee5b5f4dca391e772baccb8468cd587b233e5d773b6a3b6718596cdbc96d634&ipo=images",
      title: "O primeiro brasileiro.",
      year: "1990",
      content:
        "Em 1990, liberados pelo então camisa 10, Neto, o Corinthians conquistou o seu primeiro título do campeonato brasileiro. A decisão se deu em um jogo contra o São Paulo. Mais de 100 mil pessoas foram ao Morumbi e viram Neto marcar o gol do título corintiano.",
      style: "object-[55%_center]",
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
          className="relative w-full h-full max-h-full p-7 touch-pan-y md:px-8 lg:p-17 xl:p-20"
          onTouchStart={handleTouchStart}
          onTouchMove={handleMoves}
          onTouchEnd={handleTouchEnd}
        >
          <span className="absolute flex justify-center items-center top-9 right-8 z-20 w-30 h-10 rounded-md  text-white bg-black/50 xl:text-xl xl:top-120 xl:right-20 lg:bottom-0 lg:top-20 lg:right-20">
            {timeEvents[currentItem].year}
          </span>
          <div className="relative flex justify-center w-full">
            <img
              key={timeEvents[currentItem].id}
              src={timeEvents[currentItem].img}
              alt=""
              className={`w-full h-150 xl:h-167 lg:h-140 xl:object-top object-cover rounded-md cursor-grab md:cursor-default ${timeEvents[currentItem].style}`}
            />
            <div className="absolute flex flex-col left-0 bottom-0 top-80 md:top-110 xl:top-110 lg:top-90 w-full bg-red-600 rounded-b-md ">
              <span className=" text-white text-xl xl:text-2xl p-3">
                {timeEvents[currentItem].title}
              </span>
              <span className="text-[13px] xl:text-[17px] p-3">
                {timeEvents[currentItem].content}
              </span>
            </div>
          </div>

          <button
            type="button"
            className="absolute left-8 xl:left-20 lg:left-20 md:left-10 top-85 xl:top-85 -translate-y-1/2 bg-black/70  transition-all duration-300 hover:bg-red-600 text-white px-3 py-2 rounded-full cursor-pointer z-20"
            onClick={prevItem}
          >
            prev
          </button>

          <button
            type="button"
            className="absolute right-8 xl:right-20 lg:right-20  md:right-10 top-85 xl:top-85 -translate-y-1/2 bg-black/70 transition-all duration-300 hover:bg-red-600 text-white px-3 py-2 rounded-full cursor-pointer z-20"
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
