const StartButtn = (props) => {
	return (
		<>
			<button
				className='bg-gradient-to-tr from-[#00FFCF] from-20% via-pink-400 via-60% to-pink-800 to-90% w-full h-[70px] -skew-x-[20deg]'
				onClick={props.func}>
				{" "}
				<div className='w-full skew-x-[20deg] text-center text-2xl font-extrabold'>
					GET STARTED{" "}
				</div>{" "}
			</button>{" "}
		</>
	);
};

export default StartButtn;
