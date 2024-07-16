import CyanText from "../../components/cyantext";
import NextButtn from "../../components/nextbuttn";
import SkipButtn from "../../components/skipbuttn";
import OwnBg from "../../svg/own_bg.svg";
import { useNavigate } from "react-router-dom";

const OwnPage = () => {
	const navigate = useNavigate();
	const goNextPage = () => {
		navigate(`/login/you`);
	};
	return (
		<>
			<div className='login_bg w-screen h-screen'>
				<div> ` </div>{" "}
				<div className='image_style'>
					<div className=''>
						<img src={OwnBg} />{" "}
					</div>
				</div>{" "}
				<div className='text-cyan_cdy font-extrabold text-4xl mt-20 ml-10 mr-10 text-center'>
					<CyanText txt='Owned and personalised' />
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

export default OwnPage;
