const NextButtn = (props) => {
	return (
		<>
			<button
				className='bg-[#00FFCF] w-full h-[70px] text-2xl text-black font-extrabold -skew-x-[20deg]'
				onClick={props.func}>
				<div className=' skew-x-[20deg]'> {props.txt} </div>{" "}
			</button>{" "}
		</>
	);
};

export default NextButtn;
