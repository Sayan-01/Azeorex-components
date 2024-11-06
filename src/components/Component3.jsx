import PropTypes from 'prop-types';
import {  useState } from 'react';


export default function Component3({ icon }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const clickHandler = (index) => {
    setActiveIndex(index);
  };



  return (
    <div>
      <div className="flex items-center gap-10 bg-[#7D60FF] px-3 py-2 rounded-full">
        {icon.map((item, index) => (
          <span
            key={index}
            onClick={() => clickHandler(index)}
            className={`flex items-center gap-3 px-4 py-2 rounded-full cursor-pointer  ${
              activeIndex === index
                ? "text-[#7D60FF] bg-white w-[8rem] transition-all duration-300 ease-in-out"
                : "text-white"
            }`}
            
          >
            {item.icon}
            {activeIndex === index && <span>{item.label}</span>}
          </span>
        ))}
      </div>
    </div>
  );
}

Component3.propTypes = {
  icon: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.element.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};
