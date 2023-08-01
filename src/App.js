import { useState } from "react";
import House from "./component/House";
import SwitchBtn from "./component/SwitchBtn";
function App() {
  let [isNight,setIsNight]=useState(false);
  const onToogleClick= ()=>{
    setIsNight(!isNight)
  }
  return (
    <div className={["App ",isNight?'night':''].join(" ")}>
      <div className="switch">
         <SwitchBtn onClick={onToogleClick} isActive={isNight}/>
      </div>
      <House floor={4}  className="mx-20" isLight={isNight}/>
      <House floor={2}  className="mx-20" isLight={isNight}/>
      <House floor={3}  className="mx-20" isLight={isNight}/>
      <House floor={5}  className="mx-20" isLight={isNight}/>
    </div>
  );
}

export default App;
