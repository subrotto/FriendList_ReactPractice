import React from 'react';
import './Specialfriend.css'
const Specialfriend = (props) => {
    console.log(props)
    return (
        <div className='special-list'>
            <img className='special-image' src={props.special.img} alt="" />
            <p>Name : {props.special.name}</p>
        </div>
    );
};

export default Specialfriend;