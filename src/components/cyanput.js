const CyanPut = (props) => {
	return (
		<input
			className='w-full h-[50px] bg-transparent p-2 text-[#00FFCF] border-b-4 border-b-[#00FFCF] placeholder-[#00FFCF] text-base'
			placeholder={props.txt}
		/>
	);
};

export default CyanPut;
