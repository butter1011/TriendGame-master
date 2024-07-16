import { useState } from "react";
import { useNavigate } from "react-router";
import RunBottom from "../../components/RunBottom";
import icon1 from "../../img/firstIcon/Add a subheading (29) 1.svg";
import icon2 from "../../img/firstIcon/Add a subheading (32).svg";
import icon3 from "../../img/firstIcon/Clip path group.svg";
import icon4 from "../../img/firstIcon/Group 2134.svg";
import icon5 from "../../img/firstIcon/Mask group.svg";
import icon6 from "../../img/firstIcon/Vector.svg";
import icon7 from "../../img/firstIcon/icon3.svg";
import icon8 from "../../img/firstIcon/icon1.svg";
import icon9 from "../../img/firstIcon/Add a subheading (11).svg";

import pic1 from "../../img/tutorials/1.png";
import pic2 from "../../img/tutorials/2.png";
import pic3 from "../../img/tutorials/3.png";
import pic4 from "../../img/tutorials/4.png";

import GreenButton from "../../components/greenButton";
import Modal1 from "../../components/modal1";
import { useAuth } from "../../App";
const data1 = [icon3, icon7, icon9, icon4, icon2, icon5, icon1, icon8, icon6];
const Home = () => {
	const navigate = useNavigate();
	const [counter, setCounter] = useState(0);
	const [EnterWenWorld, setEnterWenWorld] = useState(true);
	const [EnterCurrencyChat, setEnterCurrencyChat] = useState(true);
	const { auth, setAuth } = useAuth();
	const data = [
		{
			buttontitle: "NEXT",
			id: "1",
			pic: ` ${pic1}`,
			title:
				"Play to earn points. Tap to jump and get as high score as you can.",
		},
		{
			buttontitle: "NEXT",
			id: "2",
			pic: ` ${pic2}`,
			title: "Check your rank and boost your total score by completing tasks!",
		},
		{
			buttontitle: "NEXT",
			id: "3",
			pic: ` ${pic3}`,
			title: "Farm tokens to get free points every 6 hours.",
		},
		{
			buttontitle: "GOT IT",
			id: "4",
			pic: ` ${pic4}`,
			title:
				"Invite your friends and get bonuses together. You will both receive points.",
		},
	];
	const data1 = [icon3, icon7, icon9, icon4, icon2, icon5, icon1, icon8, icon6];
	const dataCurrency = [
		{
			icon: icon3,
			title: "+5 TP",
		},
		{
			icon: icon7,
			title: "From -40 to +40 TP",
			style: "small",
		},
		{
			icon: icon4,
			title: "+200 TP",
		},
		{
			icon: icon9,
			title: "100 TP",
		},
		{
			icon: icon5,
			icon1: icon7,
			title: "Makes all",
			title2: " winners for ",
			title3: "2 seconds!",
			style: "big",
		},
		{
			icon: icon2,
			icon1: icon1,
			title: "Spawns",
			title2: ", takes a life",
			title3: " , and steals 50 TP",
			style: "big",
		},
		{
			icon: icon1,
			icon1: undefined,
			title: "Steals half your TP and takes a life",
			style: "big",
		},
		{
			icon: icon8,
			title: "Launch into the air",
			style: "flexCol",
		},
		{
			icon: icon6,
			title: "Takes a life",
			style: "flexCol",
		},
	];
	const handleRun = () => {
		console.log("Run button click!");
		setEnterWenWorld(false);
		setAuth(true);
	};
	const handleNext = () => {
		console.log("Next button click");
		if (counter >= 3) {
			console.log("if-----", counter);
			return setEnterCurrencyChat(false);
		} else return setCounter(counter + 1);
	};
	// setTimeout(() => {
	//
	// }, [2000]);
	console.log(counter);
	return (
		<div className="bg-[url('./img/bg.png')] overflow-auto  bg-black  bg-cover  h-screen w-screen">
			{EnterWenWorld === true ? (
				<div className=" flex flex-col h-full justify-between ">
					<div className="flex flex-col gap-3 justify-center p-5 h-full">
						<p className="text-center font-bold sm:text-[48px] text-[32px] text-white  mb-2.5">
							WELCOME<br></br> TO WEN WORLD
						</p>
						<div className="flex flex-wrap  gap-1 sm:gap-3 justify-center">
							{data1.map((item) => {
								return <img className="sm:w-[56px] w-[35px]" src={item} />;
							})}
						</div>
					</div>
					<div className="h-1/2    ">
						<RunBottom onclick={() => handleRun()} />
					</div>
				</div>
			) : EnterCurrencyChat === true ? (
				<>
					<div className="h-full px-5 sm:px-24 flex flex-col justify-center ">
						<Modal1>
							<div className="w-full flex flex-col  justify-between">
								<div className="w-full flex flex-col gap-4">
									<img
										className=" bg-black  rounded-3xl"
										src={data[counter].pic}
									/>

									<div className="flex">
										{" "}
										<p className="text-white text-[20px] sm:text-[36px]">
											{data[counter].id}
										</p>
										<p className="text-[#636363] text-[20px] sm:text-[36px]">
											/4
										</p>
									</div>
									<p className="text-white text-[20px]  sm:text-[32px]">
										{data[counter].title}
									</p>
								</div>
								<div className=" ">
									<GreenButton
										title={data[counter].buttontitle}
										onclick={handleNext}
									/>
								</div>
							</div>
						</Modal1>
					</div>
				</>
			) : (
				<div className="h-full relative mt-10">
					<div className="flex p-5 h-full flex-col justify-between gap-6">
						<div className="text-white text-center pt-6 text-[30px] font-bold">
							{" "}
							CURRENCY CHART
						</div>
						<div className=" grid grid-cols-2 gap-1 sm:gap-2">
							{dataCurrency.map((item, index) => {
								if (item.style === "big")
									return (
										<div className="col-span-2 bg-[#707070] rounded-[16px] sm:rounded-[28px]  flex p-3 pr-8">
											<img
												className="flex flex-col justify-center w-[30px] sm:w-[56px] mx-3"
												src={item.icon}
											/>
											<div className="flex flex-wrap text-[20px] text-[white] sm:text-[38px]">
												{item.title}

												<img
													className=" w-[30px] sm:w-[56px] "
													src={item.icon1}
												/>
												<div className="flex flex-wrap text-[20px] text-[white] sm:text-[38px]">
													{item.title2}
												</div>
												<div className="flex flex-wrap text-[20px] text-[white] sm:text-[38px]">
													{item.title3}
												</div>
											</div>
										</div>
									);

								if (item.style === "flexCol")
									return (
										<div className="grid-rows-4">
											<div className=" bg-[#707070] rounded-[16px] sm:rounded-[28px]    p-3 pr-8">
												<img
													className="flex flex-col justify-center w-[30px] sm:w-[56px] mx-3"
													src={item.icon}
												/>
												<div className="flex flex-col justify-center text-[20px] text-[white] sm:text-[38px]">
													{item.title}
												</div>
											</div>
										</div>
									);

								return (
									<div className=" bg-[#707070] rounded-[16px] sm:rounded-[28px]  flex  p-3 ">
										<img
											className="flex flex-col justify-center w-[30px] sm:w-[56px] mx-3"
											src={item.icon}
										/>
										<div className="flex flex-col justify-center text-[20px] text-[white] sm:text-[38px]">
											{item.title}
										</div>
									</div>
								);
							})}
						</div>
						<div className="pb-[100px] sm:pb-[150px]">
							<GreenButton
								title="START"
								onclick={() => {
									navigate(`/login`);
									console.log("start");
								}}
							/>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Home;
