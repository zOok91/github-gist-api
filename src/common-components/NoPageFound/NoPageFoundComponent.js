import React from 'react';

function NotFoundPageComponent(props){
    return (
        <div style={{padding:'2rem'}}>
            Component {props.location.pathname}
        </div>
    )
}
export default NotFoundPageComponent;