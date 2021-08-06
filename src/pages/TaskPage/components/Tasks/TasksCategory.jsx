import { Divider, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react'
import { Fragment } from 'react'
import Task from './Task';

function TasksCategory(props) {
    const { tasks } = props;
    const { titleCategory } = props;
    const { buttonState } = props;
    return (
        <Fragment>
            <Grid item>
                <Paper className={props.paper}>
                    <Typography variant="h4">
                        {titleCategory}
                    </Typography>
                    <Divider />
                    { tasks !== [] ?
                        tasks.map(task=> 
                            <Task key={task.id} title={task.title} description={task.description} buttonState={buttonState}/>
                        )
                        :
                        <Typography variant="h5">No hay Tareas</Typography>
                    }
                </Paper>
            </Grid>
        </Fragment>
    )
}

export default TasksCategory;
