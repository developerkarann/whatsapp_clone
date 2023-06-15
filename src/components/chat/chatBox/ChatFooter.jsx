import React, { useEffect } from 'react'
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';
import { Box, InputBase } from '@mui/material';
import styled from '@emotion/styled';
import { UploadFile } from '../../../service/api';

const Container = styled(Box)`
  height: 36px;
  background: #ededed;
  display: flex;
  width: 100%
  align-items: center;
  padding: 2px 15px;
  & > *{
    margin: 5px;
    color: #919191
  }
 `
const Search = styled(Box)`
   background-color: #fff;
   border-radius: 5px;
   width: calc(21% - 100px);
   width: 100%;
 `
const InputFeild = styled(InputBase)`
   width: 100%;
  //  height: 20px;
   padding-left: 25px;
   font-size: 13px;
 `

export default function ChatFooter({ sendText, setValue, value , file , setFile, setImage}) {


const onFileChange = (e)=>{
   console.log(e)
   setFile(e.target.files[0])
   setValue(e.target.files[0].name)
}

useEffect(() => {
  const setFile = async() =>{
    if (file) {
      const data = new FormData();
      data.append('name',file.name);
      data.append('file',file);
      let response = await UploadFile(data)  
      setImage(response.data)
    }
  }
  setFile()
}, [file])


  return (
    <>
      <Container >
        <EmojiEmotionsOutlinedIcon />
        <label htmlFor="fileInput">
          <AttachFileIcon />
        </label>
        <input type="file" id='fileInput' style={{ display: 'none' }} onChange={(e)=> onFileChange(e)}/>
        <Search >
          <InputFeild placeholder='Type a message'
            onChange={(e) => setValue(e.target.value)}
            onKeyPress={(e) => sendText(e)}
            value={value} />
        </Search >
        <MicIcon />
      </Container>
    </>
  )
}
