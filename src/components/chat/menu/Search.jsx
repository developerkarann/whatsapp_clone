import { Box } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';
import styled from '@emotion/styled';


const Container = styled(Box)`
   background-color: #fff;
   height: 45px;
   border-bottom: 1px solid #f2f2f2;
   display: flex;
   align-items: center;
`
const Wrapper = styled(Box)`
   background-color: #f0f2f5;
   position: relative;
   margin: 0 13px ;
   display: flex;
   width: 100%;
   border-radius: 10px;
`

const Icon = styled(Box)`
   position: absolute;
   height: 100%;
   padding: 7px 8px;
   color: #919191
`
const InputField = styled(InputBase)`
width: 100%;
height: 15px;
padding: 16px;
padding-left: 65px;

`
export default function Search({setText}) {
    return (
        <>
            <Container>
                <Wrapper>
                    <Icon  >
                        <SearchIcon fontSize='small' />
                    </Icon >
                    < InputField placeholder='Search or start new chat' onChange={(e)=> setText(e.target.value)} />
                </Wrapper>
            </Container>
        </>
    )
}
