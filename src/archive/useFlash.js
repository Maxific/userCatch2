import React, {useState, useEffect} from "react"

function toggler (val) {return !val}


export const useFlash = (timeToFlash) => {
    const [shouldFlash, setShouldFlash] = useState(false);
    const [shouldShowBorder, setShouldShowBorder] = useState(false);

    const handleShouldFlash = () => {
        setShouldFlash(toggler);
    };

    useEffect(() => {
        let intervalId;

        if (shouldFlash) {
            intervalId = setInterval(() => {
                setShouldShowBorder(toggler);
            }, timeToFlash);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [shouldFlash]);


    return {
        shouldShowBorder,
        handleShouldFlash

    }
} 