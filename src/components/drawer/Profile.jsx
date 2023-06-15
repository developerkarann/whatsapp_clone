import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { AccountContext } from '../../context/AccountProvider'
import styled from '@emotion/styled'

const ImgContainer = styled(Box)`
display: flex;
justify-content: center;
`
const Details = styled(Box)`
   background: #fff;
   padding: 12px 30px 2px;
   box-shadow: 0 1px 3px rgba(0,0,0,0.08);
   & > :first-of-type {
    font-size: 13px;
    color: #409688;
    font-weight: 600;
   }
    & :last-child {
      margin: 14px 0;
      color: #4A4A4A;
    }

`

const DescCont = styled(Box)`
  padding: 15px 20px 28px 30px;
  font-size: 13px;
  color: #8696a0;
`

export default function Profile() {
  const { account } = useContext(AccountContext)

  return (
    <>
      <ImgContainer><img src={account.picture} alt="" style={{ borderRadius: "50%", width: '130px', padding: '25px 0' }} /></ImgContainer>
      <Details>
        <Typography>Your name</Typography>
        <Typography>{account.name}</Typography>
      </Details>
      <DescCont>
        <Typography>This is not your username or pin. This will be visible to your whatsapp contact.</Typography>
      </DescCont>
      <Details>
        <Typography>About</Typography>
        <Typography>Eat | Sleep | Code | Repeat</Typography>
      </Details>
    </>
  )
}
