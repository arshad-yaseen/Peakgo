import React from "react";

const Header = () => {
  return (
    <div className="header ">
      <div className=" w-full h-16 top-0 flex absolute z-50">
        <div className="w-2/5 h-full flex items-center">
          <a href="/"  className="text-2xl peakgo-book ml-36 text-primary cursor-pointer">Peakgo</a>
        </div>
        <div className="w-3/5 h-full">
          <nav className=" h-full flex items-center pr-32">
            <a href="/" className="text-white list-none font-peakgo-medium ml-auto mr-6 hover:text-green-500 cursor-pointer">
              Home
            </a>
            <a href="" className="text-white list-none font-peakgo-medium mr-6 hover:text-green-500 cursor-pointer">
              Favorites
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
