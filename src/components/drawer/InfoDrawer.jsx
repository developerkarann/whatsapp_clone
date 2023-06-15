import React from 'react'
import {Drawer, Box, Typography }from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styled from '@emotion/styled';
import Profile from './Profile';

const drawerStyle = {
    left: 20,
    top: 13,
    height: '96%',
    width: '33%',
    boxShadow: 'none',
}


const Header = styled(Box)`
    background: #008069;
    height: 110px;
    color: #fff;
    display: flex;
    & > svg, & > p {
        margin-top: auto;
        padding: 15px;
        font-weight: 600;
    }
`

const Component = styled(Box)`
     background: #ededed;
     height: 83%;

`


export default function InfoDrawer({ open, setOpen }) {

    const handleClose = () => {
        setOpen(false)
    }
    return (
        <>
            <Drawer
                open={open}
                onClose={handleClose}
                PaperProps={{ sx: drawerStyle }}
                style={{ zIndex: 10000 }}
            >
                <Header>
                    <ArrowBackIcon onClick={handleClose} style={{cursor: 'pointer'}} />
                    <Typography>Profile</Typography>
                </Header>
                <Component>
                <Profile/>

                </Component>
            </Drawer>
        </>
    )
}
