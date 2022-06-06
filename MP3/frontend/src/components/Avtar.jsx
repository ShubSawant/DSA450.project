import React from 'react'
import { Avatar, Grid, Button, Menu, MenuItem,Typography } from '@material-ui/core';

function Avtar({img}) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (

        <Grid>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                style={{borderRadius:"65%"}}
                >

                <Avatar alt="Cindy Baker" src={img} />
            </Button>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                keepMounted
                

                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
            >
                <MenuItem onClick={handleClose}><Typography >Profile</Typography></MenuItem>
            
                <MenuItem onClick={handleClose}><Typography >Logout</Typography></MenuItem>
            </Menu>
        </Grid>

    )
}

export default Avtar