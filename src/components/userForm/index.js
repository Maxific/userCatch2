import React, {useState} from "react";

export const UserForm = ({onFormSubmit}) => {
 
    // const submitHadler = (event) => {
    //     event.preventDefault();
    //     console.log('form submit', event.target.elements.Avatar);
    //     userData.get('LastName');
    //     const userData = new FormData(event.target);  // .get('Name');
    // };


    return (
        <form onSubmit={onFormSubmit}>
            <input name="Name" placeholder="user name"/>
            <input name="LastName" placeholder="user lastName"/>
            <input name="Email" placeholder="user email"/>
            <input name="Avatar" placeholder="user avatar"/>
            <button>add user</button>
        </form>
    )
}