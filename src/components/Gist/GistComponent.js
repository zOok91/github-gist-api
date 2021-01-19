import React, { useEffect, useState } from 'react'
import {getForks} from '../../api/ApiCall';
import forkImg from '../../assetts/svg11.svg'
import ImageComponent from '../../common-components/Image/ImageComponent';
import "./GistComponent.scss";

function GistComponent({gist,id}){
    const [forks,setForks] = useState([]);

    useEffect(()=>{
        (async()=>{
            const forks = await getForks(id);
            setForks(forks);
        })()
    },[id])
    let forkList=[];
    if(forks.length > 3){
        forkList = forks.slice(0,3)
    }
    return(
        <div className="gist-container">
            <div className="file-name-container">
                <span>
                {gist.filename}
                </span>
               {gist.language ? <span>
                {gist.language}
                </span>:<span>
                Text
                </span>}
            </div>
            {forkList.length>0?<div className="forks-container">
                <div className="fork-title"><ImageComponent alt="fork" logo={forkImg} height='25' width='25'/> <span>Forks by other users</span></div>
                <div className="fork-list"> {forkList.map(fork=>{
                    const {owner:{avatar_url,login}} = fork;
                    return <>
                    <span><ImageComponent alt="avatar" logo={avatar_url} height='25' width='25' /> {login}</span>
                    </>

                })}</div>
            </div>:<span className="no-forks"><ImageComponent alt="fork" logo={forkImg} height='25' width='25'/>  No Forks</span>}
            <div className="subsection-container">
                <span>size: {gist.size}</span>
                <span>type: {gist.type}</span>
            </div>
        </div>
    )
}

export default GistComponent;
