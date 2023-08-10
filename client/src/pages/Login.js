import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { mobile } from '../responsive'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/apiCalls'
import { Link, useNavigate } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ),
      url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
        center;
    background-size: cover;
`
const Wrapper = styled.div`
    width: 30%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: "80%" })};
`
const Title = styled.h1`
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    margin: 10px 0;
    padding: 15px;
    min-width: 40%;
`
const Button = styled.div`
    padding: 1.2rem;
    width: 20%;
    text-align: center;
    margin-bottom: 10px;
    border: 1px solid teal;
    background-color: teal;
    color: white;
    cursor: pointer;
    &:disabled{
        color: green;
        cursor: not-allowed;
    }
`
const StyledHomeIcon = styled(HomeIcon, {
    name: "StyledHomeIcon",
    slot: "Wrapper"
  })({
    color: "gray",
    "&:hover": { color: "teal" }
  });
const NLink = styled(Link)`
    margin: 15px 0;
    font-size: 12px;
    color: black;
    text-decoration: underline;
    cursor: pointer;
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    &:hover{

    }
`

const Error = styled.span`
    color: red;
    margin: 10px 0;
`

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, currentUser, error } = useSelector((state)=>state.user);
    const navigate = useNavigate();

    const handleLogin = async(e)=>{
        e.preventDefault();
        await login(dispatch, {username, password});
    }

    useEffect(() => {
        if(currentUser){
            navigate('/');
        }
    }, [currentUser, navigate])
    


  return (
    <>
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="Username" onChange={(e)=>setUsername(e.target.value)} />
                <Input type='password' placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                {error && <Error>Something went wrong.....!</Error>}
                <Button onClick={handleLogin} disabled={isFetching}>LOGIN</Button>
                <NLink>DON'T YOU REMEMBER THE PASSWORD?</NLink>
                <NLink to="/register" >CREATE A NEW ACCOUNT</NLink>
                <NLink to="/" style={{marginTop:"2rem",justifyContent:"flex-end"}}>
                Go back to home ---&gt;&gt;&nbsp;&nbsp;&nbsp;
                <StyledHomeIcon fontSize='large' /></NLink>
            </Form>
        </Wrapper>
    </Container>
                </>
  )
}

export default Login