import "./global.css";
import MainIcon from "../../svg/mainicon.svg";
import Rectangle from "../../svg/Group 2092.svg";
import CyanPut from "../../components/cyanput";
import CyanButtn from "../../components/cyanbuttn";
import GoogleButtn from "../../components/googlebuttn";
import WalletButtn from "../../components/walletbuttn";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../App";

const LoginPage = () => {
	const { auth, setAuth } = useAuth();
	setAuth(false);
	const navigate = useNavigate();
	const goNextPage = () => {
		navigate(`/login/load`);
	};
	return (
		<>
			{" "}
			<div className="fixed index_bg w-screen h-screen top-0">
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
						<div className=" mt-28">
							<p className=" text-[#00FFCF] text-2xl ml-4 font-bold">
								{" "}
								Welcome Back{" "}
							</p>{" "}
							<div className="mt-16">
								<CyanPut txt="NAME" />{" "}
							</div>{" "}
							<div className="mt-10">
								<CyanPut txt="LAST NAME" />
							</div>{" "}
							<p className=" text-[#00FFCF] mt-4 ml-4 text-sm">
								{" "}
								Forgot Password ?{" "}
							</p>{" "}
						</div>{" "}
					</div>{" "}
					<div className="m-10">
						<div>
							{" "}
							<CyanButtn txt="LOGIN" func={goNextPage} />{" "}
						</div>{" "}
						<div className="mt-10">
							{" "}
							<GoogleButtn />{" "}
						</div>{" "}
						<div className="mt-6">
							{" "}
							<GoogleButtn />{" "}
						</div>{" "}
						<div className="mt-6">
							<WalletButtn />
						</div>{" "}
					</div>{" "}
				</div>{" "}
			</div>{" "}
		</>
	);
};

export default LoginPage;
