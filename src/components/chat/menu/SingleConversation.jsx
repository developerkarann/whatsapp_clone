import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { AccountContext } from '../../../context/AccountProvider'
import { getConversation, setConversation } from '../../../service/api'
import { useEffect } from 'react'
import { formateDate } from '../../../utils/CommonUtils'
const Container = styled(Box)`
   display: flex;
  //  height: 450px;
   padding: 13px 0;
   width: 100%;
   cursor: pointer;
   
`

const Timestamp = styled(Typography)`
   font-size: 12px;
   color: #00000099;
   display: flex;
   position: absolute;
   left: 25rem;
   
`
const Text = styled(Typography)`
   font-size: 14px;
   color: rgba(0,0,0,0.6);
`

export default function SingleConversation({ user }) {

  const { setPerson } = useContext(AccountContext)
  const { account, newMessageFlag, setNewMessageFlag } = useContext(AccountContext)

  const [latestMessage, setLatestMessage] = useState({})

  const getCHat = async () => {
    setPerson(user)
    await setConversation({ senderId: account.sub, receiverId: user.sub })
  }

  // Showing last message in users list
  useEffect(() => {
    const getConversationDetail = async () => {
      const latestData = await getConversation({ senderId: account.sub, receiverId: user.sub })
      setLatestMessage({ text: latestData?.message, timestamp: latestData?.updatedAt })
    }
    getConversationDetail()
  }, [newMessageFlag])

  return (
    <>
      <Container onClick={getCHat}>
        <Box>
          <img src={user.picture} style={{ width: '50px', borderRadius: '50%', padding: '0 14px' }} alt="" />
        </Box>
        <Box>
          <Typography>{user.name}</Typography>
          <Text>
            {
              latestMessage?.text?.includes('localhost') ? 'media' : latestMessage.text
            }
          </Text>

        </Box>
        <Box >
          <Typography>
            {
              latestMessage?.text &&
              <Timestamp >{formateDate(latestMessage?.timestamp)}</Timestamp>
            }
          </Typography>
        </Box>

      </Container>
    </>
  )
}
