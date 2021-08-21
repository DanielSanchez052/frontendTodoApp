import {fetchWithoutToken}  from './fetch.js';
//import { sortTasks } from './utils'

export const loadGroups = async()=>{
    let data=[];
    try {
        const res = await fetchWithoutToken('task/group_task/',{});
        data = await res.json();
    }catch(e){
        console.log(e);
    }
    return data;
}