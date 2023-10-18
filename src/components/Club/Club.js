import React, { useEffect, useState } from 'react';
import Friends from '../Friends/Friends';
import Specialfriend from '../Specialfriend/Specialfriend';
import './Club.css'
const Club = () => {
    const [friends,setFriends]=useState([]);
    const [specialFriend,setSpecialFriend]=useState([]);
    useEffect(()=>{
        fetch('./friends.JSON')
        .then(res=>res.json())
        .then(data=>setFriends(data));
    },[]);
    const handleClick=(friend)=>{
        const newfriend=[...specialFriend,friend];
        setSpecialFriend(newfriend);
    }
    
    return (
        <div className='club'>
           
            <div className="friends">
                {
                    friends.map(friend=><Friends handleClick={handleClick} key={friend.id} friend={friend}></Friends>)
                }
            
            </div>
            <div className="special">
                <h3>Special Friends</h3>
                {
                    specialFriend.map(special=><Specialfriend special={special}></Specialfriend>)
                }
            </div>
        </div>
    );
};

export default Club;