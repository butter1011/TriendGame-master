import img1 from "../img/tutorials/Rectangle 111.png";
import img2 from "../img/tutorials/Mask group.png";
import GreenButton from "./greenButton";
const RunBottom = ({ onclick }) => {
  return (
    <div
      className="justify-between  flex flex-col h-full rounded-t-[40px]
     w-full pt-10 p-5 bg-black  bg-gradient-to-b from-[#2A3A37] shadow-[0px_-3px_3px] shadow-[#00FFCF]"
    >
      <div className=" gap-3  flex items-center  justify-center">
        <div className="z-40  ">
          <img className="w-[220px] sm:w-[300px] " src={img2} />
        </div>
        <p className=" z-50  text-white text-[20px] sm:text-[32px]">
          Welcome! Play to earn points. Tap to jump and get as high score as you
          can.
        </p>
      </div>
      <div className="pb-7 pt-4 ">
        <GreenButton onclick={onclick} title={"ENTER WEN WORLD"} />
      </div>
    </div>
  );
};

export default RunBottom;
