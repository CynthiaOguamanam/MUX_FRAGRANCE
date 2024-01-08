import React from "react";
import { AiFillMail } from "react-icons/ai";
import styled from "styled-components";

const AccountRecovery = () =>{
    return(
        <Container>
            <Wrapper>
                <Title>Account Recovery</Title>
                <Span>Email</Span>
                <InputHold>
                    <AiFillMail/>
                    <Input placeholder="email" />
                </InputHold>
                <Button>Submit</Button>
            </Wrapper>
        </Container>
    )
};

export default AccountRecovery;

const Container = styled.div`
width: 100%;
height: 100vh;
background-color: whitesmoke;
display: flex;
justify-content: center;
align-items: center;
`;
const Wrapper = styled.div`
width: 50%;
height: 45%;
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
padding: 10px 20px;

@media Screen and (max-width: 768px){
    width: 80%;
}
`;
const Title = styled.div`
font-size: 24px;
color: rgb(75, 75, 75);
`;
const InputHold = styled.div`
width: 100%;
height: 40px;
display: flex;
justify-content: space-between;
padding: 5px;
margin: 10px 0;
align-items: center;
border: 1px solid grey;
border-radius: 5px;
`;
const Input = styled.input`
width: 95%;
border: none;
outline: none;

::placeholder{
    color: #424242;

}


`;

const Span = styled.div`
font-family: monospace;
text-align: center;
cursor: pointer;
width: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
font-size: 18px;
color: rgb(75, 75, 75);

`;


const Button = styled.button`
border: none;
width: 100%;
height: 30px;
padding: 25px 10px;
border-radius: 5px;
background-color: rgb(80, 2, 132);
color: white;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
margin: 10px 0;

`;
// const  = styled.div``;