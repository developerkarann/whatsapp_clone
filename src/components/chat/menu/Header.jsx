import React, { useContext, useState } from 'react'
import { Box } from '@mui/material'
import styled from '@emotion/styled'
// Icons
import ChatIcon from '@mui/icons-material/Chat';


import { AccountContext } from '../../../context/AccountProvider'
// Components
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../drawer/InfoDrawer';

const Container = styled(Box)`
    height: 44px;
    background-color: #ededed;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 22px;
`
const Icons = styled(Box)`
    & > *{
        margin-left: 2px;
        padding: 8px;
        color- #000;
    }
    & :first-child{
        font-size: 22px;
        margin-right: 8px
        margin-top: 2px;
    }
`

export default function Header() {

    const { account } = useContext(AccountContext)

    const [openDrawer, setOpenDrawer] = useState(false)
     console.log(account.picture)
    const toggleDrawer = () => {
        setOpenDrawer(true)
    }
    return (
        <>
            <Container>
                <img onClick={toggleDrawer} style={{ height: '44px', borderRadius: "50%" , cursor: 'pointer' }} src={account.picture} alt="Dp" />
                
                <Icons>
                    <ChatIcon />
                    <HeaderMenu setOpenDrawer={setOpenDrawer}/>
                </Icons>
            </Container>
            <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
        </>
    )
}
