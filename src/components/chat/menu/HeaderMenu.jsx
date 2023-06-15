import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function HeaderMenu({setOpenDrawer}) {

    const [open, setopen] = useState(null)

    const handleClick = (event) => {
        setopen(event.currentTarget)
      };


    const handleClose = () => {
        setopen(null);
      };

    return (
        <>
            <MoreVertIcon onClick={handleClick} />
            <Menu
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                keepMounted
                anchorEl={open}
            >
                <MenuItem style={{fontSize: '14px', padding: "15px 60px 5px 24px", color: "#4A4A4A"}} onClick={()=> {handleClose(); setOpenDrawer(true);}}>Profile</MenuItem>
                <MenuItem style={{fontSize: '14px', padding: "15px 60px 5px 24px", color: "#4A4A4A"}} onClick={handleClose}>My account</MenuItem>
                <MenuItem style={{fontSize: '14px', padding: "15px 60px 5px 24px", color: "#4A4A4A"}} onClick={handleClose}>Logout</MenuItem>
            </Menu>

        </>
    )
}
