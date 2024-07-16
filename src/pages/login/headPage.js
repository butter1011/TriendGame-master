import Head from "../../svg/head.svg";
import HeadIcon from "../../svg/head_icon.svg";
import BackGround from "../../svg/head_bg.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const HeadPage = () => {
	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => {
			navigate(`/login/trust`);
		}, 3e3);
	});
	return (
		<>
			<div
				className="bg-black w-screen h-screen relative flex justify-center"
				style={{
					backgroundImage: `url(${BackGround})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
				}}>
				<img alt="" src={HeadIcon} className=" absolute bottom-[10%]" />
			</div>
		</>
	);
};

export default HeadPage;
