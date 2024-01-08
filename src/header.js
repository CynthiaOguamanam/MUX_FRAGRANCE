import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import styled from "styled-components"
import logo from "../Assets/logo.png"
import { FaTimes, FaBars } from 'react-icons/fa';
import SignIn from "../Auth/SignIn"; 
import Register from "../Auth/Register"; 

const Header = () => {
  const navigate = useNavigate()
  const [toggle, setToggle] = useState(false);
  const [signin, setSignin] = useState(false);
  const [register, setRegister] = useState(false);

  const handleToggle = () =>{
    setToggle(!toggle)
  };

  const setClick=()=>{
    setSignin(!signin);
  }

  const setRegClick = () =>{
    setRegister(!register)
  }


  return (
    <>
    <Container>
        <Wrapper>
            <LogoWrap onClick={() => navigate('/')}>
                <Logo src={logo} alt='logo'/>
                <Title>Hanaka</Title>
            </LogoWrap>
            <NavWrap toggle={toggle}>
                <Span onClick={() =>{
                  setSignin(true);
                }}>Sign In</Span> 
                <div>|</div>
                <Span onClick={() =>{
                  setRegister(true)
                }}> Registration</Span>
            </NavWrap>
            <BurgerWrap onClick={handleToggle}  >
              {toggle? (<FaTimes/>) : (<FaBars/>)}
            </BurgerWrap>
        </Wrapper>
    </Container>
     {toggle? (<MobileNav>
      <Span>Upload</Span>
      <Span>Settings</Span>
      <Span>Logout</Span>
    </MobileNav>): null}

    {signin? (<ModalDiv>
      <SignIn setSignin={setSignin}/>
      </ModalDiv>): null}
    
    {register? (<ModalDiv>
      <Register setRegister={setRegister}/>
    </ModalDiv>): null}
    </>
  )
}

export default Header;

const ModalDiv = styled.div`
width: 100%;
height: 100%;
backdrop-filter: blur(7px);
display: flex;
justify-content: center;
align-items:center;
position: fixed;
top:0;

`;

const MobileNav = styled.div`
position: absolute;
width: 150px;
height: 150px;
background-color: white;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
padding: 5px;
justify-content: space-around;
left: ${({toggle}) => (toggle? 0 : "60%")};
transition: all ease 1s;
z-index: 10;
@media Screen and (max-width: 400px){
left: ${({toggle}) => (toggle? 0 : "50%")};
}
@media Screen and (max-width: 320px){
left: ${({toggle}) => (toggle? 0 : "43%")};
}
`;

const BurgerWrap = styled.div`
display: none;
z-index: 2;
right: 30px;
font-size: 30px;
cursor: pointer;
color: white;

@media Screen and (max-width: 525px){
  display: block;
  position: absolute;

}
`;

const Container = styled.div`
width: 100%;
height: 12vh;
display: flex;
justify-content: center;
align-items: center;
background-color: rgb(147, 2, 225);
box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;
const Wrapper = styled.div`
width: 90%;
height: 90%;
display: flex;
justify-content: space-between;
align-items: center;

@media Screen and (max-width: 768px){
  width: 70%;
}
@media Screen and (max-width: 525px){
  width: 70%;
}
`;
const LogoWrap = styled.div`
width: 8%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

;
`;
const Logo = styled.img`
width: 50px;
// height: 100px;
`;
const Title = styled.div`
color: white;
font-size: 20px;
font-family: monospace;
font-weight: bold;
`;
const NavWrap = styled.div`
width: 13%;
height: 100%;
display: flex;
justify-content:  space-between;
align-items: center;
color: white;
font-family: poppins;

@media Screen and (max-width: 1024px){
  width: 20%;
}
@media Screen and (max-width: 768px){
  width: 30%;
}

@media Screen and (max-width: 525px){
  display: none;
}
`;
const Span = styled.div`
font-weight: 500;
cursor: pointer;
font-size: 14px;
`;