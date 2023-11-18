import React from "react";
import Navbar from "./Navbar";

export default function Home(){
    return(
        <div className="home">
            <Navbar/>
            <div className="title">Kalasey Village</div>
            <h1 className="subtitle">Welcome to Kalasey</h1>
        </div>
    )
}