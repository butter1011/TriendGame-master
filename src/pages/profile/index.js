import React, { useState } from "react";

import ProfileCard from "../../components/Profile/ProfileCard";

const Profile = () => {
	const [flag, setFlag] = useState(0);
	let content = ["Farm", "Timer"];
	return (
		<>
			<div className="w-svw h-svh bg-black text-white pt-20">
				<div className="text-center text-3xl font-bold">MY WEN</div>
				<div className="flex justify-center py-3">
					<ProfileCard />
				</div>{" "}
				<div className="py-4" onClick={() => setFlag((flag + 1) % 3)}>
					{" "}
					{flag === 0 && <Farm />} {flag === 1 && <Timer />}{" "}
					{flag === 2 && <Btn title="CLAIM" />}{" "}
				</div>
				<div>
					<Btn title={"CHECK-IN"} />{" "}
				</div>{" "}
			</div>{" "}
		</>
	);
};

export default Profile;

function Farm() {
	return (
		<>
			<div className="flex justify-center">
				<button className="w-10/12 bg-[#333333] text-[#CCCCCC] text-2xl font-bold py-3 rounded-2xl">
					FARM
				</button>
			</div>
		</>
	);
}

function Timer() {
	return (
		<>
			<div className="flex justify-center">
				<button className="w-10/12 bg-[#333333] text-[#CCCCCC] text-2xl font-bold py-3 rounded-2xl">
					1000 TP IN⏳ 05: 58: 25
				</button>
			</div>
		</>
	);
}

function Btn({ title }) {
	return (
		<>
			<div className="flex justify-center">
				<button className="w-10/12 bg-[#00FFCF] text-black text-2xl font-bold py-3 rounded-2xl">
					{title}
				</button>
			</div>
		</>
	);
}
