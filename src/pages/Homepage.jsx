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

        <div className="header-title absolute inset-0 z-20 flex flex-col justify-center gap-10 p-5 sm:p-8 md:p-12 text-white">
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

      <div className="w-full px-5 py-16 sm:px-8 sm:py-20 md:px-12 lg:px-17 lg:py-15">
        <div className="relative mx-auto w-full max-w-292 overflow-hidden">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.areavip.com.br%2Fwp-content%2Fuploads%2F2026%2F06%2Fsocrates-696x406.jpg&f=1&nofb=1&ipt=1031bc89c91194b3b46b93aaf478bf0e039655019dd54c907bb644dcca3a3f93&ipo=images"
            alt="Sócrates comemorando com a camisa do Corinthians"
            className="h-150 w-full rounded-md object-cover object-[45%_center] md:h-140 xl:h-160"
          />

          <div className="absolute inset-0 flex flex-col justify-between gap-6 p-6 sm:p-8 md:p-10 text-white">
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

      <div className="flex w-full flex-col items-center gap-8 py-12 text-white">
        <h2 className="self-center text-2xl text-center">
          SCCP <br />{" "}
          <span className="text-red-700 text-4xl">através da história</span>
        </h2>
        <div className="w-full min-w-0">
          <SccpTimeline />
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-4 overflow-hidden py-16 text-white">
        <h2 className="self-center text-2xl text-center">
          Hall da fama <br />{" "}
          <span className="text-red-700 text-4xl">SCCP</span>
        </h2>
        <Hof />
      </div>
    </section>
  );
}

export default Homepage;
