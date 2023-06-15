import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { AccountContext } from '../../../context/AccountProvider'
import DownloadIcon from '@mui/icons-material/Download';
import { iconPDF } from '../../../constants/data'
import {downloadMedia} from '../../../utils/CommonUtils'
// import { formateDate } from '../../../utils/CommonUtils'


const Own = styled(Box)`
    background: #dcf8c6;
    max-width: 60%;
    margin-left: auto;
    padding: 5px;
    width: fit-content;
    display: flex;
    border-radius: 7px;
    word-break: break-word;
    margin-bottom: 3px;
`
const Wrapper = styled(Box)`
    background: #fff;
    max-width: 60%;
    padding: 5px;
    width: fit-content;
    display: flex;
    border-radius: 7px;
    word-break: break-word;
    margin-bottom: 3px;
`
const Text = styled(Typography)`
   font-size: 14px;
   padding: 0 20px 0 5px;
`
// const Time = styled(Typography)`
//   font-size: 10px;
//   color: #919191;
//   margin-top: 6px;
//   word-break: keep-all;
//   margin-top: auto
// `
export default function Messages({ message }) {

    const { account } = useContext(AccountContext)

    return (
        <>
            {
                account.sub === message.senderId ?
                    <Own>
                        {
                            message.type === 'file' ? <ImageMsg message={message} /> : <TextMessage message={message} />
                        }

                    </Own>

                    :

                    <Wrapper>
                        {
                            message.type === 'file' ? <ImageMsg message={message} /> : <TextMessage message={message} />
                        }
                        {/* <Time>{ formateDate(message.createdAt) }</Time> */}

                    </Wrapper>
            }

        </>
    )
}

const TextMessage = ({ message }) => {
    return (
        <>
            <Text>{message.text}</Text>
            {/* <Time>{ formateDate(message.createdAt) }</Time> */}
        </>
    )
}

const ImageMsg = ({ message }) => {
    return (
        <>
            <Box>
                {
                    message.text.includes('.pdf') ?
                        <div style={{display: 'flex'}} >
                            <img src={iconPDF} style={{ width: '80px' }} alt="pdf" />
                            <Typography>{message.text.split('/').pop()}</Typography>
                        </div>
                        :
                        <img src={message.text} alt={message.text} style={{ width: '300px', height: '100%' }} />
                }
                <DownloadIcon fontSize='small'
                onClick={(e)=> downloadMedia(e, message.text)}
                 style={{ border: '1px solid grey', borderRadius: '50%', color: 'grey', cursor: 'pointer' }} />
            </Box>
        </>
    )
}