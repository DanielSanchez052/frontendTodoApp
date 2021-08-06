import React, {Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Grid, IconButton} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add';
import TasksCategory from './TasksCategory';
import {types} from '../../../../types/types'
import {loadTasks} from '../../../../helpers/loadTasks'

//import dbTask from './db.json';


const styles = makeStyles(theme => ({
    paper:{
        margin: theme.spacing(1),
        padding: theme.spacing(1),
    },
}));

export default function Tasks() {
    const classes = styles();
    const dispatch = useDispatch();

    React.useEffect(()=>{
        async function loadedTasks(){
            const tasks = await loadTasks();
            await dispatch(eventLoaded(tasks));
        }
        loadedTasks();
    },[dispatch]);
    
    let taskToDo = []
    let taskInProcess = []
    let taskFinalized = []

    taskToDo = useSelector(state=>state.task.tasks.tasksToDo);
    taskInProcess = useSelector(state=>state.task.tasks.taskInProcess);
    taskFinalized = useSelector(state=>state.task.tasks.taskFinalized);

    return (
        <Fragment>
            <IconButton color="primary" aria-label="Add task"  p={1}>
                <AddIcon fontSize="large"/>
            </IconButton>
            <div style={{ paddingTop: 0}}>
                <Grid container>
                    <Grid item xs={12} md={4} >
                        <TasksCategory titleCategory="To Do" paper={classes.paper} tasks={taskToDo} buttonState={{'back': true,'forward': false}}/>
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <TasksCategory titleCategory="In progress" paper={classes.paper} tasks={taskInProcess}/>
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <TasksCategory titleCategory="Finalized" paper={classes.paper} tasks={taskFinalized} buttonState={{'back': false,'forward': true}}/>
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    )
}

export const eventLoaded = (tasks)=>({
    type: types.eventLoaded,
    payload: tasks
});
