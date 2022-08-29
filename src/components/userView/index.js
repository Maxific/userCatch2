import React, {useState} from "react";
import styles from './index.module.css';
import {AiOutlineDown, AiOutlineUp} from 'react-icons/ai';

export const UserView = ({value}) => {
const [open, setOpen] = useState(false);

const onClickChange = () => setOpen((open) => !open)

    // avatar: "https://reqres.in/img/faces/7-image.jpg"
    // email: "michael.lawson@reqres.in"
    // first_name: "Michael"
    // id: 7
    // last_name: "Lawson"
    return (
        <div className = {styles.wrapper}>
            <div className={styles.avatar}><img src={value.avatar} alt=''/></div>    
            <div className={styles.firstName}>{value.first_name}</div>
            <button className={styles.button} onClick={onClickChange}> {open ? <AiOutlineDown/> : <AiOutlineUp/>} </button>
            {open &&
                <div className={styles.bottom}>
                    <div className={styles.lastName}>{value.last_name}</div>
                    <div className={styles.email}>{value.email}</div>
                </div>
            }
        </div>
    )

}