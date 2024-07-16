import { useState } from "react";
import RankScore2 from "../../components/RankScore2";
import RankScore1 from "../../components/RankScore1";
import scoreData from "../../database/scoreData.json";

const Rank = () => {
  const [totalScore, setTotalScore] = useState(true);
  const [col1, setCol1] = useState("bg-[#A7A7A7]");
  const [col2, setCol2] = useState("bg-[#00FFCF]");
  const handleClick1 = () => {
    setTotalScore(false);
    setCol1("bg-[#00FFCF]");
    setCol2("bg-[#A7A7A7]");
  };
  const handleClick2 = () => {
    setTotalScore(true);
    setCol2("bg-[#00FFCF]");
    setCol1("bg-[#A7A7A7]");
  };
  return (
    <>
      <div className="flex flex-col items-center  w-full bg-[#000000]">
        <div className="text-white flex flex-row justify-center">
          <p className="font-bold text-[30px] mt-[70px]"> RANK </p>{" "}
        </div>{" "}
        <div className="bg-[#333333] w-11/12 h-10 mt-4 flex flex-row justify-center rounded-[36px]">
          <div className="flex-1 flex flex-row justify-end items-center gap-8">
            <p className="text-xl text-[#A7A7A7]"> Your rank is </p>{" "}
          </div>{" "}
          <div className="flex-1 flex flex-row items-center justify-start">
            <p className="text-2xl text-white p-7 font-bold"> #1.655 </p>
          </div>{" "}
        </div>{" "}
        <div className="mt-7 flex flex-row justify-between w-full h-12 items-center ">
          <div
            onClick={() => handleClick1()}
            className={`flex-1 flex-row h-full flex justify-center items-center ${col1} rounded-tl-xl text-xl text-[#CCCCCC] font-bold`}
          >
            {" "}
            HIGH SCORES{" "}
          </div>{" "}
          <div
            onClick={() => handleClick2()}
            className={`text-xl flex-1 h-full flex-row flex justify-center items-center ${col2} rounded-tr-xl text-[#CCCCCC] font-bold`}
          >
            {" "}
            TOTAL POINTS{" "}
          </div>{" "}
        </div>{" "}
        {totalScore == true ? (
          <div className="mt-[30px] w-11/12 flex flex-col text-white">
            {" "}
            {scoreData.scoreDatas.map((item, key) =>
              key < 3 ? (
                <RankScore1
                  avatar={item.avatar}
                  number={item.number}
                  name={item.name}
                  score={item.score}
                  key={key}
                />
              ) : (
                <RankScore2
                  avatar={item.avatar}
                  number={item.number}
                  name={item.name}
                  score={item.score}
                  key={key}
                />
              )
            )}{" "}
          </div>
        ) : (
          <div> sadfsa </div>
        )}{" "}
      </div>{" "}
    </>
  );
};

export default Rank;
