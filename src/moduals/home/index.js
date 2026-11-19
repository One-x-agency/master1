import React from "react";
import Herobanner from "./herobanner";
import Evolution from "./evolutionsection";
import Culture from "./culture";

export default function Home(){
    return(
        <div>
            <Herobanner/>
            <Evolution/>
            <Culture/>
        </div>
    )
}