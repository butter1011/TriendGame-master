import Pic from "../../svg/Load_pic.svg";
import Icon from "../../svg/Load_icon.svg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const LoadPage = () => {
	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => {
			navigate(`/login/head`);
		}, 3e3);
	});
	return (
		<>
			<div className="bg-[#000000] w-screen h-screen overflow-x-hidden">
				<div className="flex justify-center items-center h-[60%]">
					<img src={Icon} className="w-[100px] h-[180px]" />
				</div>
				<div className="w-[200%] h-[30%]">
					<img src={Pic} className="w-full h-full" />
				</div>
				<div className="text-[#00FFCF] text-center"> Loading... </div>
			</div>
		</>
	);
};

export default LoadPage;
