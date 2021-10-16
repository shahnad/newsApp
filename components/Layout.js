import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Header from "./Header";
import { theme } from "./Theme";

const useStyles = makeStyles({
    root: {
        background: 'rgb(247,233,233)',
        background: 'linear-gradient(230deg, rgba(247,233,233,1) 0%, rgba(172,6,6,1) 100%)'
    },
});

export default function Layout({ children }) {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <div className={classes.root}>
                <main>{children}</main>
            </div>
        </ThemeProvider>
    )
}