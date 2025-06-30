import style from './Style.css' 
import { useEffect, useState } from "react";

export default function Clock({ colors }) {
  const [time, setTime] = useState("0");
  useEffect(()=>{
   setInterval(()=>{
    setTime(new Date().toLocaleTimeString());
   },1000)
  },[]);
  return (
    <>
      <h1
        style={{
          color: colors,
          backgroundColor : 'black',
          width : '230px',
          height : '50px'
        }}
      >
        {time}
      </h1>
    </>
  );
}
