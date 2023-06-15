import React from 'react'
// Components
import LoginDialog from '../account/LoginDialog'
// Material Ui
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import { Box, styled } from '@mui/material';
//
import { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider';
import ChatDialog from './chat/ChatDialog';

const Components = styled(Box)`
     height: 100vh;
     background-color: #DCDCDC;

`
const LoginHeader = styled(AppBar)`
     height: 220px;
     background-color: #00bfa5;
     box-shadow: none;
`
const Header = styled(AppBar)`
     height: 125px;
     background-color: #00A884;
     box-shadow: none;
`

export default function Messanger() {

    const { account } = useContext(AccountContext)
    return (
        <>
            <Components>
                {
                    account ? <>
                        <Header>
                            <Toolbar>
                            </Toolbar>
                        </Header>
                        <ChatDialog />
                    </>
                        :
                        <>
                            <LoginHeader>
                                <Toolbar>
                                </Toolbar>
                            </LoginHeader>
                            <LoginDialog />
                        </>
                }

            </Components>
        </>
    )
}
