import React from "react";
import FooterIcon from "./FooterIcon";

const Data = [
	{
		icon: "🌎",
		title: "PLAY",
		url: "/play",
	},
	{
		icon: "💰",
		title: "EARN",
		url: "/earn",
	},
	{
		icon: "🥇",
		title: "RANK",
		url: "/rank",
	},
	{
		icon: "👤",
		title: "PROFILE",
		url: "/profile",
	},
];
const Footer = () => {
	return (
		<div className=" w-full h-[10vh] text-center bg-gradient-to-t from-[#000000] to-[#2A3A37] grid grid-cols-4 items-center rounded-t-[7vw] shadow-[0px_-2px_4px_0_#00FFCF] py-1  divide-x-2">
			{Data.map((item) => (
				<FooterIcon item={item} />
			))}
		</div>
	);
};

export default Footer;
