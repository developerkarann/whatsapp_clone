import { Dialog, Box } from '@mui/material'
import React, { useContext } from 'react'
import Menu from './menu/Menu'
import EmotyChat from './chatBox/EmotyChat'
import styled from '@emotion/styled'
import ChatBox from './chatBox/ChatBox'
import { AccountContext } from '../../context/AccountProvider'

//Components

const dialogStyle = {
  height: '96%',
  width: '100%',
  maxWidth: '100%',
  margin: '20px',
  maxHeight: '100%',
  boxShadow: 'none',
  overflow: 'hidden',
  borderRadius: '0',
  
}

const ChatComp = styled(Box)`
   display: flex;
  scroll-margin-top: 25px;

`

const LeftComp = styled(Box)`
   min-width: 450px;
`
const RightComp = styled(Box)`
   min-width: 300%;
   width: 73%;
   height: 98vh;
   border-left: 1px solid rgba(0,0,0,0.14);
`

export default function ChatDialog() {

  const {person} = useContext(AccountContext)

  return (
    <>
      <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true} maxWidth={'md'} >
        <ChatComp >
          <LeftComp>
            <Menu />
          </LeftComp>
          <RightComp>
            {
              Object.keys(person).length ? <ChatBox/> : <EmotyChat/> 
            }
          </RightComp >
        </ChatComp>


      </Dialog>
    </>
  )
}
