import React, {useState} from 'react';
import styled from 'styled-components';
import { createUser } from '../GSTATE/gstate';
import { Link, useNavigate } from "react-router-dom";
import MoonLoader from "react-spinners/BarLoader";
import {
	AiFillFacebook,
	AiFillTwitterSquare,
	AiFillLinkedin,
	AiFillGoogleCircle,
} from "react-icons/ai";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import axios from "axios";
import { login } from "../../StateManager/globalState";
import { useDispatch } from "react-redux";

const StudentSignIn = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

  let [loading, setLoading] = useState(false);


	const yupSchema = yup.object().shape({
		email: yup.string().email().required("email has to be filled"),
		password: yup.string().required("Please enter your preferred password"),
	});

    const {
		handleSubmit,
		reset,
		register,
		formState: { errors },
	} = useForm({ resolver: yupResolver(yupSchema) });

    const onSubmit = handleSubmit(async (data) =>{
        const { email, password} = data;
    
    
        // const localURL = "http://localhost:2204";
        // const mainURL = ""
        const url = "http://localhost:2204/api/user/signin";
    
        await axios.post(url,  {email, password}).then((res) =>{
          console.log("Data:", res.data)
        dispatch(createUser(res.data.data));
        reset();
            navigate('/home');
    
        setLoading(true);
        swal({
          title: `Welcome ${email}`,
          text: "You are now signed in",
          icon: "success",
          button: "Ok",
        });
        window.location.reload();
        })
        .catch((error) =>{
          swal({
            title: `An Error Occured`,
            text: "Check your filled informations again",
            icon: "error",
          });
    
          setLoading(true)
        })
      });


  return (
    <Container>
    <Wrapper>
        <Brand>
            <Logo to="/">
                <Bar>"M"</Bar>
                <LogoTitle>MUX_FRAGRANCE</LogoTitle>
            </Logo>

            <Text>
                Access to Quality Fragrance
            </Text>
            <Brief>
                Search all the open positions on the web. Get your own brand of mux_fragance. Read reviews on over 2 million customers worldwide.
                <br />
                Search all the open positions on the web. Get your own brand of mux_fragance. Read reviews on over 2 million customers worldwide.
            </Brief>
        </Brand>

        <Line />
        <MainCard onSubmit={onSubmit}>
            <LogoTitle1>User Sign In</LogoTitle1>
            <Hold>
            </Hold>
            <Name>
                <InputTitle>Email</InputTitle>
                <Input
                    placeholder="e.g: fullname1@gmail.com"
                    {...register("email")}
                />
            </Name>
            <Error>{errors?.email?.message}</Error>
            <Name>
                <InputTitle>Password</InputTitle>
                <Input
                    placeholder="************"
                    type="password"
                    {...register("password")}
                />
            </Name>
            <Error>{errors?.password?.message}</Error>
            <Button type="submit">Continue</Button>
            <Info>
                <SocialText>
                    {/* Don't Have an Account? <Span to="/">Register</Span> */}
                </SocialText>
                <SocialText>
                    <Span to="/">Forgot Pasword?</Span>
                </SocialText>
            </Info>

            <Social>
                <SocialText>Use Social Media</SocialText>
                <Icons>
                    <Icon />
                    <Icon1 />
                    <Icon2 />
                    <Icon3 />
                </Icons>
            </Social>
        </MainCard>
    </Wrapper>
</Container>
);
};

export default StudentSignIn;

const Error1 = styled.div`
color: red;
font-size: 12px;
margin-bottom: 10px;
text-align: center;
font-weight: 500;
`;
const PhoneData = styled.div`
width: 100%;
`;

const Error = styled.div`
color: red;
font-size: 12px;
margin-top: 3px;
display: flex;
justify-content: flex-start;
width: 100%;
font-weight: 500;
`;

const Icon = styled(AiFillGoogleCircle)`
font-size: 35px;
color: red;
:hover {
cursor: pointer;
}
`;

const Info = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
`;

const Span = styled(Link)`
margin: 0 5px;
color: #003C58;
font-weight: 700;
text-decoration: none;
`;
const Icons = styled.div`
display: flex;
margin-top: 20px;
`;

const Icon3 = styled(AiFillLinkedin)`
font-size: 35px;
color: #0077b7;
:hover {
cursor: pointer;
}
`;

const Icon2 = styled(AiFillTwitterSquare)`
font-size: 35px;
color: #50abf1;
:hover {
cursor: pointer;
}
`;

const Icon1 = styled(AiFillFacebook)`
font-size: 35px;
color: #003C58;
:hover {
cursor: pointer;
}
`;

const SocialText = styled.div`
font-size: 12px;
display: flex;
margin-top: 0px;
color: #003C58;
font-weight: bold;
`;

const Social = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 50px;
`;

const Button = styled.button`
outline: none;
border: 0;
font-family: Poppins;
margin-top: 20px;
margin-bottom: 10px;
/* background-color: #742e9d; */
background: linear-gradient(#FFFFFF, #c4dcf2);
height: 45px;
width: 100%;
color: #003C58;
font-size: 13px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;
transition: all 350ms;
font-weight: bold;

:hover {
cursor: pointer;
transform: scale(0.99);
}
`;

const InputTitle = styled.div`
font-size: 13px;
position: absolute;
top: -10px;
left: 7px;
padding: 0 3px;
/* background-color: #f7eff1; */
background: linear-gradient(#FFFFFF, #c4dcf2);
/* background-clip: content-box; */
font-weight: 700;
color: #003C58;
`;

const Input = styled.input`
background-color: transparent;
outline: none;
border: 0;
border-radius: 3px;
width: 99%;
height: 95%;
/* padding-left: 10px; */

::placeholder {
color: lightgray;
font-family: poppins;
}
`;

const Hold = styled.div`
display: flex;
margin: 0 10px;
justify-content: space-between;
width: 100%;
margin: 17px 0;
`;

const Phone1 = styled.div`
width: 100%;
border: 1px solid silver;
border-radius: 5px;
height: 40px;
position: relative;
margin-left: 5px;
`;

const Phone = styled.div`
width: 100%;
border: 1px solid silver;
border-radius: 5px;
height: 40px;
position: relative;
margin-right: 5px;
`;

const Name = styled.div`
width: 100%;
border: 1px solid #003C58;
border-radius: 5px;
height: 40px;
position: relative;
margin: 10px 0;
`;

const MainCard = styled.form`
width: 800px;
flex-direction: column;
display: flex;
align-items: center;
/* background-color: yellow; */
`;

const Line = styled.div`
height: 400px;
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
margin: 0 50px;

@media Screen and (max-width: 768px){
    display: none;
}
`;

const Brief = styled.div`
margin: 50px 0;
color: gray;
font-size: 13px;
text-align: center;
line-height: 20px;
/* background-color: blue; */
`;

const Text = styled.div`
font-weight: 700;
text-align: center;
width: 300px;
font-size: 25px;
line-height: 1.2;
color: #003C58;
/* background-color: olive; */
`;

const Logo = styled(Link)`
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin: 50px 0;
/* background-color: olivedrab; */
`;

const LogoTitle1 = styled.div`
font-weight: 700;
color: #003C58;
margin-bottom: 50px;
font-size: 27px;
/* text-transform: uppercase; */
/* font-family: Pacifico; */
font-family: Poppins;
`;

const LogoTitle = styled.div`
font-weight: 500;
color: #003C58;
`;

const Bar = styled.div`
width: 120px;
height: 120px;
border-radius: 10px;
margin-bottom: 15px;
background-color: #fffbf8;
box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
rgba(17, 17, 26, 0.1) 0px 0px 8px;
display: flex;
justify-content: center;
align-items: center;
font-size: 50px;
font-weight: 900;
color: #003C58;
`;

const Brand = styled.div`
width: 800px;
display: flex;
align-items: center;
flex-direction: column;
/* justify-content: center; */
/* background-color: goldenrod; */
margin: 10px;
line-height: 20px;

@media Screen and (max-width: 768px){
    justify-content: center;
}
`;

const Wrapper = styled.div`
width: 900px;
margin: 70px 0 0 0;
display: flex;
justify-content: space-between;
align-items: center;
/* background-color: orange; */

@media Screen and (max-width: 768px){
    flex-wrap: wrap;
    width: 75%;
    /* flex-direction: column; */
    justify-content: center;
}
`;

const Container = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: center;
align-items: center;
margin-top: 90px;
font-family: poppins;
/* background-color: red; */

@media Screen and (max-width: 768px){
    width: 100%;
    margin-top: 200px;
}
`;