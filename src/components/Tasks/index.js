import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Grid, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import TasksCategory from "./TasksCategory";
import { findTasks } from "../../helpers/utils.js";
import ModalSimple from '../Modal'

const styles = makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(1),
        padding: theme.spacing(1),
    },
}));

export default function index() {
    const [open, setOpen] = React.useState(false);
    const classes = styles();

    const groupActive = useSelector((state) => state.group.groupActive);
    const tasks = useSelector((state) => state.group.groups);
    const sortedTask = findTasks(groupActive, tasks);

    const taskToDo = sortedTask.tasksToDo ? sortedTask.tasksToDo : [];
    const taskInProcess = sortedTask.taskInProcess
        ? sortedTask.taskInProcess
        : [];
    const taskFinalized = sortedTask.taskFinalize 
        ? sortedTask.taskFinalized
        : [];

    const handleStateModal=()=>{
        setOpen(!open)
    }

    return (
        <Fragment>
            <IconButton color="primary" aria-label="Add task" p={1} onClick={handleStateModal}>
                <AddIcon fontSize="large" />
            </IconButton>
            <div style={{ paddingTop: 0 }}>
                <Grid container>
                    <Grid item xs={12} md={4}>
                        <TasksCategory
                            titleCategory="To Do"
                            paper={classes.paper}
                            tasks={taskToDo}
                            buttonState={{ back: true, forward: false }}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TasksCategory
                            titleCategory="In progress"
                            paper={classes.paper}
                            tasks={taskInProcess}
                            buttonState={{ back: false, forward: false }}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TasksCategory
                            titleCategory="Finalized"
                            paper={classes.paper}
                            tasks={taskFinalized}
                            buttonState={{ back: false, forward: true }}
                        />
                    </Grid>
                </Grid>
            </div>
            <ModalSimple isOpen={open} handleClose={handleStateModal} size='sm' title='Add Task to: ' >
            </ModalSimple>
        </Fragment>
    );
}
