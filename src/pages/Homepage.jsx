import { Link } from "react-router-dom";
import SccpTimeline from "../components/SccpTimeline";

function Homepage() {
  return (
    <section className="homepage">
      <div className="relative h-screen min-h-150 max-h-full max-w-full overflow-hidden">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.goal.com%2Fimages%2Fv3%2Fgetty-2258894922%2Fcrop%2FMM5DKMBQGQ5DEOBRGU5G433XMU5DAORSGYYQ%3D%3D%3D%3D%2FGettyImages-2258894922.jpg%3Fauto%3Dwebp%26format%3Dpjpg%26width%3D3840%26quality%3D60&f=1&nofb=1&ipt=ec1a49128ac4c34d3c758da1c4d53ad44e81de7193d5b5a6011ad9caa306e370&ipo=images"
          alt="header-img"
          className="header-img absolute inset-0 w-full h-full object-cover object-[40%] z-0"
        />

        <div className="gradiant-body absolute inset-0 gap-100 z-10 bg-linear-to-t from-black via-black/70 to-transparent"></div>

        <div className="header-title absolute flex flex-col justify-center inset-0 z-20 text-white box-decoration-clone p-5">
          <span className=" home-title flex flex-col text-[35px] font-bold max-w-65">
            SUPER CAMPEÃO DO BRASIL 2025
          </span>

          <div className="max-w-50 w-full mx-auto mt-70">
            <Link
              to="/"
              className="bg-gray-100 text-gray-900 p-3 flex max-w-full w-full text-center self-center rounded transition-all duration-300 text-sm cursor-pointer hover:bg-red-600 hover:text-gray-100"
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

      <div className="w-full h-screen min-h-full max-h-full mt-20 px-5 md:px-8 xl:px-7">
        <div className="relative rounded-xl overflow-hidden">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.areavip.com.br%2Fwp-content%2Fuploads%2F2026%2F06%2Fsocrates-696x406.jpg&f=1&nofb=1&ipt=1031bc89c91194b3b46b93aaf478bf0e039655019dd54c907bb644dcca3a3f93&ipo=images"
            alt="Sócrates comemorando com a camisa do Corinthians"
            className=" w-full h-170 md:h-150 xl:h-210 object-cover object-[45%]  rounded-xl  md:object-center"
          />

          <div className="absolute inset-0 flex flex-col justify-around gap-70 p-6 text-white">
            <blockquote className="max-w-60 font-bold text-[25px]  drop-shadow-md">
              &quot;O{" "}
              <span className="bg-red-600 px-1.5 py-0.5 box-decoration-clone">
                Corinthians
              </span>{" "}
              não é um time e uma torcida. É um{" "}
              <span className="bg-red-600 px-1.5 py-0.5 box-decoration-clone">
                estado de espírito.
              </span>
              &quot;
              <footer className="font-normal text-base mt-2 text-gray-200">
                — Sócrates.
              </footer>
            </blockquote>

            <Link
              to="/historia"
              className="self-center w-full max-w-50 p-3 bg-white text-gray-900 text-center font-medium text-sm rounded shadow-lg transition-all duration-300 hover:bg-red-600 hover:text-white"
            >
              Conheça nossa história
            </Link>
          </div>
        </div>
      </div>

      <div className="text-white flex flex-col mt-10">
        <span>SCCP através da história</span>
        <SccpTimeline />
      </div>
    </section>
  );
}

export default Homepage;
