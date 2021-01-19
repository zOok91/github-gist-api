import React from 'react'
import ImageComponent from '../../common-components/Image/ImageComponent';
import './TabnameComponent.scss'

function TabnameComponent({logo,title,active}){
    return (
        <div style={{borderBottom:active?'0.2rem solid red':''}} className="tabname-container">
            <ImageComponent logo={logo} height="15" width="15"/>
            <span>{title}</span>
        </div>
    )
}

export default TabnameComponent;