import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React, { useContext, useEffect, useRef, useState } from 'react'
import ChatFooter from '../chatBox/ChatFooter'
import { AccountContext } from '../../../context/AccountProvider'
import { getMessage, newMessage } from '../../../service/api'
import Messages from './Messages'




const Container = styled(Box)`
  background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
  background-size: 15%;
  max-width: 1027px;
`
const Component = styled(Box)`
   height: 82vh;
   overflow-y: scroll;
   
`
const SingleMessage = styled(Box)`
   padding: 5px 40px;
  
`
export default function ChatMainCon({ person, conversation }) {

  const { account, socket, newMessageFlag, setNewMessageFlag } = useContext(AccountContext)

  const [value, setValue] = useState('')
  const [messages, setMessages] = useState('')


  const [file, setFile] = useState()

  const [image, setImage] = useState('')

  const [incomingMessage, setIncomingMessage] = useState('')


  const sendText = async (e) => {
    // console.log(e)
    const code = e.keycode || e.which;
    if (code === 13) {
      let message = {};
      if (!file) {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: 'text',
          text: value
        }
      } else {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: 'file',
          text: image
        }
      }

      socket.current.emit('sendMessage', message)

      //  console.log(message)
      await newMessage(message)
      setValue('')
      setFile('')
      setImage('')
      setNewMessageFlag(prev => !prev)
    }
  }


  useEffect(() => {
    const getMessages = async () => {
      let data = await getMessage(conversation._id)
      //  console.log(data)
      setMessages(data)
    }
    conversation._id && getMessages();
  }, [person._id, conversation._id, newMessageFlag])



  useEffect(() => {
    socket.current.on('getMessage', data => {
      setIncomingMessage({
        ...data,
        createdAt: Date.now()
      })
    })
  }, [])

  useEffect(() => {
    incomingMessage && conversation?.members?.includes(incomingMessage.senderId) &&
      setMessages(prev => [...prev, incomingMessage])
  }, [incomingMessage, conversation])

  // Scroll Bar Logic 

  const ScrollRef = useRef();

  useEffect(() => {
    ScrollRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <>
      <Container>
        <Component>
          <SingleMessage  >
            {
              messages && messages.map(message => {
                return (
                  <div ref={ScrollRef} >
                    <Messages message={message} />
                  </div>
                )
              })
            }
          </SingleMessage>
        </Component>
        <ChatFooter sendText={sendText} setValue={setValue} value={value} file={file} setFile={setFile} setImage={setImage} />
      </Container>
    </>
  )
}
