import { useState } from "react";
const TaskList = (props) => {
	const [taskState, setTaskState] = useState(props.item.taskState[0]);
	const stateData = ["START", "CLAIM", "CLAIMED"];
	const bgColData = ["bg-gray-600", "bg-[#00FFCF]", "bg-gray-600"];
	const textColData = ["text-white", "text-black", "text-slate-400"];
	const [bgCol, setBgCol] = useState(bgColData[0]);
	const [textCol, setTextCol] = useState(textColData[0]);
	const handleClick = () => {
		if (taskState == props.item.taskState[0]) {
			setTaskState(props.item.taskState[1]);
			setBgCol(bgColData[1]);
			setTextCol(textColData[1]);
		}
		if (taskState == props.item.taskState[1]) {
			setTaskState(props.item.taskState[2]);
			setBgCol(bgColData[2]);
			setTextCol(textColData[2]);
		}
	};
	// console.log("6576567", `bg-[${bgCol}]`);
	return (
		<>
			<div className="flex  flex-row mb-3 px-3 items-center h-20 bg-[#333333] rounded-[20px]">
				<div className="flex-1 flex flex-row justify-center">
					{" "}
					<div>
						{" "}
						<img className="w-[35px]" src={props.item.icon} />{" "}
					</div>{" "}
				</div>{" "}
				<div className="flex-[5] flex flex-row items-center justify-between">
					<div className="flex flex-col justify-between">
						{" "}
						<div> {props.item.siteName} </div>{" "}
						<div className="text-[#00FFCF] text-xl"> {props.item.payVal} </div>{" "}
					</div>{" "}
					<div
						onClick={() => {
							{
								handleClick();
							}
						}}
						className={`flex text-[16px] flex-row font-bold items-center ${textCol} justify-center rounded-2xl ${bgCol} w-[80px] h-[40px]`}>
						{" "}
						{taskState}{" "}
					</div>{" "}
				</div>{" "}
			</div>{" "}
		</>
	);
};

export default TaskList;
