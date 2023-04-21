import React, { useState} from 'react';
import styled from 'styled-components';
import { AiOutlineUser} from 'react-icons/ai'
import {BiCart, BiMenuAltRight, BiMailSend, BiSearchAlt2} from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom';
import SideNav from './sideNav';
import { useSelector, useDispatch } from 'react-redux';
import Private from './privateRoute';
// import AuthContext from '../Home/GSTATE/AuthProvider';
import {logout, Total} from '../Home/GSTATE/gstate';
// import { set } from 'immer/dist/internal';


const Header = () => {
    const [nav, setNav] = useState(false);
    const userData = useSelector((state) => state.myuser);
    // const cartData = useSelector((state) => state.cart);
    // const Item = useSelector((state) => state.reducer.Total);
    const dispatch = useDispatch();
    const navigate = useNavigate();

  return (
      <>
        <Container>
       <Wrapper2>
                <Holder>
                <Select2>
                    <option value="Currency">currency:USD</option>
                    <option value="Currency"> currency:Euro</option>
                    <option value="Currency">currency:Naira</option>
                    <option value="Currency">currency:Pounds</option>
                    <option value="Currency">currency:Cedis</option>
                </Select2>
                <div></div>
                <Select2>
                    <option value="language">language:English</option>
                    <option value="language"> language:French</option>
                    <option value="language">language:Deutsch</option>
                    <option value="language">language:Pidgin</option>
                    <option value="language">language:Latin</option>
                </Select2>
                </Holder>
            <LogoDiv>
                <Logo src='cart.svg' alt=''/>
                <h1>Mux_Fragrance</h1>
            </LogoDiv>
            <EndNav>
            {/* <Search>search</Search> */}

            {/* <AccountDiv>
            {userData ? (<Private> 
                <div src={userData?.username[0]} alt="N"></div>
            </Private>) : <Account>
            </Account>}
            </AccountDiv> */}
            <AccountDiv>
            {userData? (<Private> 
                <LogoutButton onClick={() =>{
                    dispatch(logout);
                    navigate('/')
                }}>LOGOUT </LogoutButton>
            </Private>) : (<Login to='/signin'> login <Account>
            </Account></Login>)
           }
            </AccountDiv>
            <CartHold to='/cart'>
                <CartVal><Cart></Cart>0</CartVal>
                {/* {
                    data? (<CartVal>{new Set(this.cart[0])?.(Math.ceil(Total))}</CartVal>) : ( <Cart >
                        </Cart>)
                } */}
            </CartHold>
            <Notification></Notification>
            </EndNav>
        </Wrapper2>

        <LineDiv></LineDiv>
           {userData ? (<Private>
            <Wrapper>
            <NavHold>
                <MidNav>
                    <Span to='/home'>Home</Span>
                    <Span to='/new'>New Collection</Span>
                    <Span to='/men'>Men </Span>
                    <Span to='/women'>Women </Span>
                    <Span to='/child'>Children</Span>
                    <Span to='/home'>About</Span>
                </MidNav>
            </NavHold>
               <SearchBar>
                <Select>
                    <option value="All Categories">all categories</option>
                    <option value="New Trend">New Trend</option>
                    <option value="Men">Men</option>
                    <option value="444Women">Women</option>
                    <option value="Children">Children</option>
                </Select>
                <div></div>
                <input type='text' placeholder='search'/>
                <SearchButton>
                    <BiSearchAlt2 style={{
                        width: "20px",
                        height: "20px",
                    }}/>
                </SearchButton>
                </SearchBar>
                <MenuHold  onClick={() =>{
                    setNav(true);
                }}> 
                <Menu />
                </MenuHold>
        </Wrapper>
           </Private>) : (<div style={{backgroundColor: "yellow"}}>Hello</div>)}
    </Container>
        {
             nav? (<NavDiv ><SideNav setNav={setNav}/></NavDiv>) : null
         }
      </>
  
  )
}

export default Header;

const NavDiv = styled.div`
    position: fixed;
    height: 50vh;
    width: 90%;
    /* background-color: red; */
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 100px;
    top: 200px;
`;
const MenuHold = styled.button`
border: none;
background: none;
overflow-x: hidden;
transition: 0.5s;

`;
const SearchButton = styled.button`
    width: 60px;
    padding: 10px 20px;
    background-color: #003C58;
    border: none;
    color: white;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    :hover{
        cursor: pointer;
        transition: all 350ms;
        opacity: 85%;
    }
`;

const Select2 = styled.select`
  padding: 10px 14px;
  border: none;
  /* border: 1px solid grey; */
  outline: none;
  background: transparent;
  font-weight: bold;

  option{
        background: transparent;
    }
  @media Screen and (max-width: 768px){
    /* display: none; */

  }`;

const Holder = styled.div`
    width: 25%;
    background-color: white;
    opacity: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;

    

    div{
        width: 1px;
        height: 25px;
        background-color: #003C58;
    }

    @media Screen and (max-width: 768px){
        width: 90%;
        flex-direction: column;
        justify-content: center;
        margin: 20px;

        div{
            width: 100%;
            height: 1px;
        }
    }
`;
const SearchBar = styled.div`
    width: 30%;
    background-color: white;
    opacity: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;

    input{
        border: none;
        /* width: 100%; */
        outline: none;

    }
    div{
        width: 1px;
        height: 25px;
        background-color: #003C58;
    }

    @media Screen and (max-width: 768px){
        width: 60%;

        div{
            display: none;
        }

        input{
        /* background-color: red; */
        padding: 0px 10px;
        width: 100%
        }
    }
`;
const Select = styled.select`
  padding: 10px 20px;
  border: none;
  /* border: 1px solid grey; */
  outline: none;
  font-weight: bold;


  @media Screen and (max-width: 768px){
    display: none;
  }`;

const LineDiv = styled.div`
        width: 100%;
        height: 1px;
        background-color: #003C58;
`;

const Container = styled.div`
    width: 100%;
    height: auto;
    /* background: linear-gradient(#BBDEFB, #42A5F5); */
    background: linear-gradient(#FFFFFF, #c4dcf2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #003C58;
    font-weight: 500;
    position: fixed;
    top: 0;
    z-index:111;
    /* margin-top: 0%; */

`;
const Wrapper = styled.div`
    width: 90%;
    height: 100%;
    /* background-color: red; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px;

    @media Screen and (max-width: 768px){
        width: 90%;
    }
    /* background-color: white; */
`;
const NavHold = styled.div`
    width: 70%;
    /* background-color: white; */
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media Screen and (max-width: 768px){
        display: none;
    }
`;
const LogoDiv = styled.div`
    /* width: 55%; */
    /* background-color: white; */
    display: flex;
    justify-content: center;
    align-items: center;

    :hover{
        cursor: pointer;
        transition: all 400ms;
    }

    @media Screen and (max-width: 768px){
        width: 100%;
        justify-content: center;
    }
`;
const Logo = styled.img`
    width: 40px;
    height: 40px;
`;
const MidNav = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;

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
const EndNav = styled.div`
    width: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    

    @media Screen and (max-width: 768px){
        display: none;
    }
    
`;
const CartHold = styled(Link)`
    width: 50px;
    height: 50px;
    text-decoration: none;
    /* background-color: red; */
    display: flex;
    justify-content: center;
    align-items: center;
    color: #003C58;
    font-weight: bold;
`;
const Cart = styled(BiCart)`
    width: 30px;
    height: 30px;
    color: #003C58;
    :hover{
        cursor: pointer;
        transition: all 400ms;
    }
`;
const CartVal = styled.div``;
// const Search = styled(AiOutlineSearch)`
//     width: 30px;
//     height: 30px;
//     color: #003C58;
// `;
const Account = styled(AiOutlineUser)`
    width: 30px;
    height: 30px;
    color: #003C58;
`;
const Login = styled(Link)``;
const AccountDiv = styled.div`
    width: 40px;
    height: 40px;
    color: red;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LogoutButton = styled.button`
border: none;
background: none;
width: auto;
color: #003C58;
font-weight: 600;
cursor: pointer;
`;
const Notification = styled(BiMailSend)`

    width: 30px;
    height: 30px;
    color: #003C58;
`;

const Menu = styled(BiMenuAltRight)`
    width: 40px;
    height: 40px;
    display: none;

    @media Screen and (max-width: 768px){
    display: block;
    :hover{
      cursor: pointer;
      transition: all
    }
    }
`;

const Wrapper2 = styled.div`
    width: 90%;
    /* background-color: red; */
    /* height: auto; */
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media Screen and (max-width: 768px){
        flex-direction: column;
        justify-content: center;
        width: 100%;
    }
`;

//drop down of register, login, forget password onclick of the profile icon;

// swal("Good job!", "You clicked the button!", "success")