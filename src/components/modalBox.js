const ModaglBox = ({ children }) => {
	return (
		<>
			<div
				className="bg-[#333333] rounded-2xl mx-[5%] text-center text-white  flex flex-col space-y-6 w-full relative justify-center"
				style={{ boxShadow: "0px -4px 4px #00FFCF" }}>
				{children}
			</div>
		</>
	);
};

export default ModaglBox;
