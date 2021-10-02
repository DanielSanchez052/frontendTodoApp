import React, { Fragment } from 'react'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@material-ui/core'

export default function index (props){
    return(
        <Fragment>
            <Dialog
                fullWidth
                maxWidth={props.size}
                open={props.isOpen}
                onClose={props.handleClose}
                aria-labelledby='max-width-dialog-title'>
                <DialogTitle id='max-width-dialog-title'>{props.title}</DialogTitle>
                <DialogContent>
                    {props.subtitle != null ?  <DialogContentText>{props.subtitle}</DialogContentText> : null}
                    {props.children}
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose} color='primary'>Close</Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    )
}