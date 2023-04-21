import React, { useState } from 'react';
import styled from 'styled-components';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import MoonLoader from "react-spinners/ScaleLoader";
import MoonLoader from "react-spinners/BarLoader";
import swal from "sweetalert";
import ReactTypingEffect from 'react-typing-effect'



const Register = () => {

  let [loading, setLoading] = useState(false);

  const loadChange = () => {
    setLoading(true);
  };
  console.log(loading);


  const navigator = useNavigate();

  const yupSchema = yup.object().shape({
    username: yup.string().required("This field must not be empty"),
    email: yup.string().required("This field must not be empty"),
    contact: yup.string().required("This field must not be empty"),
    address: yup.string().required("This field must not be empty"),
    password: yup.string().required("This field must not be empty"),
    confirm: yup.string().oneOf([yup.ref("password"), null], "Password does not match")
  });

  const {
    handleSubmit,
    reset,
    register,
    formState: {errors},
  } = useForm({resolver: yupResolver(yupSchema) });

  const onSubmit = handleSubmit(async (val) =>{
    const {username, email, password, contact, address} = val;


    const localURL = "http://localhost:2204";
    // const mainURL = ""

    const url = `${localURL}/api/user/register`;

    await axios.post(url,  {username, email, password, contact, address}).then((res) =>{
      console.log("Data:", res.data)
    })
    .then((response) =>{
      // setLoading(false);
    swal({
      title: `Welcome ${username}`,
      text: "You just signed up with MUX_FRAGRANCE., Proceed to your email for verification to further Sign In",
      icon: "success",
      button: "Verify and Sign In Now",
    });
		navigator('/signin')
    })
    


    .catch((error) =>{
      swal({
        title: `An Error Occured`,
        text: "Check your filled informtions again",
        icon: "error",
      });

      setLoading(false)
    })
  })

  return (
    <Container>
        {loading ? (
                <Div className="sweet-loading">
                  <MoonLoader color='white' speedMultiplier={2} loading={loading} size={60} />
                </Div>
              ) : null}
        <Wrapper>
            <LogoDiv>
              <Logo  src='/cart.svg'/>
              <h2>Register With Mux_Fragrance</h2>
            </LogoDiv>
            <FormHold onSubmit={onSubmit} type='application/json'>
              <InputHold>
              <legend>UserName: </legend>
              <Input placeholder='e.g: Cynthia Dera' type='text'  {...register("username") }/>
            <Error>{errors?.username?.message}</Error>
              </InputHold>
              <InputHold>
              <legend>Email: </legend>
              <Input placeholder='e.g: cynthia@me.com' type='email'  {...register("email")}/>
            <Error>{errors?.email?.message}</Error>
              </InputHold>
              <InputHold>
              <legend>Contact: </legend>
              <Input placeholder='e.g: 09123456789' type='number'  {...register("contact")}/>
            <Error>{errors?.contact?.message}</Error>
              </InputHold>
              <InputHold>
              <legend>Address: </legend>
              <Input placeholder='e.g: 22 allen avenue, ikeja Lagos' type='text'  {...register("address")}/>
            <Error>{errors?.address?.message}</Error>
              </InputHold>
              <InputHold>
              <legend>Password: </legend>
              <Input placeholder='***************' type='password'  {...register("password")}/>
            <Error>{errors?.password?.message}</Error>
              </InputHold>
              <InputHold>
              <legend>Confirm Password: </legend>
              <Input placeholder='***************' type='password'  {...register("confirm")}/>
            <Error>{errors?.confirm?.message}</Error>
              </InputHold>
              <Button onClick={loadChange} type='submit'>Sign Up</Button>
              <Below>
              <h4>Already have an account? </h4> 
              <Span to='/signin'> Sign In</Span>
            </Below>
            </FormHold>
        </Wrapper>
    </Container>
  )
}

export default Register;

const Container = styled.div`
  width: 100%;
  height: auto;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 190px;
  font-family: poppins;
  /* margin-top: 200px; */

  @media Screen and (max-width: 768px){
    width: 100%;
  }
`;
const Wrapper = styled.div`
  width: 40%;
  height: auto;
  background-color: white;
  /* border: 1px solid #003C58; */
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
		rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  /* background-color: tomato; */
  margin-bottom: 10px;

  @media Screen and (max-width: 768px){
    width: 90%;
    margin: 100px 0;
    justify-content:center;
  }
`;
const LogoDiv = styled.div`
  width: 95%;
  height: auto;
  /* background-color: red; */
  display: flex;
  justify-content: space-around;
  align-items: center;

  h2{
    color: #003C58;
    font-size: 20px;
    font-weight: bold;
  }

  @media Screen and (max-width: 768px){
    width: 80%;
  }
`;
const Logo = styled.img`
  width: 40px;
  height: 40px;
`;
const Error = styled.div`
color: red;
font-size: 12px;
margin-top: 10px;
display: flex;
justify-content: flex-start;
width: 100%;
font-weight: 500;
`;
const FormHold = styled.form`
  width: 80%;
  /* background-color: orange; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px 0;

  @media Screen and (max-width: 768px){
    width: 100%;
  }

`;
const InputHold = styled.fieldset`
  margin: 10px 0;
  /* background-color: aqua; */
  /* border: 1px solid #003C58; */
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
		rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 5px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 40px;
  border: none;
  /* line-height: 2px; */
  /* align-items: center; */

  legend{
    color: #003C58;
    font-weight: bold;
    font-size: small;
    width: auto;
    height: auto;
    padding: 0 5px;
    border-radius: 3px;
  background: linear-gradient(#FFFFFF, #c4dcf2);

  }

  @media Screen and (max-width: 768px){
    width: 80%;
  }
`;
const Input = styled.input`
  width: 89%;
  /* height: 30px; */
  padding: 5px 10px;
  border: none;
  /* border: 1px solid #003C58; */
  outline: none;
  border-radius: 4px;
  /* background: linear-gradient(#BBDEFB, #42A5F5); */
  /* background: linear-gradient(#FFFFFF, #c4dcf2); */
  @media Screen and (max-width: 768px){
    width: 85%;
  }
`;
const Button = styled.button`
  width: 87%;
  height: 30px;
  /* background-color: #d67a5e; */
  border: none;
  /* background: linear-gradient(#BBDEFB, #42A5F5, #90CAF9); */
  background: linear-gradient(#FFFFF9, #C6DDF2);
  /* border: 1px solid #d67a5e; */
  /* border: 1px solid #003C58; */
  /* color: white; */
  padding: 20px 0;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: medium;
  font-weight: bold;
  margin: 30px 0 0 0;
  color: #003c58;
  cursor: pointer;

  :hover{
    opacity: 80%;
    transition: all 400ms;
  }
`;

const Below = styled.div`
  width: 65%;
  /* background-color: red; */
  display: flex;
  /* flex-direction: column; */
  justify-content: space-evenly;
  align-items: center;
  /* margin: 20px; */

  h4{
    color: #003C58;
    font-weight: bold;
    font-size: 15px;
  }

  @media Screen and (max-width: 768px){
    width: 85%;
    justify-content: center;
  }
`;


const Span = styled(Link)`

  font-size: 15px;
  cursor: pointer;
  text-decoration: none;
  /* color: red; */
  color: #003C58;
  font-weight: bold;

  :hover{
    /* opacity: 80%; */
    transition: all 400ms;
  }

  @media Screen and (max-width: 768px){
    font-size: 18px;
  }
`;

const Div = styled.div`
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 10;
`;