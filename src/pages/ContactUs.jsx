/* eslint-disable no-unused-vars */
import { useState } from "react";
import { CallFillIcon } from "../assets/svg-icons/CallFillIcon";
import { EmailIcon } from "../assets/svg-icons/emailIcon";
import { FaceBookIcon } from "../assets/svg-icons/FacebookIcon";
import { InstagramIcon } from "../assets/svg-icons/InstagramIcon";
import { LinkedinIcon } from "../assets/svg-icons/LinkedinIcon";
import { LocationIcon } from "../assets/svg-icons/LocationIcon";
import { TwitterIcon } from "../assets/svg-icons/TwitterIcon";
import {
  australiaLocationImage,
  canadaLocationImage,
  indiaLocationImage,
  usaLocationImage,
} from "../assets/images";

function ContactUs() {
  const [highlightedButton, setHighlightedButton] = useState("Sales");
  const ourLocations = [
    {
      title: "USA",
      description: "80 Broad St, 5th FloorPMB#1148, Manhattan, New York",
      image: usaLocationImage,
    },
    {
      title: "CANADA",
      description: "7030 Woodbine Avenue,Markham, L3R 6G2, Ontario, Canada",
      image: canadaLocationImage,
    },
    {
      title: "INDIA",
      description:
        "Manyata Embassy Tech Park,Ground Floor, Beech, E-1,Bangalore, Karnataka",
      image: indiaLocationImage,
    },
    {
      title: "AUSTRALIA",
      description: "21 Hammerwood AvenueDerrimut, 3030 Vic, Australia",
      image: australiaLocationImage,
    },
  ];

  function handleHighlight(text) {
    if (!text) return;
    setHighlightedButton(text);
  }
  return (
    <div>
      <div
        style={{
          background:
            "linear-gradient(309deg, #AD00FF -16.09%, #8200DD 0.11%, #130085 74.42%)",
        }}
        className=" py-14 flex justify-center items-center"
      >
        <div className="flex flex-col lg:flex-row w-[80%]  overflow-hidden">
          {/* Left Section */}
          <div
            style={{}}
            className=" w-[100%] lg:w-1/2  text-white p-8 flex flex-col justify-between"
          >
            <div>
              <h1 className=" text-[24px] lg:text-[48px] font-bold mb-4">
                Contact Us – <br /> Your Feedback Shapes <br /> Our{" "}
                <span className="text-orange-500">Excellence</span>
              </h1>
              <div className="space-y-12 mt-16">
                <p className="flex items-center gap-4  lg:text-[23px] ">
                  <EmailIcon width={"28.571"} height={"22.222"} />
                  andreaDesign@gmail.com
                </p>
                <p className="flex items-center gap-4 text-[23px]">
                  <CallFillIcon width={"28.571"} height={"22.222"} />
                  +34 123 456 789
                </p>
                <p className="flex items-center gap-4 text-[23px]">
                  <LocationIcon width={"28.571"} height={"22.222"} />
                  123 Street 487 House
                </p>
              </div>
            </div>
            <div className="flex gap-20 mt-6 lg:mt-0 ">
              <div className="flex gap-6">
                <a href="#" className="text-xl">
                  <LinkedinIcon width={"28.571"} height={"22.222"} />
                </a>
                <a href="#" className="text-xl">
                  <InstagramIcon width={"28.571"} height={"22.222"} />
                </a>
              </div>
              <div className="flex gap-6">
                <a href="#" className="text-xl">
                  <TwitterIcon width={"28.571"} height={"22.222"} />
                </a>
                <a href="#" className="text-xl">
                  <FaceBookIcon width={"28.571"} height={"22.222"} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-[100%] lg:w-[40%] bg-white px-4 lg:px-10 py-10 rounded-xl ">
            <h3 className="text-xl font-semibold text-[#FF5F2D] mb-4">
              Im interested in:
            </h3>
            <div className="flex flex-wrap mb-4 gap-4">
              {/* Button with dynamic styles based on state */}
              <button
                onClick={() => handleHighlight("Sales")}
                className={`btn btn-outline  px-6 rounded-3xl ${
                  highlightedButton === "Sales"
                    ? "bg-[#FF5F2D] border-[#FF5F2D] hover:border-[#FF5F2D] hover:text-white hover:bg-[#FF5F2D]   text-white"
                    : ""
                }`}
              >
                Sales
              </button>
              <button
                onClick={() => handleHighlight("Get Demo")}
                className={`btn btn-outline px-6 rounded-3xl ${
                  highlightedButton === "Get Demo"
                    ? "bg-[#FF5F2D] border-[#FF5F2D] hover:border-[#FF5F2D] hover:text-white hover:bg-[#FF5F2D]   text-white"
                    : ""
                }`}
              >
                Get Demo
              </button>
              <button
                onClick={() => handleHighlight("User Support")}
                className={`btn btn-outline px-6 rounded-3xl ${
                  highlightedButton === "User Support"
                    ? "bg-[#FF5F2D] border-[#FF5F2D] hover:border-[#FF5F2D] hover:text-white hover:bg-[#FF5F2D]   text-white"
                    : ""
                }`}
              >
                User Support
              </button>
            </div>
            <div className="flex gap-4 ">
              <button
                onClick={() => handleHighlight("Vender Support")}
                className={`btn btn-outline px-6 rounded-3xl ${
                  highlightedButton === "Vender Support"
                    ? "bg-[#FF5F2D] border-[#FF5F2D] hover:border-[#FF5F2D] hover:text-white hover:bg-[#FF5F2D]   text-white"
                    : ""
                }`}
              >
                Vender Support
              </button>
              <button
                onClick={() => handleHighlight("Other")}
                className={`btn btn-outline px-6 rounded-3xl ${
                  highlightedButton === "Other"
                    ? "bg-[#FF5F2D] border-[#FF5F2D] hover:border-[#FF5F2D] hover:text-white hover:bg-[#FF5F2D]   text-white"
                    : ""
                }`}
              >
                Other
              </button>
            </div>

            {/* Form */}
            <form className="space-y-4 mt-6 ">
              <div className="flex gap-4">
                <div className="flex flex-col items-start w-full text-[#CDCDCD] focus-within:text-[#FF5F2D]">
                  <label className="font-semibold" htmlFor="yourName">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="input text-[#787878] focus:border-[#FF5F2D] w-full input-bordered bg-white border-[#CDCDCD] outline-none border-r-0 border-l-0 border-t-0 border-b-2 focus-visible:outline-none rounded-none"
                  />
                </div>
                <div className="flex flex-col items-start w-full text-[#CDCDCD] focus-within:text-[#FF5F2D]">
                  <label className="font-semibold " htmlFor="Email">
                    Your Email
                  </label>
                  <input
                    type="text"
                    className="input w-full text-[#787878] focus:border-[#FF5F2D] input-bordered bg-white border-[#CDCDCD] outline-none border-r-0 border-l-0 border-t-0 border-b-2 focus-visible:outline-none  rounded-none"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-start w-full text-[#CDCDCD] focus-within:text-[#FF5F2D]">
                  <label className="font-semibold" htmlFor="country">
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    className="input text-[#787878] focus:border-[#FF5F2D] w-full input-bordered bg-white border-[#CDCDCD] outline-none border-r-0 border-l-0 border-t-0 border-b-2 focus-visible:outline-none rounded-none"
                  />
                </div>
                <div className="flex flex-col items-start w-full text-[#CDCDCD] focus-within:text-[#FF5F2D]">
                  <label className="font-semibold" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="input text-[#787878] w-full focus:border-[#FF5F2D] input-bordered bg-white border-[#CDCDCD] outline-none border-r-0 border-l-0 border-t-0 border-b-2 focus-visible:outline-none  rounded-none"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start w-full text-[#CDCDCD] focus-within:text-[#FF5F2D]">
                <label className="font-semibold " htmlFor="link">
                  Link
                </label>
                <input
                  type="text"
                  id="link"
                  className="input text-[#787878] w-full focus:border-[#FF5F2D] input-bordered bg-white border-[#CDCDCD] outline-none border-r-0 border-l-0 border-t-0 border-b-2 focus-visible:outline-none  rounded-none"
                />
              </div>
              <textarea
                placeholder="Your message"
                className="textarea textarea-bordered resize-none bg-white border-2 focus-visible:outline-none w-full h-24"
              ></textarea>
              <button
                type="button"
                className="btn rounded-3xl text-white bg-[#FF5F2D] btn-outline w-full hover:bg-[#FF5F2D] hover:text-white hover:border-[#FF5F2D] "
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="py-10">
        {/* Our Location Section */}
        <h4 className="text-[#FF5F2D] font-semibold text-[19px] text-center ">
          Find us
        </h4>
        <h1 className="text-[#2C2C2C] font-bold text-[45px] text-center ">
          Our Locations
        </h1>
      </div>

      {/* Image Card Section */}
      <div className="flex flex-col  md:flex-row flex-wrap  gap-10 justify-center  ">
        {ourLocations.map((item, id) => (
          <div key={id} className="flex justify-center space-x-8 py-4">
            <div className="w-80 h-[427px] rounded-xl  overflow-hidden relative">
              {/* Image */}
              <img
                src={item.image}
                alt="Location USA"
                className="w-full h-full object-cover"
              />
              {/* Card Content */}
              <div
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #130185 100%)",
                }}
                className="absolute inset-0 p-4 flex flex-col justify-end"
              >
                {/* Text Section */}
                <div>
                  <h3
                    className="text-white font-semibold text-lg py-4 "
                    style={{
                      textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      fontSize: "48px",
                      fontStyle: "normal",
                      textAlign: "center",
                      fontWeight: "500",
                      lineHeight: "normal",
                      background:
                        "linear-gradient(180deg, #ECFF16 0%, #80FF00 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-white text-[17px] font-medium text-center px-6 ">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactUs;
