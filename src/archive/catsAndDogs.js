import React, { useState } from "react";
import styles from  './shmap.module.css';
import { useFlash } from "./useFlash";


const CONFIG = {
    "true": {
        img: '',
        name: 'CAT'
    },

    "false": {
        img: '',
        name: 'DOG'
    }

};




export const Shmap = () => {
    const {shouldShowBorder: currentAnimal, handleShouldFlash} = useFlash(1000);


    const {img, name} = CONFIG[String(currentAnimal)];
    
    return (
        <div>
        <button onClick={handleShouldFlash}>change</button>
        <div>
            <h1>{name}</h1>
            <img src={img}/>
        </div>
        </div>
    )
}