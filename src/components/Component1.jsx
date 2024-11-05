import { useState } from "react";

function Component1({ icon }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const clickHandler = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex gap-32 bg-black px-14 py-7 rounded-2xl relative">
      {icon.map((icon, index) => (
        <span
          key={index}
          onClick={() => clickHandler(index)}
          className={`relative p-2 rounded-full ${
            activeIndex === index ? "text-yellow-300 border-white border-[2px]" : "text-white border-transparent border-[1px]"
          }`}
          
        >
          {icon}
          {/* {activeIndex === index && (
            <span className="absolute top-[-15px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[20px] border-r-[20px] border-t-[20px] border-transparent border-t-white rounded-t-lg "></span>
          )} */}
        </span>
      ))}
    </div>
  );
}

export default Component1;
