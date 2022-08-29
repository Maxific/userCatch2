import React, {useState, useEffect} from 'react';
import styles from './app.module.css';
import { useFlash } from './useFlash';


function toggler (val) {return !val}

export const App = () => {

    const [shouldShowSale, setShouldShowSale] = useState(true);

    const handleShowSale = () => {
        setShouldShowSale(toggler);
    };

    const {shouldShowBorder, handleShouldFlash} = useFlash(500);    
    


    return (
        <>
            {shouldShowSale && <h1 className={shouldShowBorder ? styles.sale : ''}>Sale!</h1>}
            <button onClick={handleShowSale}>toggle sale</button>
            <button onClick={handleShouldFlash}>start sale</button>
        </>
    );
};

