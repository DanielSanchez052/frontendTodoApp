import { makeStyles, Typography, 
    Accordion, AccordionSummary, 
    AccordionDetails, AccordionActions, 
    Divider, Button, IconButton} from '@material-ui/core'
import React, { Fragment } from 'react'
import grey from '@material-ui/core/colors/grey'
import DeleteIcon from'@material-ui/icons/Delete';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from'@material-ui/icons/Edit';

const style = makeStyles(theme=>({
    task:{
        // display:'flex',
        // justifyContent:'space-between',
        marginTop: 10,
        backgroundColor:grey[100],
        border:1,
        borderRadius:5,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

function Task(props) {
    const classes = style();
    const {title} = props;
    const {description} = props;
    const { buttonState } = props;

    return (
        <Fragment>
            <Accordion className={classes.task}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography className={classes.heading}>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    {description}
                </Typography>
                </AccordionDetails>
                <Divider />
                <AccordionActions>
                    <Button
                        variant="contained"
                        startIcon={<ArrowBackIosIcon />}
                        disabled={buttonState.back}
                    > 
                        Back 
                    </Button>
                    <IconButton
                        variant="contained"
                        color="secondary"
                    >
                        <DeleteIcon />
                    </IconButton>
                    <IconButton
                        variant="contained"
                        color="inherit"
                    >
                        <EditIcon />
                    </IconButton>
                    <Button
                        variant="contained"
                        color="primary"
                        endIcon={<ArrowForwardIosIcon />}
                        disabled={buttonState.forward}
                    > 
                        Skip 
                    </Button>
                </AccordionActions>
            </Accordion>
        </Fragment>
    )
}

export default Task
