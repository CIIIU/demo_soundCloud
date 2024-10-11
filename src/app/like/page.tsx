"use client"

import { useState } from "react"

const LikePage = () => {
    const [name,setName]= useState("hung")
    const handleClick = () =>{
        alert("me")
    } 
    return(
    <div onClick={() => handleClick()}>
        like page: with name = {name}
    </div>
    )
}

export default LikePage