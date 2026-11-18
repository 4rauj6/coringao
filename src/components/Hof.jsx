export default function Hof() {
  const player = [
    {
      id: 1,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fconteudo.imguol.com.br%2Fc%2Fparceiros%2F9a%2F2021%2F12%2F04%2Fdez-anos-da-morte-de-doutor-socrates-relembre-a-carreira-do-craque-contestador-1638628403703_v2_450x450.jpg&f=1&nofb=1&ipt=30357fa07c9476ea1c647ddd2ed699354fe2e4453ec12d690bc6c48b38e79974&ipo=images",
      title: "🇧🇷 | Sócrates",
      content: "O doutor | MC",
    },
    {
      id: 2,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fconteudo.imguol.com.br%2F2012%2F04%2F26%2Frivelino-idolo-em-suas-passagens-por-corinthians-fluminense-e-selecao-brasileira-1335491910787_450x450.jpg&f=1&nofb=1&ipt=0925c9a77e7afaa364ae7b1f137733f25a842b5a45d26cb2b715fca28685dffa&ipo=images",
      title: "🇧🇷 | Rivelino",
      content: "O garoto do parque | MC, PE",
    },
    {
      id: 3,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fconteudo.imguol.com.br%2Fc%2Fesporte%2Fd2%2F2017%2F03%2F29%2Fze-maria-ex-lateral-do-corinthians-1490814288002_v2_450x450.png&f=1&nofb=1&ipt=0ca0e4b9c90aa04796e2b47807c671f8a9242411d29945160ce46fe0ab2c56d6&ipo=images",
      title: "🇧🇷 | Zé Maria",
      content: "O Super Zé",
    },
    {
      id: 4,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fconteudo.imguol.com.br%2Fc%2Fesporte%2F71%2F2023%2F11%2F24%2Fcassio-se-lamenta-durante-corinthians-x-bahia-jogo-do-campeonato-brasileiro-1700875008682_v2_450x450.jpg&f=1&nofb=1&ipt=89ee1d79242b069cd9dd18b4d796b94d7b33d68869b6a2a85e96e3cda80c871c&ipo=images",
      title: "🇧🇷 | Cássio",
      content: "O Gigante | GOL",
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
              alt="hof-players"
              className="rounded-xl xl:w-89 bg-gray-600 p-1 lg:w-95"
            />
            <span className="absolute bottom-8 left-3 z-30 text-gray-600/80 text-xl font-bold font-bebas px-3 py-1 rounded-md">
              {index.title}
            </span>
            <span className="absolute bottom-2  left-3 z-30 text-gray-600/80 text-base font-normal font-barlow px-3 py-1 rounded-md">
              {index.content}
            </span>
            <div className="absolute inset-0 bg-linear-to-t from-gray-100 via-gray-400/40 to-transparent rounded-md"></div>
          </div>
        ))}
      </div>
    </>
  );
}
