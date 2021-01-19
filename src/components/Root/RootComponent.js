import React,{useState} from 'react'
import HeaderComponent from '../Header/HeaderComponent'
import FooterComponent from '../Footer/FooterComponent'
import UserComponent from '../User/UserComponent'
import RouterComponent from '../Router/RouterComponent'

import './RootComponent.scss';

function RootComponent() {
  const [user,setUser] = useState(null)
  const handleKeyPress = (e,search) =>{
    if(e.key === 'Enter'){
      setUser(search)
    }
  }
  return (
    <div className="root-container">
      <div className="header-container">
        <HeaderComponent handleSubmit={handleKeyPress}/>
      </div>
      <div className="body-container">
        <UserComponent user={user}/>
        <RouterComponent user={user}/>
      </div>
      <div className="footer-container">
        <FooterComponent/>
      </div>
    </div>
  );
}

export default RootComponent;
