import {fetchWithoutToken}  from './fetch.js';

export const loadTasks = async()=>{    
    let data=[];
    try{
        const res = await fetchWithoutToken('task/tasks',{});
        data = await res.json();
    } catch(e){
        console.log(e);
    }
    return data;
} 
