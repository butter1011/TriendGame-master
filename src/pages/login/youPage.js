import CyanText from "../../components/cyantext";
import SkipButtn from "../../components/skipbuttn";
import StartButtn from "../../components/startButtn";
import OwnBg from "../../svg/you_bg.svg";
import { useNavigate } from "react-router-dom";

const YouPage = () => {
	const navigate = useNavigate();
	const goNextPage = () => {
		navigate(`/login/join`);
	};
	return (
		<>
			<div className='login_bg w-screen h-screen'>
				<div> ` </div>{" "}
				<div className='bg-black mt-16 ml-6 mr-6 rounded-2xl flex justify-center'>
					<div className=''>
						<img src={OwnBg} />{" "}
					</div>
				</div>{" "}
				<div className='mt-20 ml-10 mr-10 text-center'>
					<CyanText txt='By you and your community' />
				</div>
				<div className='mt-20 ml-10 mr-10'>
					<StartButtn func={goNextPage} />
				</div>
				<div className='m-10'>
					<SkipButtn />
				</div>
			</div>{" "}
		</>
	);
};

export default YouPage;
