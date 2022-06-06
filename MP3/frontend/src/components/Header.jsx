import { AppBar, Button, Toolbar, Typography, Grid, makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from 'react';
import React from 'react';
// import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from "./Avtar"


const useStyles = makeStyles(theme => ({
    // component: {
    //     display: 'flex',
    //     // backgroundColor: '#f5f5f5',
    //     color: '#000',
    //     padding: '0px',
    //     margin: '0px',
    //     boxShadow: '0 2px 3px -1px rgba(0, 0, 0, 0.5)',
    //     position: 'fixed',
    //     top: '0px',
    //     left: '0px',
    //     width: '100%',
    //     zIndex: '100',
    // },
    items: {
        display: 'flex',
        cursor: 'pointer',
        alignItems: 'center',

        position: "relative",
        // margin: theme.spacing(2),
        '& > *': {
            margin: theme.spacing(2),
            justifyContent: 'flex-end',
        }

    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    }




}));


function Header({ text1, text2, text3, text4, btn1, btn2, avt }) {
    // const [open, setOpen] = React.useState(false);
    // const handleDrawerOpen = () => {
    //     setOpen(true);
    // };
    const [user, setLoginUser] = useState({})
    const classes = useStyles();
    // const [isOpen, setIsopen] = useState(false);


    return (
        <Grid>

            <CssBaseline />
            <AppBar
                position="fixed"

            >
                <Toolbar className={classes.toolbar}>
                    <Grid >
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            // onClick={handleDrawerOpen}
                            edge="start"
                        // className={clsx(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Grid>

                    <Grid className={classes.items}>
                        <Typography variant="h6">
                            {text1}
                        </Typography>
                        <Typography variant="h6">
                            {text2}
                        </Typography>
                        <Typography variant="h6">
                            {text3}
                        </Typography>
                        <Typography variant="h6">
                            {text4}
                        </Typography>

                        {/* {user && user._id ? <Avatar img={require("./Images/MyImg.jpg")} /> : <><Button style={{ color: "white" }} size="medium" color="error" variant="outlined">{btn1}</Button><Button style={{ color: "white" }} size="medium" color="error" variant="outlined">{btn2}</Button></>} */}
                    </Grid>
                </Toolbar>
            </AppBar>
        </Grid>

    );
}

export default Header;