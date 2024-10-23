// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaGithubSquare } from "react-icons/fa";

export default function DemoPage() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="h-screen w-screen bg-black">
      <div className="h-full w-full bg-black flex-col z-10 relative pt-10">
        {/* Header */}
        <div className="h-1/12 w-full font-monument text-white text-5xl flex-col items-center">
          <div className="flex items-center justify-center h-full ">
            <img src="/leftarrow.png" alt="left arrow" />
            <h1 className="pt-2 mx-8">Team Member Profile</h1>
            <img src="/rightarrow.png" alt="right arrow" />
          </div>
        </div>

        {/* Profile Section */}
        <div className="w-full flex flex-col items-center mt-12">
          {/* Profile Picture */}
          <div className="relative">
            <img
              src="/defaultpfp.jpg" // Placeholder image
              alt="Profile Picture"
              className={`${
                isHovered ? "scale-110" : "scale-100"
              } transition-transform duration-300`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </div>

          {/* Member Info */}
          <div className="text-center text-white mt-8">
            <h2 className="text-4xl font-bold">John Doe</h2>
            <h3 className="text-xl mt-2">Full Stack Developer</h3>
            <p className="mt-4 text-gray-400">
              John is a skilled full stack developer with expertise in MERN stack and passion for building dynamic, user-friendly applications.
            </p>
          </div>

          {/* Contact Links */}
          <div className="flex mt-8 gap-8">
            <a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-white text-4xl hover:animate-pop cursor-pointer" />
            </a>
            <a href="https://github.com/johndoe" target="_blank" rel="noreferrer">
              <FaGithubSquare className="text-white text-4xl hover:animate-pop cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/johndoe" target="_blank" rel="noreferrer">
              <FaInstagram className="text-white text-4xl hover:animate-pop cursor-pointer" />
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full flex gap-10 font-monument text-base bg-black text-white pt-16">
          <div className="flex-col px-8 pt-16 z-10">
            <h1 className="pb-4 text-htfgreen">CONTACT US</h1>
            <h1>htfpurdue@gmail.com</h1>
            <div className="flex text-4xl pt-4 gap-4">
              <a href="https://www.linkedin.com/company/hack-the-future-at-purdue/" target="_blank" rel="noreferrer">
                <FaInstagram className="hover:animate-pop cursor-pointer" />
              </a>
              <a href="https://www.instagram.com/hackthefuturepurdue/" target="_blank" rel="noreferrer">
                <FaLinkedin className="hover:animate-pop cursor-pointer" />
              </a>
              <a href="https://github.com/Hack-the-Future" target="blank" rel="noreferrer">
                <FaGithubSquare className="hover:animate-pop cursor-pointer" />
              </a>
            </div>
          </div>
          <div className="flex-col  pt-16 w-1/2"></div>
          <div className="flex-col justify-right px-8 pt-16">
            <img src="/Logo.png" className="h-12 w-42 pl-12 mb-8 ml-6 object-right" alt="Logo" />
            <h1 className="text-right">Purdue University, West Lafayette, IN, 47906</h1>
          </div>
        </div>
        <img className="z-0 absolute -bottom-32 mt-20" src="/globe.png" alt="Globe Background" />
      </div>
    </div>
  );
}
