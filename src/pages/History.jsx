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
          className="bg-gray-300 mt-20 flex flex-col justify-center items-center p-5 md:p-10 gap-6"
          ref={scrollToDiv}
        >
          <span className="text-3xl md:text-5xl max-w-[85%] self-center font-bebas">
            A história de um
            <strong className="text-red-700"> bando de loucos</strong>.
          </span>
          <div className="flex flex-col justify-center items-center gap-4">
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
          <div className="flex flex-col justify-center items-center gap-4">
            <span className="font-bebas text-2xl">
              O primeiro título paulista e as primeiras glórias.
            </span>
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
              <br />
              <br />O Timão conquistou três títulos estaduais consecutivos,
              consolidando sua força no futebol paulista. Em 54, O Corinthians
              venceu o Campeonato Paulista do ano em que São Paulo celebrou seu
              quarto centenário.
            </span>
          </div>

          <div className="flex flex-col justify-center items-center gap-4">
            <span className="font-bebas text-2xl">O fim do jejum</span>
            <img
              src="https://images.openai.com/static-rsc-4/QU9AR2N4BUiW2b6lRwhavC8vVvbZBVMC2jjoscRk7uhTpkVxSuleFhE8-xzOolWIZHV1S0AKlvduY1NSWsXnK9hHiuXhfz7A5f7D0gR9CjJMiLlOqyL9iCWyEhBXnW0c449Cs5RiJymWCIKMy6lnwFN2qkZKvcVewqQAsFBMCQbkomMU_VIRnb5XeC_RCyFS?purpose=fullsize"
              alt="primeiro paulista"
              className="rounded-md object-cover"
            />
            <span>
              Após anos de glórias, o Corinthians enfrentou anos complicados
              dentro de campo. Depois de mais de 22 anos sem conquistar o
              Campeonato Paulista, o Corinthians finalmente voltou a levantar a
              taça. Na decisão contra a Ponte Preta, em 13 de outubro de 1977,
              Basílio marcou o gol da vitória por 1 a 0. <br />
              <br />O momento ficou eternizado na memória da torcida e
              transformou o jogador em um dos maiores símbolos da história
              corinthiana.
            </span>
          </div>

          <div className="flex flex-col justify-center items-center gap-4">
            <span className="font-bebas text-2xl">
              A democracia corinthiana
            </span>
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmidianinja.org%2Fwp-content%2Fuploads%2F2024%2F02%2F447068-970x600-1.jpeg&f=1&nofb=1&ipt=a36a497225000ab631258daf92a2a3f3b9dd73e0de7d542328f496a01242327f&ipo=images"
              alt="primeiro paulista"
              className="rounded-md object-cover"
            />
            <span>
              Assim como os fundadores do Timão disseram uma vez: o Corinthians
              é o time do povo. Durante as temporadas de 1982 até 1984, um
              movimento liderado por Dr.Socrátes, Casagrande e Wladimir
              conseguiram algo extremamente importante: o direito do voto ativo
              dos torcedores dentro das decisões do clube. Esse movimento foi A
              Democracia Corinthiana
              <br />
              <br />
              Além disso, fora dos gramados o movimento foi um dos responsáveis
              por incentivar o voto da população de forma direta, por meio no
              movimento &quot;Diretas Já&quot; em plena ditadura militar. A
              Democria Corinthiana continua sendo um dos grandes marcos na
              história do SCCP e mostra a força e a conexão que o time tem com o
              povo brasileiro.
            </span>
          </div>

          <div className="flex flex-col justify-center items-center gap-4">
            <span className="font-bebas text-2xl">
              Anos 90. O primeiro brasileiro.
            </span>
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-o9OQhb5Yn3w%2FX9o-vsu-0GI%2FAAAAAAAAjho%2FBrbncp170gcGkGJin1C78hOU7D-ORLoBQCLcBGAsYHQ%2Fw1200-h630-p-k-no-nu%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=166ac00e090f29f2e7e65cba6ff638855b97ad3f75217a319b8a4656eb36b759&ipo=images"
              alt="primeiro paulista"
              className="rounded-md object-cover"
            />
            <span>
              O Corinthians conquistou pela primeira vez o Campeonato
              Brasileiro. Com Neto como um dos principais destaques, a equipe
              comandada por Nelsinho Baptista venceu o São Paulo por 1 a 0 na
              final, com gol de Tupãzinho. A conquista colocou o clube no topo
              do futebol nacional e abriu caminho para uma nova era de grandes
              títulos. <br />
              <br />O time que tinha Craque Neto como uma das peças fundamentais
              do elenco, elevou o clube e a torcida de volta ao topo do futebol
              brasileiro, trazendo reconhecimento e alegria ao seu torcedor.
            </span>
          </div>

          <div className="flex flex-col justify-center items-center gap-4">
            <span className="font-bebas text-2xl">
              Corinthians consquista o mundo!
            </span>
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.gazetaesportiva.com%2Fuploads%2Fimagem%2F2023%2F01%2F14%2F1642093113ad8d3a0a0f0a084a97fad357c649438c.jpg&f=1&nofb=1&ipt=e309bd025fd471a3723b8383f49f01ee9c4a20b48e3fb666f76a7d115b80060f&ipo=images"
              alt="primeiro paulista"
              className="rounded-md object-cover"
            />
            <span>
              Em janeiro de 2000, o Corinthians participou da primeira edição do
              Mundial de Clubes organizado pela FIFA, no Brasil. A campanha do
              timão se iniciou contra o Raja Casablanca, vencendo por 2 x 0.{" "}
              <br />
              <br /> O jogo seguinda da fase de grupos, o Corinthians empatou
              com o Real Madrid em 2 x 2. No fim da fase de grupos, o time do
              povo venceu o Al-Nassr por 2 x 0. Na final, enfrentou o Vasco da
              Gama, no Maracanã. A decisão terminou empatada e foi vencida pelo
              Timão nos pênaltis, garantindo ao clube seu primeiro título
              mundial. <br />
              <br />O time contava com fortes estrelas como: Ricardinho, Rincon,
              Luizão, Marcelinho, Vampeta, Dida e Edilson. O time era comandado
              por Oswaldo de Oliveira.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default History;
