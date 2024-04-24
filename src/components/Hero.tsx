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
              <span>Maximum Type-safety (incl. error handling)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
