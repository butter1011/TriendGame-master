import "./global.css";
import MainIcon from "../../svg/mainicon.svg";
import Rectangle from "../../svg/Group 2092.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ReviewPage = () => {
	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => {
			navigate(`/home`);
		}, 3e3);
	});
	return (
		<>
			<div className="review_bg w-screen h-screen">
				<div className="p-8">
					<div className=" flex flex-row relative items-center">
						<div className="flex items-center">
							{" "}
							<img src={MainIcon} className="" />{" "}
						</div>{" "}
						<div className="flex items-center">
							<p className="text-2xl text-white font-extrabold"> TRIEND </p>{" "}
						</div>{" "}
						<div className="absolute right-0">
							<img src={Rectangle} />{" "}
						</div>{" "}
					</div>{" "}
					<div>
						<p className="text-[54px] font-extrabold text-white">
							{" "}
							Reviews are{" "}
						</p>{" "}
						<p className="text-[54px] font-extrabold text-[#FF00E5]">
							{" "}
							important{" "}
						</p>{" "}
					</div>{" "}
					<div>
						<p className="text-white text-lg ml-4">
							{" "}
							67 % of people say reviews have <br /> become a serious problem
							and 83 % <br />
							say that reviews play an essential role <br /> in their final
							booking decision.{" "}
						</p>{" "}
					</div>{" "}
				</div>{" "}
			</div>{" "}
		</>
	);
};

export default ReviewPage;
