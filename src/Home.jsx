/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
//import "@splidejs/splide/dist/css/splide.min.css";

export default function Home() {
  const [me, onMe] = useState(true);
  const [vp, onVp] = useState(true);
  const [treasurer, onTreasurer] = useState(true);
  const [designer, onDesigner] = useState(true);
  const [tech, onTech] = useState(true);
  const [secretary, onSecretary] = useState(true);
  const isHovered = (event) => {
    event.target.classList.add("gradient");
    document.getElementById("home")?.classList.remove("gradient");
  };

  const unHovered = (event) => {
    event.target.classList.remove("gradient");
    document.getElementById("home")?.classList.add("gradient");
  };

  return (
    <>
      <div className="h-screen w-screen bg-black flex-col">
          <div className="h-1/12 w-full font-monument text-white text-5xl flex-col items-center">
            <div className="flex items-center justify-center h-full py-8 ">
              <img src="/leftarrow.png"></img>
              <h1 className="pt-2 mx-8">[enter team name]</h1>
              <img src="/rightarrow.png"></img>
            </div>
          </div>
          <div className="w-full flex h-1/3 px-72 gap-48 mb-12">
            {vp ? (
              <img
                onMouseEnter={() => {
                  onVp(false);
                  document.body.style.cursor = "pointer";
                }}
                className="scale-50"
                src="/defaultpfp.jpg"
              ></img>
            ) : (
              <img
                onMouseLeave={() => {
                  onVp(true);
                  document.body.style.cursor = "default";
                }}
                onClick={() => window.open("/demo")}
                className="scale-75 -mr-6"
                src="/defaultpfp.jpg" //TODO: add photo
              ></img>
            )}
            {me ? (
              <img
                onMouseEnter={() => {
                  onMe(false);
                  document.body.style.cursor = "pointer";
                }}
                className="scale-125 pl-2"
                src="/tanay.png"
              ></img>
            ) : (
              <img
                onMouseLeave={() => {
                  onMe(true);
                  document.body.style.cursor = "default";
                }}
                onClick={() => window.open("https://tanaygondil.com")}
                className="scale-125 pl-2"
                src="/tanay-2.png"
              ></img>
            )}

            {secretary ? (
              <img
                onMouseEnter={() => {
                  onSecretary(false);
                  document.body.style.cursor = "pointer";
                }}
                className="scale-125"
                src="/lalitha.png"
              ></img>
            ) : (
              <img
                onMouseLeave={() => {
                  onSecretary(true);
                  document.body.style.cursor = "default";
                }}
                onClick={() => window.open("https://www.linkedin.com/in/lalithachandolu/")}
                className="scale-125"
                src="/lalitha-2.png"
              ></img>
            )}
          </div>
          <div className="w-full flex h-1/3 px-72 gap-44">
            {treasurer ? (
              <img
                onMouseEnter={() => {
                  onTreasurer(false);
                  document.body.style.cursor = "pointer";
                }}
                className="scale-125"
                src="/sanjana.png"
              ></img>
            ) : (
              <img
                onMouseLeave={() => {
                  onTreasurer(true);
                  document.body.style.cursor = "default";
                }}
                onClick={() => window.open("https://www.linkedin.com/in/sanjana-mohan-a81549269/")}
                className="scale-125"
                src="/sanjana-2.png"
              ></img>
            )}
            {designer ? (
              <img
                onMouseEnter={() => {
                  onDesigner(false);
                  document.body.style.cursor = "pointer";
                }}
                className="scale-125"
                src="/vipula.png"
              ></img>
            ) : (
              <img
                onMouseLeave={() => {
                  onDesigner(true);
                  document.body.style.cursor = "default";
                }}
                onClick={() => window.open("https://www.linkedin.com/in/vipula-shirse-252ba12a1/")}
                className="scale-125"
                src="/vipula-2.png"
              ></img>
            )}
            {tech ? (
              <img
                onMouseEnter={() => {
                  onTech(false);
                  document.body.style.cursor = "pointer";
                }}
                className="scale-125"
                src="/ryan.png"
              ></img>
            ) : (
              <img
                onMouseLeave={() => {
                  onTech(true);
                  document.body.style.cursor = "default";
                }}
                onClick={() => window.open("https://www.linkedin.com/in/ryanerickson680/")}
                className="scale-125"
                src="/ryan-2.png"
              ></img>
            )}
          </div>
          <div className="w-full flex gap-10 font-monument text-base bg-black text-white pt-16">
            

            <div className="flex-col px-8 pt-16 z-10">
              <h1 className="pb-4 text-htfgreen">CONTACT US</h1>
              <h1>htfpurdue@gmail.com</h1>
              <div className="flex text-4xl pt-4 gap-4">

                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/company/hack-the-future-at-purdue/"
                  >
                    <FaInstagram className="hover:animate-pop cursor-pointer"></FaInstagram>
                  </Link>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/hackthefuturepurdue/"
                  >
                    <FaLinkedin className="hover:animate-pop cursor-pointer"></FaLinkedin>
                  </a>
                  <a target="blank" href="https://github.com/Hack-the-Future">
                    <FaGithubSquare className="hover:animate-pop cursor-pointer" />
                  </a>
                  </div>
            </div>
            <div className="flex-col  pt-16 w-1/2"></div>
            <div className="flex-col justify-right px-8 pt-16">
              <img
                src="/Logo.png"
                className="h-12 w-42 pl-12 mb-8 ml-6 object-right"
              ></img>
              <h1 className="text-right">
                Purdue University, West Lafayette, IN, 47906
              </h1>
            </div>
          </div>
        </div>
    </>
  );
}
