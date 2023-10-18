import React from 'react';
import './Friends.css'

const Friends = (props) => {
    const {name,age,id,department,hobby,img,relationship}=props.friend;
    return (
      
           <div className='frnd'>
           
                <img className='image' src={img} alt="" />
                
           <h4>Name :{name}</h4>
           <p>ID :{id}</p>
           <p>Age :{age}</p>
           <p><small>Hobby : {hobby}</small></p>
           <p><small>Relationship : {relationship}</small></p>
           <p>Department :{department}</p>
           <button onClick={()=>props.handleClick(props.friend)} className='btn'>Add to Special Friend</button>
           </div>
          
     
      
    );
};

export default Friends;