const GreenButton = ({ title, onclick }) => {
  return (
    <button
      className="p-4  rounded-[20px] w-full text-center
         font-bold text-black  sm:text-[32px] text-[22px] bg-[#00FFCF]"
      onClick={onclick}
    >
      {title}
    </button>
  );
};

export default GreenButton;
