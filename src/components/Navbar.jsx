import { callIcon } from "../assets/icons";
import { searchIcon } from "../assets/icons";
import { Link } from "react-router-dom";
import { BellIcon } from "../assets/svg-icons/BellIcon";
import { profilePicImage } from "../assets/images";
import { useLocation } from "react-router-dom";

function Navbar() {
  const localtion = useLocation();

  return (
    <>
      <div>
        {/* Top Nav Section */}
        <div className="bg-[#FFF] px-6 md:px-12 lg:px-24 py-4 border-b items-center flex flex-wrap justify-between gap-4   ">
          {/* Left Section: Logo and Search Bar */}
          <div className="flex flex-wrap gap-8 items-center flex-1">
            {/* Logo */}
            <h1 className="font-bold text-[20px] lg:text-[24px] text-black">
              Logo
            </h1>
            {/* Search Bar */}
            <div className="w-full md:w-auto flex-1 pr-0 md:pr-14 relative">
              <img
                src={searchIcon}
                className="w-[19px] h-[19px] absolute top-[50%] left-3 -translate-y-1/2"
                alt="searchIcon"
              />
              <input
                type="text"
                placeholder="Search..."
                className="bg-[#F0F1F2] rounded-full py-2 md:py-4 px-10 w-full focus-visible:outline-none"
              />
            </div>
          </div>

          {/* Right Section: Contact and Button */}
          <div className="flex flex-wrap items-center gap-6">
            {/* Have a question section */}
            <div className="flex items-center gap-4">
              <div className="bg-[#FFF4F0] p-2 md:p-4 rounded-full">
                <img
                  src={callIcon}
                  alt="call-icon"
                  className="h-[20px] w-[20px] md:h-[24px] md:w-[24px]"
                />
              </div>
              <div>
                <p className="text-[#9A9EA6] text-[10px] md:text-[12px] font-normal">
                  Have a question?
                </p>
                <h2 className="font-bold text-[#FF5F2D] text-[14px] md:text-[16px]">
                  Contact Support
                </h2>
              </div>
            </div>

            {localtion.pathname === "/contact-us" ? (
              <>
                <div className="relative">
                  <BellIcon width="30" height="30" />
                  <span className="absolute top-0 right-0 inline-block w-[15px] h-[15px] bg-[#1682FD] rounded-full"></span>
                </div>

                <div className="avatar">
                  <div className="w-[50px] h-[50px] rounded-full">
                    <img src={profilePicImage} />
                  </div>
                </div>
              </>
            ) : (
              <button className="bg-[#FF5F2D] rounded-full px-6 md:px-12 py-2 md:py-4 text-[#FFF] text-center text-[10px] md:text-[12px] font-bold">
                Register / Login
              </button>
            )}
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className="bg-[#FFF] px-6 py-4 md:px-24 md:py-6 border-t "
          style={{
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            position: "relative",
          }}
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Left Section: All Categories */}
            <div className="flex flex-wrap gap-12 items-center ">
              <button className="flex items-center gap-4 text-black font-semibold text-sm md:text-base">
                {/* Scalable SVG Icon for Menu */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 md:h-6 md:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 6h18M3 12h18M3 18h18"
                  />
                </svg>
                All Categories
              </button>

              {/* Left Section: Navigation Links */}
              <ul className="flex flex-wrap items-center gap-6">
                <li className="text-[#9A9EA6] font-normal text-sm md:text-base">
                  <Link to="/" className="hover:text-black transition">
                    Blog
                  </Link>
                </li>
                <li className="text-[#9A9EA6] font-normal text-sm md:text-base">
                  <Link
                    to="/contact-us"
                    className="hover:text-black transition"
                  >
                    Contact us
                  </Link>
                </li>
                <li className="text-[#9A9EA6] font-normal text-sm md:text-base">
                  <Link to="/" className="hover:text-black transition">
                    About us
                  </Link>
                </li>
                <li className="text-[#9A9EA6] font-normal text-sm md:text-base">
                  <Link to="/" className="hover:text-black transition">
                    More
                  </Link>
                </li>
              </ul>
            </div>

            {/* Right Section: Call to Action Links */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#write-review"
                className="text-[#4700B9] font-bold text-sm md:text-base hover:underline"
              >
                Write a Review
              </a>
              <a
                href="#vendor"
                className="text-[#4700B9] font-bold text-sm md:text-base hover:underline"
              >
                Vendor
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
