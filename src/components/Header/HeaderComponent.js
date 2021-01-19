import React, { useState } from 'react'
import logo from '../../assetts/PNG/GitHub-Mark-Light-120px-plus.png'
import notification from '../../assetts/svg7.svg'
import plus from '../../assetts/svg6.svg'
import profile from '../../assetts/profile.png'
import gist from '../../assetts/svg2.svg'
import ImageComoponent from '../../common-components/Image/ImageComponent'
import './HeaderComponent.scss';

function HeaderComponent({handleSubmit}) {
  const [search,setSearch] = useState('')

  return (
    <div className="header">
        <div className="logo">
          <ImageComoponent logo={logo} height="35" width="35"/>
          <ImageComoponent logo={gist} height="35" width="55"/>
        </div>
        <div className="search">
          <input  type="text" onKeyDown={(e)=>handleSubmit(e,search)} onChange={(e)=>setSearch(e.target.value)} placeholder="Search or jump to..."/>
          <div className="nav-items">
              <div>All Gists</div>
              <div>Back to GitHub</div>
          </div>
        </div>
        <div className="profile-items">
          <ImageComoponent logo={notification}/>
          <ImageComoponent logo={plus}/>
          <ImageComoponent logo={profile}/>
        </div>
    </div>
  );
}

export default HeaderComponent;
