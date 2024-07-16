import NextButtn from "../../components/nextbuttn";
import OwnBg from "../../svg/join_pic.svg";
import EnterButtn from "../../components/enterbuttn";
import { useNavigate } from "react-router-dom";
import SkipButtn from "../../components/skipbuttn";
import CyanText from "../../components/cyantext";

const JoinPage = () => {
  const navigate = useNavigate();
  const goNextPage = () => {
    navigate(`/login/review`);
  };
  return (
    <>
      <div className="login_bg w-full  h-full">
        <div> ` </div>{" "}
        <div className="image_style">
          <div className="">
            <img src={OwnBg} />{" "}
          </div>
        </div>{" "}
        <div className="w-full text-right text-[#00FFCF]">
          <p className=" mr-14">I don't like any these</p>
        </div>
        <div className="mt-2 ml-10 mr-10 text-center">
          <CyanText txt="Join your business" />
        </div>
        <div className="mt-10 ml-10 mr-10">
          <EnterButtn txt="ENTER PASSCODE" />
        </div>
        <div className="mt-10 ml-10 mr-10">
          <NextButtn txt="JOIN" func={goNextPage} />
        </div>
        <div className="m-10">
          <SkipButtn />
        </div>
      </div>{" "}
    </>
  );
};

export default JoinPage;
