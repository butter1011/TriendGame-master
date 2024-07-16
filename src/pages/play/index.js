import { useNavigate } from "react-router";
import Footer from "../../components/Footer";
import GreenButton from "../../components/greenButton";
import icon1 from "../../img/firstIcon/Add a subheading (29) 1.svg";
import icon2 from "../../img/firstIcon/Add a subheading (32).svg";
import icon3 from "../../img/firstIcon/Clip path group.svg";
import icon4 from "../../img/firstIcon/Group 2134.svg";
import icon5 from "../../img/firstIcon/Mask group.svg";
import icon6 from "../../img/firstIcon/Vector.svg";
import icon7 from "../../img/firstIcon/icon3.svg";
import icon8 from "../../img/firstIcon/icon1.svg";
import icon9 from "../../img/firstIcon/Add a subheading (11).svg";
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
const Play = () => {
	const navigate = useNavigate();
	return (
		<div className="h-full relative">
			<div className="flex p-5 h-full flex-col justify-between gap-6">
				<div className="text-white text-center pt-6 text-[30px] font-bold">
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
											className={` w-[30px] sm:w-[56px] ${
												item.icon1 === undefined && "hidden"
											}`}
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
			<div className=" fixed bottom-0 w-full">
				<Footer />
			</div>
		</div>
	);
};

export default Play;
