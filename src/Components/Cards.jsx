import React from "react";

function Cards() {
  return (
    <div className=" px-32 w-full h-screen bg-zinc-900 flex items-center gap-5">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card relative w-full rounded-xl h-full bg-[#004d42ff] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          ></img>
          <button className="absolute px-5 py-2 rounded-full border-2 left-10 bottom-10">
            &copy;2024
          </button>
        </div>
      </div>

      <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
        <div className="card relative flex items-center justify-center w-1/2 rounded-xl h-full bg-[#192826]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          ></img>
          <button className="absolute px-5 py-2 rounded-full border-2 left-10 bottom-10">
            &copy;2024
          </button>
        </div>
        <div className="card relative flex items-center justify-center w-1/2 rounded-xl h-full bg-[#192826]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          ></img>
          <button className="absolute px-5 py-2 rounded-full border-2 left-10 bottom-10">
            &copy;2024
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
