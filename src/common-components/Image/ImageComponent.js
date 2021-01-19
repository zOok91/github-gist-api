import React from 'react'

function ImageComoponent({logo,width="20",height="20",alt='gist'}){
    return(
        <img 
          src={logo}
          alt={alt}
          width={width} 
          height={height}/>
    )
}

export default ImageComoponent;