import axios from 'axios';
const HOST = "http://localhost:7051";

export let getUser = async () => {    
    return await axios.get(`${HOST}/api/user`);
}

export let getData = async (groupId) =>{
    return await axios.get(`${HOST}/api/getDetails/groupId=${groupId}`);
}

export let getMenuItem = async (groupId) =>{
    return await axios.get(`${HOST}/api/menuItem`);
}