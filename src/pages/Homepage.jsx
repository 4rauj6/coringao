import { Link } from "react-router-dom";
import SccpTimeline from "../components/SccpTimeline";
import Hof from "../components/Hof";

function Homepage() {
  return (
    <section className="homepage">
      <div className="relative h-screen min-h-150 max-h-full max-w-full overflow-hidden">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.goal.com%2Fimages%2Fv3%2Fgetty-2258894922%2Fcrop%2FMM5DKMBQGQ5DEOBRGU5G433XMU5DAORSGYYQ%3D%3D%3D%3D%2FGettyImages-2258894922.jpg%3Fauto%3Dwebp%26format%3Dpjpg%26width%3D3840%26quality%3D60&f=1&nofb=1&ipt=ec1a49128ac4c34d3c758da1c4d53ad44e81de7193d5b5a6011ad9caa306e370&ipo=images"
          alt="header-img"
          className="header-img absolute inset-0 z-0 h-full w-full object-cover object-[40%]"
        />

        <div className="gradiant-body absolute inset-0 z-10 bg-linear-to-t from-black via-black/30 to-transparent"></div>

        <div className="header-title absolute inset-0 z-20 flex flex-col justify-around p-5 text-white box-decoration-clone">
          <span className="home-title flex max-w-65 flex-col text-[35px] font-bold">
            SUPER CAMPEÃO DO BRASIL 2025
          </span>

          <div className="mx-auto mt-6 w-full max-w-50">
            <Link
              to="/"
              className="flex w-full max-w-full cursor-pointer items-center justify-center rounded bg-gray-100 p-3 text-center text-sm text-gray-900 transition-all duration-300 hover:bg-red-600 hover:text-gray-100"
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

      <div className="mt-12 w-full px-5 md:mt-5 md:px-8 xl:mt-10 lg:p-17 xl:p-20">
        <div className="relative overflow-hidden rounded-xl">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.areavip.com.br%2Fwp-content%2Fuploads%2F2026%2F06%2Fsocrates-696x406.jpg&f=1&nofb=1&ipt=1031bc89c91194b3b46b93aaf478bf0e039655019dd54c907bb644dcca3a3f93&ipo=images"
            alt="Sócrates comemorando com a camisa do Corinthians"
            className="h-150 md:h-140 lg:h-140 xl:h-167 w-full rounded-xl object-cover object-[45%] md:object-center"
          />

          <div className="absolute inset-0 flex flex-col justify-around gap-6 p-6 text-white">
            <blockquote className="max-w-60 text-[25px] xl:max-w-120 xl:text-5xl/15 xl:ml-10 font-bold drop-shadow-md">
              &quot;O{" "}
              <span className="bg-red-600 px-1.5 py-0.5 box-decoration-clone">
                Corinthians
              </span>{" "}
              não é um time e uma torcida. É um{" "}
              <span className="bg-red-600 px-1.5 py-0.5 box-decoration-clone">
                estado de espírito.
              </span>
              &quot;
              <footer className="mt-2 text-base font-normal text-gray-200">
                — Sócrates.
              </footer>
            </blockquote>

            <Link
              to="/historia"
              className="w-full max-w-50 self-center rounded bg-white p-3 text-center text-sm font-medium text-gray-900 shadow-lg transition-all duration-300 hover:bg-red-600 hover:text-white"
            >
              Conheça nossa história
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-30 md:mt-40 xl:mt-40 flex flex-col text-white">
        <h2 className="self-center text-2xl">SCCP através da história</h2>
        <div>
          <SccpTimeline />
        </div>
      </div>

      <div className="flex  flex-col items-center justify-center">
        <h2 className="text-red-600">SCCP</h2>
        <span className="text-white text-3xl">Hall da fama</span>
        <Hof />
      </div>
    </section>
  );
}

export default Homepage;
