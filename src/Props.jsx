import React from 'react';

function Props(props){
    return(
        <>
        <h2>Date is {props.date}</h2>
        <h2>Name is {props.author.name}</h2>
        <img src={props.author.avatarUrl}  alt="avatarUrl"></img>

        </>
    )
}

export default Props;