const sortTasks = (tasks) => {
    let taskSorted = [];
    taskSorted["tasksToDo"] = tasks.filter((task) => task.state === "TD");
    taskSorted["taskInProcess"] = tasks.filter((task) => task.state === "IP");
    taskSorted["taskFinalized"] = tasks.filter((task) => task.state === "ED");

    return taskSorted;
};

const findTasks = (idGroup, tasks = []) => {
    let taskActive = [];
    tasks.map((task) => {
        if (task.id === idGroup) taskActive.push(task.task);
    });
    if (taskActive[0]) taskActive = sortTasks(taskActive[0]);
    return taskActive;
};

const rand = () => Math.round(Math.random() * 20) - 10;

const getModalStyle = () => {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
};

export { sortTasks, findTasks, getModalStyle };
