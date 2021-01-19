import React from 'react'
import {getGists} from '../../api/ApiCall';
import { useEffect, useState } from 'react';
import GistComponent from '../Gist/GistComponent';
import './GistsComponent.scss';

function GistsComponent({user}) {
    const [gists,setGists] = useState([]);

    useEffect(()=>{
        (async()=>{
            const gistsList = await getGists(user);
            setGists(gistsList);
        })()
    },[user])

  return (
    <div className="gists-container">
      {
      gists && gists.length>0 ?gists.map(gist=>(
        Object.values(gist.files).map(val=>(
          <GistComponent id={gist.id} gist={val} />
        ))
      )):<span className="no-gists">No Gists for this user.</span>
      }
    </div>
  );
}

export default GistsComponent;
