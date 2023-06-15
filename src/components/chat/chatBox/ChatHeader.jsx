import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'

import { Search } from '@mui/icons-material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styled from '@emotion/styled'
import { AccountContext } from '../../../context/AccountProvider';
// import {defaultProfilePicture } from '../../../constants/data'


const Header = styled(Box)`
   height: 28px;
   background: #ededed;
   padding:  16px;
   display: flex;
   align-items: center;
   max-width: 1000px;
   padding-top: 30px;
`
const Name = styled(Typography)`
  margin-left: 12px !important; 
`
const Status = styled(Typography)`
  margin-left: 12px !important;
  font-size: 12px ;
  color: rgb(0,0,0,0.6);
`
const RightContainer = styled(Box)`
   margin-left: auto;
   & > svg{
    padding: 8px;
    font-size: 22px;
    color #000;
    cursor: pointer;
   }
   
`

export default function ChatHeader({ person }) {

    const { activeUsers } = useContext(AccountContext)

    return (
        <>
            <Header>
                <img src={person.picture} style={{ width: '40px', height: '40px', borderRadius: '50%' }} alt="Dp" />
                <Box>
                    <Name>  {person.name}</Name>
                    <Status>
                   {
                    activeUsers?.find(user => user.sub === person.sub) ? 'Online': 'Offline'
                   }
                    </Status>
                </Box>
                <RightContainer>
                    <Search />
                    <MoreVertIcon />
                </RightContainer>

            </Header>
        </>
    )
}
