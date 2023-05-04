import { useState, useEffect } from "react";
import Status from "./right-sides/Status";
import NutritionStat from "./right-sides/NutritionStat";
import ExerciseStat from "./right-sides/ExerciseStat";

const RightSide = ({ age, height, weight, disease, allergy }) => {
  const [show, setShow] = useState("status");

  return (
    <div className='flex flex-col items-center justify-center w-full h-full overflow-auto font-bold text-black bg-white lg:flex-row dark:text-white dark:bg-gray-500 rounded-2xl shadow-shadow change'>
      <div className='flex w-full lg:w-[12%] h-full lg:flex-col justify-start'>
        <button
          className={`flex w-full items-center justify-center h-1/3 text-xl p-5 hover:bg-hover dark:hover:bg-hover hover:transition ${
            show === "status" ? "bg-gray-400 dark:bg-gray-700" : "bg-gray-200 dark:bg-gray-500"
          }`}
          onClick={(e) => setShow("status")}
        >
          신체 정보
        </button>
        <button
          className={`flex w-full items-center justify-center h-1/3 text-xl p-5 hover:bg-hover dark:hover:bg-hover hover:transition ${
            show === "nutrition" ? "bg-gray-400 dark:bg-gray-700" : "bg-gray-200 dark:bg-gray-500"
          }`}
          onClick={(e) => setShow("nutrition")}
        >
          영양 기록
        </button>
        <button
          className={`flex w-full items-center justify-center h-1/3 text-xl p-5  hover:bg-hover dark:hover:bg-hover hover:transition ${
            show === "exercise" ? "bg-gray-400 dark:bg-gray-700" : "bg-gray-200 dark:bg-gray-500"
          }`}
          onClick={(e) => setShow("exercise")}
        >
          운동 기록
        </button>
      </div>
      <div className='flex flex-col items-center justify-center w-full h-full'>
        {show === "status" && <Status age={age} height={height} weight={weight} disease={disease} allergy={allergy} />}
        {show === "nutrition" && <NutritionStat />}
        {show === "exercise" && <ExerciseStat />}
      </div>
    </div>
  );
};

export default RightSide;
