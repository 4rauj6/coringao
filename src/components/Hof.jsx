export default function Hof() {
  const player = [
    {
      id: 1,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fconteudo.imguol.com.br%2Fc%2Fparceiros%2F9a%2F2021%2F12%2F04%2Fdez-anos-da-morte-de-doutor-socrates-relembre-a-carreira-do-craque-contestador-1638628403703_v2_450x450.jpg&f=1&nofb=1&ipt=30357fa07c9476ea1c647ddd2ed699354fe2e4453ec12d690bc6c48b38e79974&ipo=images",
      title: "🇧🇷 | Sócrates",
      content: "Eterna lenda",
    },
    {
      id: 2,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fconteudo.imguol.com.br%2Fc%2Fesporte%2Fe5%2F2021%2F09%2F29%2Fneto-em-acao-com-a-camisa-do-corinthians-1632925017815_v2_450x450.jpg&f=1&nofb=1&ipt=0ef5568e7a382b40a55d2133081356372b9d66d59d73b2b666b81eca419945d1&ipo=images",
      title: "🇧🇷 | Sócrates",
      content: "Eterna lenda",
    },
    {
      id: 3,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fconteudo.imguol.com.br%2Fc%2Fesporte%2F58%2F2020%2F06%2F30%2Fo-jogador-neto-do-corinthians-discute-com-o-arbitro-marcio-rezende-de-freitas-durante-partida-do-campeonato-brasileiro-de-1990-23990-1593518873507_v2_450x450.jpg&f=1&nofb=1&ipt=8489d6b15c64f429178f3d84ddecfa8092b30a964b890bb1b10c48b3050b6a3c&ipo=images",
      title: "🇧🇷 | Sócrates",
      content: "Eterna lenda",
    },
    {
      id: 4,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fconteudo.imguol.com.br%2Fc%2Fesporte%2F58%2F2020%2F06%2F30%2Fo-jogador-neto-do-corinthians-discute-com-o-arbitro-marcio-rezende-de-freitas-durante-partida-do-campeonato-brasileiro-de-1990-23990-1593518873507_v2_450x450.jpg&f=1&nofb=1&ipt=8489d6b15c64f429178f3d84ddecfa8092b30a964b890bb1b10c48b3050b6a3c&ipo=images",
      title: "🇧🇷 | Sócrates",
      content: "Eterna lenda",
    },
    {
      id: 5,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fconteudo.imguol.com.br%2Fc%2Fesporte%2F58%2F2020%2F06%2F30%2Fo-jogador-neto-do-corinthians-discute-com-o-arbitro-marcio-rezende-de-freitas-durante-partida-do-campeonato-brasileiro-de-1990-23990-1593518873507_v2_450x450.jpg&f=1&nofb=1&ipt=8489d6b15c64f429178f3d84ddecfa8092b30a964b890bb1b10c48b3050b6a3c&ipo=images",
      title: "🇧🇷 | Sócrates",
      content: "Eterna lenda",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-5 xl:grid-cols-3 xl:gap-10 justify-center items-center p-10 md:p-19">
        {player.map((index) => (
          <div
            key={index.id}
            className="relative transition-all duration-300 scale-100 hover:scale-105"
          >
            <img
              src={index.img}
              alt=""
              className="rounded-xl xl:w-89 bg-red-900 p-1 lg:w-95"
            />
            <div className="absolute inset-0 bg-linear-to-t from-red-900 via-red-400/25 to-transparent rounded-md"></div>
            <span className="absolute bottom-8 left-3 z-30 text-white text-xl font-bold px-3 py-1 rounded-md">
              {index.title}
            </span>
            <span className="absolute bottom-2  left-3 z-30 text-white text-base font-normal px-3 py-1 rounded-md">
              {index.content}
            </span>
          </div>
        ))}
        ;
      </div>
    </>
  );
}
