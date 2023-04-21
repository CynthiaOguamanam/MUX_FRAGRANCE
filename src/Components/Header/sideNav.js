import React from 'react';
import styled from 'styled-components';
import {AiOutlineCloseSquare} from 'react-icons/ai';
import {Link} from 'react-router-dom';

const SideNav = ({setNav}) => {
  return (
    <Container>
        <Wrapper>
        <Button  onClick={()=>{
                setNav(false);
            }}  style={{border: "none", background: "none", width: 50, height: 50}}>
            <AiOutlineCloseSquare style={{width: 40, height: 40, color:"#003C58"}}/>
            </Button>
                <MidNav>
                    <Span to='/home'>Home</Span>
                    <Span to='/new'>New Collection</Span>
                    <Span to='/men'>Men </Span>
                    <Span to='/women'>Women </Span>
                    <Span to='/child'>Children</Span>
                    <Span to='/home'>About</Span>
                </MidNav>
        </Wrapper>
    </Container>
  )
}

export default SideNav;

const Button = styled.button`
  width: 200px;
  height: 30px;
  border: none;
  /* background: linear-gradient(#FFFFF9, #C6DDF2); */
  background-color: #C6DDF2;
  padding: 5px o;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: medium;
  font-weight: bold;
  margin: 20px 100px 20px 50px;
  /* margin: 20px 10px 20px 35px; */
  color: #003c58;
  cursor: pointer;

  :hover{
    opacity: 80%;
    transition: all 400ms;
    cursor: pointer;
  }

  @media Screen and (max-width: 768px){
    margin: 15px 5px 15px 0;
  }
`;

const Container = styled.div`
    width: 40%;
    height: 70vh;
    background-color: white;
    opacity: 80%;
    padding-top: 150px;
    border: 2px solid #003C58;

    ::after{
      transition: width ease-in 4s;
    }
`;
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    /* background-color: orange; */
    margin-top: 100px;
`;

const MidNav = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 50px;
    /* align-items: center; */
`;

const Span = styled(Link)`
            /* transition:text-decoration  ease 3s; */
            color: #003C58;
            text-decoration: none;
      :hover{
            cursor: pointer;
            /* color: red; */
            text-decoration: underline #003C58 1.5px;
        }
`;
// const Container = styled. div``;