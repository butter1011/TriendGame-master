import { useEffect } from "react";
import rewardData from "../database/rewardRecord.json";

const id = Number(localStorage.getItem("Day"));

const RewardPanel = () => {
	const handleClick = () => {
		if (rewardData[id - 1].isAwarded === false) return;
		rewardData[id].isAwarded = false;
	};

	useEffect(() => {
		if (id) {
			localStorage.removeItem("Day");
			localStorage.setItem("Day", id + 1);
		} else localStorage.setItem("Day", 1);
	}, []);
	return (
		<>
			<div
				className="w-[70vw] h-[60vw] grid grid-cols-3 gap-1"
				onClick={handleClick}>
				{rewardData.map((item) => (
					<div
						className={` rounded-xl text-md flex flex-col justify-center items-center cursor-pointer py-2  ${
							item.id < id
								? "text-[#BDBDBD] bg-[#525151]"
								: item.id === id
								? "text-black bg-[#00FFCF]"
								: "text-white bg-[#2A2A2A]"
						}
						${item.id === 7 && "col-start-2"} `}>
						<h3 className="font-bold">Day {item.id}</h3>
						<h3 className="flex flex-nowrap">{item.priceTag} TP</h3>
					</div>
				))}
			</div>
		</>
	);
};

export default RewardPanel;
