import "../pages/login/global.css";
const CyanText = (props) => {
  return (
    <>
      <span className="text-[#00FFCF] font-extrabold text-4xl">
        {" "}
        {props.txt}{" "}
      </span>{" "}
    </>
  );
};

export default CyanText;
