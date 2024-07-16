import rewardData from "../database/rewardRecord.json";

const RewardAlarm = () => {
	const id = Number(localStorage.getItem("Day")) - 1;
	let price = 0;
	if (id < 8) price = rewardData[id].price;
	else price = 5.0;
	return (
		<>
			<div
				className="bg-[#2A2A2A] w-[60vw] h-[60vw] rounded-full text-center text-white flex flex-col space-y justify-center items-center"
				style={{ boxShadow: "0px 0px 4px 2px #00FFCF" }}>
				<h1 className={`text-2xl font-bold `}>🔥{id} Day Streak</h1>
				<h2 className="text-lg">{price} TP</h2>
			</div>
		</>
	);
};

export default RewardAlarm;
