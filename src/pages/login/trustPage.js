import { useNavigate } from "react-router-dom";
import NextButtn from "../../components/nextbuttn";
import Robot from "../../svg/Robot.svg";
import SkipButtn from "../../components/skipbuttn";
import CyanText from "../../components/cyantext";

const TrustPage = () => {
	const navigate = useNavigate();
	const goNextPage = () => {
		navigate(`/login/own`);
	};
	return (
		<>
			<div className='login_bg w-screen h-screen'>
				<div> ` </div>{" "}
				<div className='image_style'>
					<div className=''>
						<img src={Robot} />{" "}
					</div>
				</div>{" "}
				<div className='mt-20 ml-10 mr-10 text-center'>
					<CyanText txt='A new trusted review standard' />
				</div>
				<div className='mt-20 ml-10 mr-10'>
					<NextButtn
						txt='NEXT'
						func={goNextPage}
					/>
				</div>
				<div className='m-10'>
					<SkipButtn />
				</div>
			</div>{" "}
		</>
	);
};

export default TrustPage;
