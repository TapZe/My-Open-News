import { Link } from "react-router-dom";
import ThemeController from "./ThemeController";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {};

  return (
    <>
      <div className="navbar bg-base-200">
        <div className="navbar-start md:px-5">
          <Link to={`/`} className="btn btn-ghost text-xl flex">
            <p>
              <span className="text-cyan-600">O</span>pen
              <span className="text-cyan-600">News</span>
            </p>
          </Link>
        </div>
      </div>
      <div className="navbar bg-base-100 shadow-xl sticky top-0 md:px-10">
        <div className="navbar-start lg:hidden">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to={`/`}>Home</Link>
              </li>
              <li>
                <Link to={`/category`}>Category</Link>
              </li>
              <li>
                <Link to={`/programming`}>Programming</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-start hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li>
              <Link to={`/category`}>Category</Link>
            </li>
            <li>
              <Link to={`/programming`}>Programming</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex space-x-2 mr-5">
            <div className="form-control">
              <input
                type="text"
                id="search"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button
              className="btn btn-square hidden md:flex"
              onClick={handleSearch()}
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <Link to={`saved`}>
            <button className="btn mr-2">
              <FontAwesomeIcon icon={faBookmark} />
            </button>
          </Link>
          <ThemeController />
        </div>
      </div>
    </>
  );
};

export default Navbar;
