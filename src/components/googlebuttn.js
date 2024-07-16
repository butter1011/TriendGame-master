import Google from "../svg/google_icon.svg";
const GoogleButtn = () => {
  return (
    <>
      <button className="bg-[#343434] bg-opacity-80 w-full h-[42px] -skew-x-[20deg]">
        <div className="flex flex-row w-full skew-x-[20deg]">
          <div className="w-[30%] relative flex items-center">
            <img alt="" src={Google} className=" absolute right-0" />{" "}
          </div>{" "}
          <div className="w-[70%] text-base text-[#CDCDCD]">
            {" "}
            Login with Google{" "}
          </div>{" "}
        </div>{" "}
      </button>{" "}
    </>
  );
};

export default GoogleButtn;
