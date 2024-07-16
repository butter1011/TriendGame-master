import React from "react";
import avatar from "../../img/profile/avatar.png";
import camera from "../../img/profile/camera.png";
const ProfileCard = () => {
  return (
    <>
      <div className="w-10/12 text-white bg-[#333333] text-center  rounded-3xl flex gap-8 py-4 px-8 items-center justify-between">
        <div>
          <div className="relative">
            <div className="absolute right-0 bottom-2 rounded-full bg-[#00FFCF] w-10 h-10 flex justify-center items-center z-10">
              <img alt="" className="w-[32px] " src={camera} alt="Camera" />
            </div>{" "}
            <img
              alt=""
              className="w-[124px] drop-shadow-[0_3px_0px_#00ffcf]"
              style={{}}
              src={avatar}
              alt="Your avatar"
            />
          </div>{" "}
          <div className="py-2">
            <h className="text-[#00FFCF] font-bold text-lg"> Daniel K. </h>{" "}
          </div>{" "}
        </div>{" "}
        <div className="text-lg flex flex-col gap-1">
          <div>
            <p className="text-[#A7A7A7]"> Total score: </p>{" "}
            <p className="font-bold"> 1.2000 .000 </p>{" "}
          </div>{" "}
          <div>
            <p className="text-[#A7A7A7]"> High score </p>{" "}
            <p className="font-bold"> 3.000 </p>{" "}
          </div>{" "}
          <div>
            <p className="text-[#A7A7A7]"> Check - Ins </p>{" "}
            <p className="font-bold"> 12 </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};
export default ProfileCard;
