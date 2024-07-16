import React from "react";
import loadbackground from "../../img/loadbackground.png";
import loading from "../../img/loading.svg";
const Loading = () => {
  return (
    <>
      <div className="w-9/12 text-white text-3xl top-1/2 left-1/2 text-center absolute z-10 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-10 max-sm:text-xl">
        <p> Tap to jump and get as high score as you can! </p>{" "}
        <div className="loader">
          <img src={loading} alt="loading" />
        </div>{" "}
      </div>{" "}
      <div className="relative">
        <div className="absolute backdrop-blur-xl h-svh w-svw bg-black/80">
          {" "}
        </div>{" "}
        <img
          alt=""
          src={loadbackground}
          className="w-svw h-svh bg-cover shadow-inner"
        />
      </div>{" "}
    </>
  );
};
export default Loading;
