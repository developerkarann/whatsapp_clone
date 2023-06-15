import React from 'react'
import { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider';

import { Dialog, Box, Typography, List, ListItem, styled } from '@mui/material';
import { qrCodeImage } from '../constants/data';

import { GoogleLogin } from '@react-oauth/google';

import jwt_decode from 'jwt-decode'

import { addUser } from '../service/api';



const Component = styled(Box)`
  display: flex;
`
const Container = styled(Box)`
   padding: 56px 0 56px 56px;
`
const QrCode = styled(`img`)({
  height: 264,
  width: 264,
  margin: '50px 0 0 50px'
})

const Title = styled(Typography)`
  font-size: 26px;
  color: #525252;
  font-family: inherit;
  margin-bottom: 25px;
`
const StyledList = styled(List)`
   & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 18px
   }
`

const dialogStyle = {
  height: '96%',
  marginTop: '12%',
  width: '60%',
  maxWidth: '100%',
  maxHeight: '100%',
  boxShadow: 'none',
  overflow: 'hidden',

}



export default function LoginDialog() {

  const { setAccount } = useContext(AccountContext);

  const LoginSuccess = async(res) => {
    const UserData = jwt_decode(res.credential)
    console.log(UserData)
    setAccount(UserData)
    await addUser(UserData);
  }
  const LoginError = () => {
    console.log("LoginError")
  }

  return (
    <>
      <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
        <Component>
          <Container>
            <Title> To chat on your computer, Login</Title>
            <StyledList>
              <ListItem>1. Click on the google login</ListItem>
              <ListItem>2. Allow to login in your browser</ListItem>
              <ListItem>3. Boom You're ready to chat</ListItem>
            </StyledList>
          </Container>
          <Box>
            <QrCode src={qrCodeImage} alt="" />
            <Box style={{ marginLeft: "52px" }}>
              <GoogleLogin
                onSuccess={LoginSuccess}
                onError={LoginError}
              />
            </Box>
          </Box>
        </Component>
      </Dialog>
    </>
  )
}
