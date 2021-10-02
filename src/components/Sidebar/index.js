import React,{ Fragment } from "react";
import { Drawer, makeStyles, Toolbar } from "@material-ui/core";
import {
    ListItemIcon,ListItem,
    ListItemText,List,Divider,
} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { serviceGroups } from "../../helpers/serviceGroups";
import { useDispatch, useSelector } from "react-redux";
import { types } from "../../types/types";
import green from "@material-ui/core/colors/green";
import MenuItem from "./MenuItem";
import ModalSimple from '../Modal'
import AddGroupForm from "./AddGroupForm";

const styles = makeStyles((theme) => ({
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
    },
    drawerContainer: {
        overflow: "auto",
    },
    toolbar: theme.mixins.toolbar,
    addGroup: {
        backgroundColor: green[200],
        "&:hover": {
            backgroundColor: green[100],
        },
    },
}));

function index(props) {
    const [open, setOpen] = React.useState(false);
    const classes = styles();
    const dispatch = useDispatch();
    const groupList = [];

    React.useEffect(() => {
        async function loadedGroups() {
            const groups = await serviceGroups.load();
            await dispatch(eventLoaded(groups));
        }
        loadedGroups();
    }, [dispatch]);

    const groups = useSelector((state) => state.group.groups);

    for (const group in groups) {
        groupList.push(groups[group]);
    }

    const handleStateModal=()=>{
        setOpen(!open)
    }

    return (
        <Fragment>
            <Drawer
                className={classes.drawer}
                variant={props.variant}
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
                open={props.open}
                onClose={props.onClose ? props.onClose : null}
            >
                {props.onClose ? null : <Toolbar />}

                <List component="nav">
                    <ListItem className={classes.addGroup} onClick={handleStateModal} button>
                        <ListItemIcon>
                            <AddCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Agregar Grupo" />
                    </ListItem>
                    <Divider />
                    {groupList.map((group) => (
                        <MenuItem key={group.id} item={group} />
                    ))}
                </List>
            </Drawer>
            <ModalSimple isOpen={open} handleClose={handleStateModal} size='sm' title='Add Group' >
                <AddGroupForm />
            </ModalSimple>
        </Fragment>
    );
}

const eventLoaded = (groups) => ({
    type: types.eventLoaded,
    payload: groups,
});

export default index;
