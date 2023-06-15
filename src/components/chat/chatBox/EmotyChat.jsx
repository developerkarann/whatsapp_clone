import React from 'react'
import { Box, Typography } from '@mui/material'
import { emptyChatImage } from '../../../constants/data'
import styled from '@emotion/styled'

const Container = styled(Box)`
    background: #f8f9fa;
    padding: 0 0;
    height: 100%;
    // text-align: center;
    display: flex;
    text-align: center;
    `

const ChildContainer = styled(Box)`
    padding: 170px

`

const Title = styled(Typography)`
    font-size: 32px;
    margin: 25px 0 10px 0;
    font-family: inherit;
    font-weight: 300;
    color: #41525d;
`
const SubTitle = styled(Typography)`
    font-size: 14px;
    font-family: inherit;
    font-weight: 400;
    color: #667781;
`

export default function EmotyChat() {
  return (
    <>
      <Container>
        <ChildContainer>
          <img style={{ width: '400px' }} src={emptyChatImage} alt="" />
          <Title >WhatsApp Web</Title >
          <SubTitle>Now send and receive messages without keeping your phone online</SubTitle>
          <SubTitle>Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</SubTitle>
        </ChildContainer>
      </Container>
    </>
  )
}
