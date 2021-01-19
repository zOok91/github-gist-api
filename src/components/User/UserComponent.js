import React,{useState,useEffect} from 'react'
import {getUserDetails} from '../../api/ApiCall';
import locationImg from '../../assetts/location.svg';
import ImageComoponent from '../../common-components/Image/ImageComponent';
import './UserComponent.scss';

function UserComponent({user}) {
  const [userDetails,setuserDetails] = useState('');

  useEffect(()=>{
    (async()=>{
        const getUser = await getUserDetails(user);
        setuserDetails(getUser);
    })()
},[user])

const {avatar_url,name,login,location} = userDetails;
  return (
    <div className="user-container">
      <div className="user-avatar">
        {avatar_url && <ImageComoponent alt="user-avatar" logo={avatar_url} height="260" width="260"/>}
      </div>
      <div className="user-details">
        <div>{name}</div>
        <div>{login}</div>
        {location && <div><span> <ImageComoponent alt="location" logo={locationImg} height='18' width='18'/>{location}</span></div>}
      </div>
     {name && <div className="button-container">
        <button onClick={()=>(window.location =`https://github.com/${login}`)}>View GitHub Profile</button>
      </div>}
    </div>
  );
}

export default UserComponent;
