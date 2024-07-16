import Google from "../svg/wallet_icon.svg";
const WalletButtn = () => {
	return (
		<>
			<button className='bg-gradient-to-r from-cyan_cdy from-5% via-yellow-500 via-20% to-red-700 to-90% w-full h-[42px] -skew-x-[20deg]'>
				<div className='flex flex-row w-full skew-x-[20deg]'>
					<div className='w-[25%] relative flex items-center'>
						<img
							alt=''
							src={Google}
							className=' absolute right-0'
						/>{" "}
					</div>{" "}
					<div className='w-[75%] text-xl'> Connect Wallet </div>{" "}
				</div>{" "}
			</button>{" "}
		</>
	);
};

export default WalletButtn;
