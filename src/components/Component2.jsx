import PropTypes from 'prop-types';
import { FaArrowRight } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import { useState } from 'react';

export default function Component2({ placeholder, name, id }) {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = () =>{
    console.log(inputValue)
  }
  const handleCopy = () =>{
    navigator.clipboard.writeText(inputValue).then(()=>{
      alert('Text copied Successfully!')
    }).catch(()=>{
      alert("Error! Try Again.")
    })
  }

  return (
    <div className='flex flex-col gap-4'>
      <div>
        <div className='text-white font-bold text-4xl'>What Do You Want To Build?</div>
        <div>Prompt, run, edit and deploy full-stack web apps.</div>
      </div>
      <div className='bg-black p-4 rounded-xl border-white border-[1px] flex flex-col gap-5'>
      <div className='flex items-center'>
        <input
          type="text"
          name={name}
          id={id}
          placeholder={placeholder}
          aria-label={placeholder}
          value={inputValue}
          onChange={(e)=>setInputValue(e.target.value)}
          className="w-[30rem] bg-black h-[5rem] text-white text-3xl font-bold outline-none border-none"
        />
        <button type="submit" onClick={handleSubmit} className='bg-blue-700 text-white p-5 rounded-md'><FaArrowRight /></button>
      </div>
      <div className='flex justify-between items-center text-white'>
        <div className='flex gap-5'>
          <button onClick={handleCopy}><FiLink /></button>
          <button><BsStars /></button>
        </div>
        <div className='font-extralight'>Use <span className='font-bold bg-slate-800 px-3 rounded-sm'>Shift</span> + <span className='font-bold bg-slate-800 px-3 rounded-sm'>Return</span> for a new line</div>
      </div>
    </div>
    </div>
  );
}

Component2.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
