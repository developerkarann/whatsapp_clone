import React, { useContext, useEffect, useState } from 'react'
import { getUser } from '../../../service/api'
import { Box, Divider } from '@mui/material'
import SingleConversation from './SingleConversation'
import { AccountContext } from '../../../context/AccountProvider';
import styled from '@emotion/styled';


const  Container = styled(Box)`
  height: 81vh;
  overflow: overlay;
`


export default function Conversations({text}) {

  const [users, setUsers] = useState([])

 

  const {account, socket, setActiveUsers} = useContext(AccountContext)

  const fetchData = async () => {
    const resposne = await getUser()
    const filterData = resposne.filter(user => user.name.toLowerCase().includes(text.toLowerCase()))
    setUsers(filterData)
  }
  useEffect(() => {
    fetchData()
  }, [text])

  useEffect(() => {
      socket.current.emit('addusers', account);
      socket.current.on('getUsers', users =>{
        setActiveUsers(users)
      });
  }, [account])
  

  const StyleDivider = styled(Divider)`
  margin: 0 0 0 17px;
  color: #e9edef;
  opacity: .6;
`

  return (
    <>
      <Container>
    
        {
          users.map((user)=>{
            return(
              user.sub !== account.sub &&
              <> 
              <SingleConversation user={user}/>
              <StyleDivider/>
              </>
            )
          })
        }

      </Container>

    </>
  )
}
