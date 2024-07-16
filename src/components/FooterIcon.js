import { useNavigate } from "react-router-dom";

const FooterIcon = ({ item }) => {
	const router = useNavigate();
	return (
		<div
			className="w-full flex flex-col justify-center items-center   text-center cursor-pointer"
			onClick={() => {
				router(item.url);
			}}>
			<div className=" text-lg font-sans text-[inter]">{item.icon}</div>
			<h1 className=" text-[white] text-[inter] text-md">{item.title}</h1>
		</div>
	);
};

export default FooterIcon;
