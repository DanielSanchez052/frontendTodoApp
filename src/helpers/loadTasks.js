import {fetchWithoutToken}  from './fetch.js';

export const loadTasks = async()=>{    
    let tasks=[];
    let data=[];
    try{
        const res = await fetchWithoutToken('task/tasks',{});
        data = await res.json();
    } catch(e){
        console.log(e);
    }
    tasks['tasksToDo'] = data.filter(task => task.state === "TD");
    tasks['taskInProcess'] = data.filter(task => task.state === "IP");
    tasks['taskFinalized'] = data.filter(task => task.state === "ED");
    return tasks;
} 
