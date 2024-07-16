import Image from "../../svg/Robot.svg";

const Exam = () => {
  return (
    <>
      <div className="w-screen h-screen bg-gray-500 flex justify-center">
        <div className="w-[200px] h-[200px] bg-black mt-200">
          <img alt="" src={Image} className="w-full h-full" />{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default Exam;
