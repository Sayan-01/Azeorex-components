import { useState } from "react";
import { FaCar } from "react-icons/fa6";

export default function Component4() {
  const [hovered, setHovered] = useState(false);
  return (
    <div>
      <button
        className="relative overflow-hidden py-7 px-20 bg-white text-black font-semibold rounded-full transition duration-300"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span
          className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${
            hovered
              ? "transform translate-x-full opacity-0"
              : "transform translate-x-0 opacity-100"
          }`}
        >
          Book Cab
        </span>
        <span
          className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${
            hovered
              ? "transform translate-x-0 opacity-100"
              : "transform -translate-x-full opacity-0"
          }`}
        >
          <FaCar size="2rem"/>
        </span>
      </button>
    </div>
  );
}
