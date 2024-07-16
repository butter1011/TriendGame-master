import { useNavigate } from "react-router-dom";

const SkipButtn = () => {
	const navigate = useNavigate();
	return (
		<>
			<p
				className='text-yellow-300 text-right'
				onClick={() => {
					navigate(`/login/review`);
				}}>
				{" "}
				SKIP{" "}
			</p>{" "}
		</>
	);
};

export default SkipButtn;
