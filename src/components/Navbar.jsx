import React from "react";
import DropDownMenu from './DropDownMenu';
import logo from "../imgs/acmctc-logo.png";
export default function Navbar({ fixed }) {

  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-green-600 p-4">
        <a href = "#homepage">
          <div className="flex items-center flex-shrink-0 text-white hover:text-green-900 mr-6">
            <img className="max-h-24 px-4" src={logo} alt="logo"></img>
            <span className="font-semibold text-5xl tracking-tight">ACM FSC</span>
          </div>
        </a>

        <div className=" flex">
                <DropDownMenu hidden = "lg:hidden"/>
          {/* <button 
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button> */}
        </div>

        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-3xl lg:flex-grow"></div>
          <div>
            <div className="text-3xl lg:flex-grow"> 
              <a
                href="#responsive-header"
                className="flex justify-end mt-4 lg:inline-block text-white hover:text-green-900 mr-4 font-bold px-2"
              >
                News
              </a>
              <a
                href="#responsive-header"
                className="flex justify-end mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-900 mr-4 font-bold px-2"
              >
                Events
              </a>
              <a
                href="#responsive-header"
                className="flex justify-end mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-900 font-bold px-2"
              >
                Executives
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
