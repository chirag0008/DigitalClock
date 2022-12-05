import React, { useState } from 'react'

const DigitalClock = () => {
    let time=new Date().toLocaleTimeString();
    const[tim,setTime]=useState(time);
    const updateTime=()=>{
        let time=new Date().toLocaleTimeString();
        setTime(time);
    }
    setInterval(updateTime,1000);
  return (
    <>
    <h1 style={{textDecoration:"underline",fontFamily:"kenia"}}>Digital Clock:</h1>
    <div style={{backgroundColor:"lightgreen"}}>
    <h1 style={{marginLeft:"550px",marginTop:"260px",fontSize:"90px"}}>{tim}</h1>
    </div>
    </>
  )
}

export default DigitalClock