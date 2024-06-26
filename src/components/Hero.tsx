import Image from "next/image";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="w-full px-4 sm:px-8  lg:px-16 pt-20">
      <div className="flex flex-col md:flex-row md:gap-x-6 lg:gap-x-0 xl:grid xl:grid-cols-2 mt-4">
        <div className="shrink-0 md:w-1/2 lg:w-7/12 xl:w-auto">
          <h1 className="text-4xl lg:text-5xl mb-8 font-semibold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-300 inline-block">
              The best way to
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-violet-400 to-violet-600 inline-block">
              do clustering
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-300 inline-block">
              in Typescript
            </span>
          </h1>
          <ul className="text-white space-y-2">
            <li className="flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="fill-current h-5 shrink-0 mt-0.5"
              >
                <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM363.3 203.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L224 297.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0l128-128z"></path>
              </svg>
              <span>Maximum Type-safety (incl. error handling)</span>
            </li>
            <li className="flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="fill-current h-5 shrink-0 mt-0.5"
              >
                <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM363.3 203.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L224 297.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0l128-128z"></path>
              </svg>
              <span>Makes your code more composable, reusable and testable</span>
            </li>
            <li className="flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="fill-current h-5 shrink-0 mt-0.5"
              >
                <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM363.3 203.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L224 297.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0l128-128z"></path>
              </svg>
              <span>Extensive library with a rich ecosystem of packages</span>
            </li>
            <li className="flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="fill-current h-5 shrink-0 mt-0.5"
              >
                <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM363.3 203.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L224 297.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0l128-128z"></path>
              </svg>
              <span>Clustering and Workflows (Alpha)</span>
            </li>
          </ul>
          <div className="mt-10 flex flex-col items-center sm:flex-row gap-3">
             <a href="/" className="inline-flex relative z-10 h-10 rounded-xl p-px shadow-lg bg-gradient-to-b from-white to-zinc-300">
              <div className="flex items-center gap-1 px-6 font-medium rounded-xl whitespace-nowrap bg-white text-black">
                  <span>Get Started</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="fill-current h-3.5 "><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"></path></svg>
              </div>
             </a>
          </div>
        </div>
        <div className="hidden md:block pt-3 shrink grow overflow-hidden">
             <div className="relative">
                 <div className="relative p-px overflow-hidden rounded-3xl sm:rounded=[2rem bg-gradient-to-br from-white to-zinc-600]">
                      <div className=" rounded-3xl sm:rounded-[31px] overflow-hidden p-1.5 bg-gradient-to-br from-zinc-400 to-zinc-700">
                         <div className="rounded-[17px] sm:rounded-[25px] overflow-hidden  bg-gradient-to-br from-zinc-800 to-zinc-950">
                         <Image src='/image1.webp' className='object-cover object-center' width={1000} height={1000} alt='Hero-Image'/>
                         </div>
                      </div>
                 </div>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
