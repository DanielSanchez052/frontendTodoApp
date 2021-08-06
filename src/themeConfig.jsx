import {unstable_createMuiStrictModeTheme as createTheme} from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green'
import red from '@material-ui/core/colors/red'
const theme = createTheme({
    palette:{
        primary:{
            light: green[300],
            main: green[400],
            dark: green[600],
            contrastText: '#fff',
        },
        secondaary:{
            light: red[300],
            main: red[400],
            dark: red[600],
            contrastText: '#fff',
        }
        
    }
});

export default theme;