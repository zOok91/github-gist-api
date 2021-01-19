import axios from 'axios';
// import {gistsMock,forksMock,userMock} from '../__mocks__/mocks';

async function getGists(username){
    // return gistsMock;
    if(!username) return null;
    const url = `https://api.github.com/users/${username}/gists`;
    const gistsResponse = await axios.get(url)
    return gistsResponse.data;
}

async function getForks(gistId){
    // return forksMock;
    const url = `https://api.github.com/gists/${gistId}/forks`;
    const gistForksResponse = await axios.get(url)
    return gistForksResponse.data;
}

async function getUserDetails(username){
    // return userMock;
    if(!username) return [];
    const url = `https://api.github.com/users/${username}`;
    const userDetailsResponse = await axios.get(url)
    return userDetailsResponse.data;
}


export {getGists,getForks,getUserDetails};
