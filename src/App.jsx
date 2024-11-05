import './App.css';
import Component1 from './components/Component1';
import { FaFire } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";

import Component2 from './components/Component2';

import Component3 from './components/Component3';
import { IoMdHome } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { MdSupervisorAccount } from "react-icons/md";
import { HiBookmark } from "react-icons/hi2";

import Component4 from './components/Component4'

function App() {

  //Component 1 Icons
  const allIcons = [<IoHomeSharp size="2rem"/>, <FaFire size="2rem"/>, <IoSettings size="2rem"/>];

  //Component 3 Icons
  const icons = [
    { icon: <IoMdHome size="2rem"/>, label: "Home" },
    { icon: <IoMdSettings size="2rem"/>, label: "Setting" },
    { icon: <MdSupervisorAccount size="2rem"/>, label: "Contact" },
    { icon: <HiBookmark size="2rem"/>, label: "Save" }
  ];


  return (
    <>
      <Component1 icon={allIcons} />
      <Component2 placeholder="What You want to Build ?" name="inputBox" id="inputBox"/>
      <Component3 icon={icons} />
      <Component4/>
    </>
  )
}

export default App
