//React-tilt Library used

import { Tilt } from "react-tilt";
import CardIMG from "../assets/CardIMG.png";
import { IoIosArrowForward } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

const defaultOptions = {
  reverse: false,
  max: 75,
  perspective: 1000,
  scale: 1.1,
  speed: 1000,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

export default function Component5() {
  return (
    <div>
      <Tilt
        options={defaultOptions}
        className="bg-white text-black p-3 rounded-lg flex flex-col gap-5"
      >
        <img src={CardIMG} alt="Card Image" />
        <div className="flex flex-col gap-2 items-left">
          <p className="text-sm text-[#B1B1B1] font-thin flex">UI/UX Design</p>
          <h2 className="w-[12rem] text-left font-bold">
            Learn Figma - UI/UX Design Essential Training
          </h2>
          <div className="flex gap-4 items-center  text-[#B1B1B1] text-sm">
            <div>30h 20min</div>
            <div>
              <GoDotFill size="0.5rem" />
            </div>
            <div>15 Lesson</div>
          </div>
          <div className="w-full bg-[#C6C6C6] h-[1px]"></div>
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-4xl">$199</h2>
            <button className="flex items-center text-white gap-3 outline-none bg-[#725AFF]">
              Start Course <IoIosArrowForward />
            </button>
          </div>
        </div>
      </Tilt>
    </div>
  );
}
