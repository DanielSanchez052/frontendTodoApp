import React, { Fragment } from 'react'
import { Button, TextField } from '@material-ui/core';
import { useFormik } from 'formik';

function AddGroupForm() {
    const formik = useFormik({
        initialValues: {
            groupName: '',
        },
        // validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });
    
    return (
        <Fragment>
            <form onSubmit={formik.handleSubmit}>
                    <TextField
                        fullWidth
                        style={{ paddingBottom:15 }}
                        id="groupName"
                        name="groupName"
                        label="Nombre del Grupo"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        // error={formik.touched.email && Boolean(formik.errors.email)}
                        // helperText={formik.touched.email && formik.errors.email}
                    />
                <Button color="primary" variant="contained" fullWidth type="submit">
                    Crear
                </Button>
            </form>
        </Fragment>
    )
}

export default AddGroupForm
