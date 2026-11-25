import { Link } from "react-router-dom";
import SccpTimeline from "../components/SccpTimeline";
import Hof from "../components/Hof";

function Homepage() {
  return (
    <section className="homepage">
      <div className="relative min-h-screen w-full overflow-hidden">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.goal.com%2Fimages%2Fv3%2Fgetty-2258894922%2Fcrop%2FMM5DKMBQGQ5DEOBRGU5G433XMU5DAORSGYYQ%3D%3D%3D%3D%2FGettyImages-2258894922.jpg%3Fauto%3Dwebp%26format%3Dpjpg%26width%3D3840%26quality%3D60&f=1&nofb=1&ipt=ec1a49128ac4c34d3c758da1c4d53ad44e81de7193d5b5a6011ad9caa306e370&ipo=images"
          alt="header-img"
          className="header-img absolute inset-0 z-0 h-full w-full object-cover object-[40%]"
        />

        <div className="gradiant-body absolute inset-0 z-10 bg-linear-to-t from-black via-black/30 to-transparent"></div>

        <div className="header-title absolute inset-0 bottom-30 z-20 flex flex-col justify-center gap-10 p-5 sm:p-8 md:p-12 xl:justify-around text-white">
          <span className="home-title flex max-w-65 md:max-w-90 xl:max-w-100 flex-col text-[35px] md:text-[50px] xl:text-8xl font-bold font-bebas">
            SUPER CAMPEÃO DO BRASIL 2025
          </span>

          <div className="mx-auto mt-6 w-full max-w-50 font-bebas">
            <Link
              to="/"
              className="flex w-full max-w-full cursor-pointer items-center justify-center rounded bg-gray-100 p-3 text-center text-xl text-gray-900 transition-all duration-300 hover:bg-red-600 hover:text-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 animate-pulse"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              Saiba mais
            </Link>
          </div>
        </div>
      </div>

      <div className="sccp-history w-full px-5 py-16 sm:px-8 sm:py-20 md:px-12 lg:px-17 xl:py-36">
        <div className="relative mx-auto w-full max-w-292 overflow-hidden">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.areavip.com.br%2Fwp-content%2Fuploads%2F2026%2F06%2Fsocrates-696x406.jpg&f=1&nofb=1&ipt=1031bc89c91194b3b46b93aaf478bf0e039655019dd54c907bb644dcca3a3f93&ipo=images"
            alt="Sócrates comemorando com a camisa do Corinthians"
            className="history-card h-150 w-full rounded-md object-cover object-[45%_center] md:h-140 xl:h-155"
          />

          <div className="card-components absolute inset-0 flex flex-col justify-between md:justify-around xl:justify-between gap-10 p-6 sm:p-8 md:p-10 text-white font-bebas">
            <blockquote className="max-w-60 text-[25px] md:max-w-70 xl:max-w-120 md:text-4xl/12 xl:text-5xl/15 xl:ml-10 font-bold drop-shadow-md">
              <div className="card-text">
                &quot;
                <span className="bg-red-600 px-1.5 py-0.5 box-decoration-clone">
                  O Corinthians
                </span>{" "}
                não é um time e uma torcida. É um{" "}
                <span className="bg-red-600 px-1.5 py-0.5 box-decoration-clone">
                  estado de espírito.
                </span>
                &quot;
                <footer className="mt-2 text-base font-normal text-gray-200 font-barlow">
                  — Sócrates.
                </footer>
              </div>
            </blockquote>

            <Link
              to="/historia-sccp"
              className="w-full max-w-50 self-center rounded bg-white p-3 text-center text-xl font-medium text-gray-900 shadow-lg transition-all duration-300 hover:bg-red-600 hover:text-white"
            >
              Conheça nossa história
            </Link>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-center gap-8 py-12 xl:py-10 mb-30 text-white">
        <h2 className="self-center text-4xl text-center font-bebas">
          SCCP <br />{" "}
          <span className="text-red-700 text-4xl">através da história</span>
        </h2>
        <div className="w-full min-w-0">
          <SccpTimeline />
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-4 overflow-hidden py-16 bg-gray-200">
        <h2 className="self-center text-4xl text-center font-bebas">
          Hall da fama <span className="text-red-700">SCCP</span>
        </h2>
        <Hof />
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-4 overflow-hidden mt-10 p-6">
        <h2 className="text-white font-bebas text-[2em] min-w-full text-center">
          Mural das consquistas
        </h2>
        <div className="flex flex-col text-white gap-5 lg:grid lg:grid-cols-2 lg:p-7 xl:grid-cols-3">
          <div className="flex flex-col justify-center items-center gap-3">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F29%2Fd8%2F5b%2F29d85b51359f170b9419d2aff3987e3e.png&f=1&nofb=1&ipt=b58da18bed2feeb24b8a740a15b5595374f3b45fb1cf26ccd9d1d4bbd497aedb&ipo=images"
              alt="taça paulistão"
              className="w-70 object-cover md:w-100 lg:w-lg"
            />
            <span className="text-3xl font-bebas">31x campeão paulista</span>
            <span className="text-[12px]">
              1914, 1916, 1922-1924, 1928-1930, 1937-1939, 1941, 1951, 1952,
              1954, 1977, 1979, 1982, 1983, 1988, 1995, 1999, 2001, 2003, 2009,
              2013, 2017-2019, 2025.
            </span>
          </div>

          <div className="flex flex-col justify-center items-center gap-3">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftmssl.akamaized.net%2Fimages%2Ferfolge%2Fverybigquad%2F262.png%3Flm%3D1466586549&f=1&nofb=1&ipt=da401938c7c644df7f07af87f46f009507eed788b3398d20fdb79f112cc06ae5&ipo=images"
              alt="taça brasileirão"
              className="w-40 object-cover md:w-60 lg:w-70"
            />
            <span className="text-3xl font-bebas">7x campeão brasileiro</span>
            <span className="text-[12px]">
              1990, 1998, 1999,2005, 2011, 2015, 2017.
            </span>
          </div>

          <div className="flex flex-col justify-center items-center gap-3">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F54%2Fae%2Fd0%2F54aed0af77fc735e94ce8e6176ec0625.png&f=1&nofb=1&ipt=7224b7ed9be062199b61b628414969fcfb283b01dca6422f6c58e88985573420&ipo=images"
              alt="taça libertadores"
              className="w-35 object-cover lg:w-40"
            />
            <span className="text-3xl font-bebas">1x campeão da america</span>
            <span className="text-[12px]">2012</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Homepage;
