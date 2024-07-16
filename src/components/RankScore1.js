const RankScore = (props) => {
  return (
    <>
      <div className="flex mb-3 pl-5 h-full flex-row justify-between w-full gap-3">
        <div className="flex flex-1 gap-2 flex-row items-center justify-between">
          <div>
            {" "}
            <img className="min-w-[20px]" src={props.number} />{" "}
          </div>{" "}
          <div>
            {" "}
            <img className="min-w-[50px]" src={props.avatar} />{" "}
          </div>{" "}
        </div>{" "}
        <div className="flex flex-[5] flex-row justify-between items-center text-[16px] text-[#FFFFFF]">
          <div>
            <p> {props.name} </p>{" "}
          </div>{" "}
          <div>
            <p className="text-[#C1C1C1]"> {props.score} </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default RankScore;
