import React from "react";
import styled from "styled-components";
import {FaTimes} from "react-icons/fa"
import {AiOutlineMail, AiOutlineLock} from "react-icons/ai"
import {useNavigate} from "react-router-dom"

const Register = ({setRegister}) =>{

    const navigate = useNavigate()

    return(
        <Container>
            <Wrapper>
                <CancelHold onClick={() =>{
                    setRegister(false);
                }}>
                    <FaTimes/>
                </CancelHold>
                <Registration>Registration</Registration>
                <Data>
                    <InputHold>
                        <AiOutlineMail/>
                        <Input placeholder="Username"/>
                    </InputHold>
                    <InputHold>
                        <AiOutlineMail/>
                        <Input placeholder="Email"/>
                    </InputHold>
                    <InputHold>
                        <AiOutlineLock/>
                        <Input type="password" placeholder="password"/>
                    </InputHold>
                    <InputHold>
                        <AiOutlineMail/>
                        <Input placeholder="Phone Number"/>
                    </InputHold>
                    <ResetPassword onClick={()=>{
                        navigate("/account-recovery");
                        // setSignin(false);
                    }}>Forget Password?</ResetPassword>
                    <Button>Login to your account</Button>
                    <Text>Don't have an account? <span style={{color: "rgb(247, 120, 0)"}}>Create an account</span></Text>
                </Data>
            {/* <button onClick={() =>{
                setModal(false);
            }}>Modal</button> */}
            </Wrapper>
        </Container>
    )
};

export default Register;

const Container = styled.div`
width: 30%;
height: 70%;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
position: relative;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
margin-top: 100px;

@media Screen and (max-width: 768px){
    width: 70%;
    padding: 10px 0;
    height: 70%;


}
@media Screen and (max-width: 525px){
    width: 90%;
    height: 80%;
}
`;

const Wrapper = styled.div`
width: 95%;
height: 95%;
/* background-color: red; */
position: absolute;
display: flex;
flex-direction: column;
align-items: center;
`;

const CancelHold = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
color: rgb(80, 2, 132);
font-size: 30px;
font-weight: 500;
cursor: pointer;
`;

const Registration = styled.div`
width: 95%;
display: flex;
justify-content: center;
font-size: 25px;
color: #424242;
font-weight: 400;

`;

const Data = styled.div`
width: 90%;
height: 80%;
display: flex;
flex-direction: column;
margin-top: 20px;
/* background-color: green; */
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
width: 90%;
border: none;
outline: none;


::placeholder{
    color: #424242;

}


`;
const ResetPassword = styled.div`
width: 100%;
display :flex;
justify-content: flex-end;
align-items: center;
color: rgb(80, 2, 132);
cursor: pointer;
font-weight: 500;
font-size: 15px;
text-decoration: none;
/* background-color: blue; */

`;
const Text = styled.div`
font-family: monospace;
text-align: center;
letter-spacing: 0.1px;
cursor: pointer;
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


