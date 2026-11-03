import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="hero relative h-200 overflow-hidden">
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fplacar.com.br%2F_next%2Fimage%2F%3Furl%3Dhttps%3A%252F%252Fplacar.com%252Fwp-content%252Fuploads%252F2026%252F02%252F7a0e9b7a5effab9ab5827ab29f3b2aa336563bff.jpg%26w%3D3840%26q%3D75&f=1&nofb=1&ipt=f33fdebcabb5c3e207bfef31a43069fb47b524028a5b47d3ab2d4b8b717e7fc0&ipo=images"
        alt="header-img"
        className="header-img absolute inset-0 w-full h-full object-cover object-[40%] z-0"
      />

      <div className="gradiant-body absolute inset-0 z-10 bg-linear-to-t from-gray-950 via-gray-950/10 to-transparent"></div>

      <div className="header-title absolute flex flex-col bottom-35 left-5 z-20 w-65">
        <span className="text-gray-100 text-[35px]">
          Super campeão do Brasil 2025
        </span>
        <span className=" text-gray-100 text-xl w-50">Com força foco e FÉ</span>

        <Link
          to="/"
          className="bg-gray-100 text-gray-900 transition-all duration-300 text-mdcursor-pointer hover:bg-gray-700 hover:text-gray-100 p-2 w-23 "
        >
          Saiba mais
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
