import ModalBox from "./modalBox";
import GreenButton from "./greenButton";

const GameOver = ({ score }) => {
  const best = 15.333;
  const rank = 1.567;
  return (
    <>
      <div className="h-svh w-svw flex items-center justify-center px-[1%] space-y-2">
        <ModalBox>
          <header className="mx-auto flex flex-col space-y-2">
            <div>
              <h1 className="text-6xl font-bold mb-3 text-red-600">
                {" "}
                & times;{" "}
              </h1>{" "}
              <h1 className=" uppercase  text-3xl font-bold after:text-red-500 after:content-['Over'] after:uppercase">
                Game & nbsp;{" "}
              </h1>{" "}
            </div>{" "}
            <div>
              <h3 className="text-lg text-[#A7A7A7]"> Score: </h3>{" "}
              <h2 className="text-3xl"> {score} </h2>{" "}
            </div>{" "}
          </header>{" "}
          <section className="flex flex-col justify-center  space-y-2 pb-8">
            <div className=" flex justify-center">
              <div className="flex flex-row w-4/5 gap-2 justify-center items-center">
                <div className="bg-[#2A2A2A] rounded-[1rem] py-2 px-4">
                  <label className="text-xl"> Best: {best} </label>{" "}
                </div>{" "}
                <div className="bg-[#2A2A2A] rounded-[1rem] py-2 px-4">
                  <label className="text-xl"> Rank: {rank} </label>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <GreenButton title="GET MORE POINTS" onclick={() => {}} />{" "}
            <GreenButton title="BRAG" onclick={() => {}} />{" "}
            <GreenButton title="PLAY AGAIN" onclick={() => {}} />{" "}
          </section>{" "}
        </ModalBox>{" "}
      </div>{" "}
    </>
  );
};

export default GameOver;
