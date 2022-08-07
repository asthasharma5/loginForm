import React, { useEffect, useState } from "react"
import "./homepage.css"
import Timer from "./timer.js"

const Homepage = ({setLoginUser}) => {
    
    
    return (
        <>

       <div style={{marginBlockEnd: "auto",display:'inline-block'}}> <Timer/></div>
        <div className="homepage">
            <input type='text' placeholder="enter text" style={{height: '31px',width:' 245px'}}></input>
            
            <div className="button" onClick={() => setLoginUser({})} >Submit</div>
        </div>
        </>
        
    )
}

export default Homepage;