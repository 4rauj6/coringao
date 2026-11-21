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
              Mais do que um time, isso é o<strong> Corinthians.</strong>
            </span>

            <button
              className="bg-white min-h-15 min-w-68 font-barlow text-black transition-all duration-300 text-md md:text-lg hover:bg-gray-900 hover:text-white z-30 rounded-md"
              type="button"
              onClick={scrollTrigger}
            >
              Descubra a loucura corinthiana
            </button>
          </div>

          <div className="absolute inset-0 z-10 bg-linear-to-t from-gray-300 via-gray-500/50 via-40% to-transparent pointer-events-none"></div>
        </div>

        <div
          className="bg-gray-300 mt-100 flex flex-col justify-center items-center p-5 gap-5"
          ref={scrollToDiv}
        >
          <span className="text-3xl md:text-5xl max-w-[80%] self-center font-bebas">
            A história de um
            <strong className="text-red-700"> bando de loucos</strong>.
          </span>
          <div className="flex flex-col justify-center items-center">
            <strong className="font-bebas text-2xl font-medium">
              O começo do time do povo.
            </strong>
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.meutimao.com.br%2F_upload%2Felenco%2F2026%2Felenco-de-1910-foi-o-primeiro-da-historia-do-corinthians_5941w.jpg&f=1&nofb=1&ipt=ddbe0e53669e2018d9a6abd68af8c7c2513c5328f171c365e1fe71693eb336b9&ipo=images"
              alt="primeiros passos"
              className="rounded-md"
            />
            <span>
              Inspirados pela excursão do time inglês Corinthian-Casuals ao
              Brasil, cinco operários (Joaquim Ambrósio, Antônio Pereira, Rafael
              Perrone, Anselmo Corrêa e Carlos Silva) fundam o clube na Rua José
              Paulino. O primeiro presidente foi o alfaiate Miguel Battaglia,
              que cravou: &quot;O Corinthians vai ser o time do povo e o povo é
              quem vai fazer o time&quot;.
            </span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span>O primeiro título paulista.</span>
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.corinthians.com.br%2Fuploads%2F16045881488164d892d7aea8f1875df07f4d82ffd0.jpg&f=1&nofb=1&ipt=61091b4b770388f98e3944cd696bd3ba9760b92c1f13a7be347c0c039a32cbbf&ipo=images"
              alt="primeiro paulista"
              className="rounded-md"
            />
            <span>
              {" "}
              o Corinthians comemora o aniversário do primeiro título de sua
              história. Em novembro de 1914, o Alvinegro venceu o Campos Elyseos
              por 4 a 0, no Parque Antártica, e sagrou- se campeão paulista pela
              primeira vez. Os gols da vitória foram feitos por Police, Peres,
              Neco e Apparício. <br />
              <br />
              Com a equipe comandada por Casemiro González, o Timão foi a campo
              com Aristides, Fúlvio e Casemiro González; Police, Bianco e César
              Nunes; Américo, Peres, Amílcar, Apparício e Neco, artilheiro do
              torneio com 12 gols. O Corinthians venceu todos os 10 jogos que
              realizou. Inclusive, assegurou o título com uma rodada de
              antecedência – ainda venceria o Lusitano por 3 a 0 já como
              campeão.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default History;
