import { useState } from "react";
import RankScore2 from "../../components/RankScore2";
import RankScore1 from "../../components/RankScore1";
import scoreData from "../../database/scoreData.json";
import TaskList from "../../components/taskList";
import taskListData from "../../database/taskListData.json";
const Earn = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full bg-[#000000]">
        <div className="text-white flex flex-row justify-center">
          <p className="font-bold text-[30px] mt-[70px]"> TASKS </p>{" "}
        </div>{" "}
        <div className="mt-[30px] w-11/12 flex flex-col text-white">
          {" "}
          {taskListData.taskList.map((item, key) => (
            <TaskList item={item} key={key} />
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default Earn;
