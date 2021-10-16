import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#d11f11',
        },
        secondary: {
            main: green[500],
        },
    },
});