export default function Hof() {
  const player = [
    {
      id: 1,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fconteudo.imguol.com.br%2Fc%2Fparceiros%2F9a%2F2021%2F12%2F04%2Fdez-anos-da-morte-de-doutor-socrates-relembre-a-carreira-do-craque-contestador-1638628403703_v2_450x450.jpg&f=1&nofb=1&ipt=30357fa07c9476ea1c647ddd2ed699354fe2e4453ec12d690bc6c48b38e79974&ipo=images",
    },
    {
      id: 3,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fconteudo.imguol.com.br%2Fc%2Fesporte%2F58%2F2020%2F06%2F30%2Fo-jogador-neto-do-corinthians-discute-com-o-arbitro-marcio-rezende-de-freitas-durante-partida-do-campeonato-brasileiro-de-1990-23990-1593518873507_v2_450x450.jpg&f=1&nofb=1&ipt=8489d6b15c64f429178f3d84ddecfa8092b30a964b890bb1b10c48b3050b6a3c&ipo=images",
    },
    {
      id: 4,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fconteudo.imguol.com.br%2Fc%2Fesporte%2F58%2F2020%2F06%2F30%2Fo-jogador-neto-do-corinthians-discute-com-o-arbitro-marcio-rezende-de-freitas-durante-partida-do-campeonato-brasileiro-de-1990-23990-1593518873507_v2_450x450.jpg&f=1&nofb=1&ipt=8489d6b15c64f429178f3d84ddecfa8092b30a964b890bb1b10c48b3050b6a3c&ipo=images",
    },
    {
      id: 5,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fconteudo.imguol.com.br%2Fc%2Fesporte%2F58%2F2020%2F06%2F30%2Fo-jogador-neto-do-corinthians-discute-com-o-arbitro-marcio-rezende-de-freitas-durante-partida-do-campeonato-brasileiro-de-1990-23990-1593518873507_v2_450x450.jpg&f=1&nofb=1&ipt=8489d6b15c64f429178f3d84ddecfa8092b30a964b890bb1b10c48b3050b6a3c&ipo=images",
    },
    {
      id: 6,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fconteudo.imguol.com.br%2Fc%2Fesporte%2F58%2F2020%2F06%2F30%2Fo-jogador-neto-do-corinthians-discute-com-o-arbitro-marcio-rezende-de-freitas-durante-partida-do-campeonato-brasileiro-de-1990-23990-1593518873507_v2_450x450.jpg&f=1&nofb=1&ipt=8489d6b15c64f429178f3d84ddecfa8092b30a964b890bb1b10c48b3050b6a3c&ipo=images",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-15 justify-center items-center p-10">
        {player.map((index) => (
          <div key={index.id}>
            <img src={index.img} alt="" className="rounded-xl xl:w-100" />
          </div>
        ))}
        ;
      </div>
    </>
  );
}
