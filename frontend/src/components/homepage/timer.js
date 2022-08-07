import React,{useState,useEffect} from "react";
function Timer(){
    const[seconds,setSeconds]=useState(0);
    const[minutes,setMinute]=useState(0);
    var timer;
    useEffect(()=>{
        timer=setInterval(()=>{
            setSeconds(seconds+1);
            if(seconds==59){
                setMinute(minutes+1);
                setSeconds(0);
            }
        },1000)
        return ()=> clearInterval(timer);
    })

    return( 
         <>
         <div style={{marginLeft:'auto'}}>
        <h1>{ minutes<10?"0"+minutes:minutes}:{seconds<10?"0"+seconds:seconds}</h1>
        </div>
        </>
    )
        
}
export default Timer;