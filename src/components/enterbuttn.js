const EnterButtn = (props) => {
	return (
		<>
			<button className='bg-gray-500 w-full h-[70px] text-xl text-[#C2C2C2] font-bold -skew-x-[20deg]'>
				<div className=' skew-x-[20deg]'> {props.txt} </div>{" "}
			</button>{" "}
		</>
	);
};

export default EnterButtn;
