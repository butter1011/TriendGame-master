import ModalBox from "./modalBox";
import RewardPanel from "./rewardPanel";
import GreenButton from "./greenButton";
import { useState } from "react";
import RewardAlarm from "./rewardAlarm";

const DailyReward = ({ handleModal }) => {
	const [result, setResult] = useState(false);
	return (
		<>
			<div className="h-svh w-svw flex items-center justify-center">
				<ModalBox>
					<h1
						className="text-4xl cursor-pointer hover:text-slate-300 absolute top-5 right-5"
						onClick={handleModal}>
						&times;
					</h1>
					<header className="w-4/5 mx-auto">
						<h1 className="text-4xl mb-3">🎉</h1>
						<h1 className=" uppercase  text-2xl font-bold">Daily reward</h1>
						<h2 className="text-md ">
							Accrue coins for logging into
							<br /> the game daily without skipping
						</h2>
					</header>
					<section className="w-full flex justify-center">
						{!result ? <RewardPanel /> : <RewardAlarm />}
					</section>
					<footer className="pb-8">
						<GreenButton
							title="CLAIM"
							onclick={() => {
								if (result === false) setResult(true);
							}}
						/>
					</footer>
				</ModalBox>
			</div>
		</>
	);
};

export default DailyReward;
