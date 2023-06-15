import { Box } from '@mui/material'
import React, { useContext, useState } from 'react'
import ChatHeader from './ChatHeader'
import ChatMainCon from './ChatMainCon'
import { AccountContext } from '../../../context/AccountProvider'
import { useEffect } from 'react'
import { getConversation } from '../../../service/api'

export default function ChatBox() {

    const { person, account } = useContext(AccountContext);

    const [conversation, setConversation] = useState({})

    useEffect(() => {
        const getConversationDetail = async () => {
            let data = await getConversation({ senderId: account.sub, receiverId: person.sub })
            //    console.log(data)
            setConversation(data)
        }
        getConversationDetail();
    }, [person.sub])


    return (
        <>
            <Box>
                <ChatHeader person={person} />
                <ChatMainCon person={person} conversation={conversation} />
            </Box>
        </>
    )
}
