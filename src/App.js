import React, {  useState, useEffect } from "react"; 
import styles from './app.module.css';
import { UserView } from "./components/userView";
import { UserForm } from "./components/userForm";




export const App = () => {

const [users, setUsers] = useState([]);
const [isPreloaderShow, setIsPreloaderShow] = useState(false);
const PRELODER_URL = 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921';

    useEffect(() => {
        setIsPreloaderShow(true);
        fetch('https://reqres.in/api/users?page=2')
        .then((data) => data.json())
        .then((data) => {
            setUsers(data.data);
            setIsPreloaderShow(false);
        });
    }, []);

    const addUser = (event) => {
        event.preventDefault();
        const userData = new FormData(event.target);
        setUsers((prevUsers) => ([
            ...prevUsers,
            {
                lastName: userData.get('LastName'),
                firstName: userData.get('Name'),
                avatar: userData.get('Avatar'),
                email: userData.get('Email'),
                id: Math.random().toString()    
            }
        ]))
    };

    return (<div className={styles.wrapper}>
        <UserForm onFormSubmit={addUser}/>
        {isPreloaderShow && <img src={PRELODER_URL} alt=''/>}
        {users.map((user) => {
            return <UserView key={user.id} value={user}/>
        })}
        </div>)
}

    