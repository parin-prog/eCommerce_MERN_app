import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { mobile } from '../responsive'
import { useDispatch, useSelector } from 'react-redux'
import { login, register } from '../redux/apiCalls'
import { loginFailure } from '../redux/userRedux'
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
      url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
        center;
    background-size: cover;
`
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: "80%" })};
`
const Title = styled.h1`
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    margin: 20px 10px 0 0;
    padding: 20px 10px;
    min-width: 40%;
`
const Checkbox = styled.input`
    padding: 10px;
    margin-top: 6px;
    margin-right: 5px;
`
const Agreement = styled.span`
    margin: 20px 0;
`
const Button = styled.div`
    padding: 20px;
    border: 1px solid teal;
    background-color: teal;
    color: white;
    cursor: pointer;
`
const Error = styled.span`
    margin: 0 0 1rem 0;
    color: red;
    font-weight: 600;
    width: 100%;
`
const NLink = styled(Link)`
    margin: 15px 0;
    font-size: 12px;
    color: black;
    text-decoration: underline;
    cursor: pointer;
    margin-bottom: 4px;
    display: flex;
    align-items: center;
`
const StyledHomeIcon = styled(HomeIcon, {
    name: "StyledHomeIcon",
    slot: "Wrapper"
  })({
    color: "gray",
    "&:hover": { color: "teal" }
  });

const Register = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    const [consent, setConsent] = useState(false);
    const [msg, setMsg] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isFetching, error, currentUser } = useSelector(state => state.user);

    const handleClick = async (e) => {
        e.preventDefault();
        const fullname = firstname + " " + lastname;
        if (consent) {
            if (password === cpassword && password && username) {
                await register(dispatch, { fullname, username, email, password });
                await login(dispatch, { username, password });
            } else {
                setMsg("Must agree consent and privacy policy for making further process of registration.");
            }
        }
        else {
            setMsg("Please enter correct information.");
            dispatch(loginFailure());
        }
    }

    const checkHandler = (e) => {
        if (consent === false) {
            setConsent(true);
        } else {
            setConsent(false);
        }
    }

    useEffect(() => {
        if (currentUser) {
            navigate("/");
        }
    }, [currentUser, navigate])


    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="First Name" onChange={(e) => { setFirstname(e.target.value) }} />
                    <Input placeholder="Last Name" onChange={(e) => { setLastname(e.target.value) }} />
                    <Input placeholder="Username" onChange={(e) => { setUsername(e.target.value) }} />
                    <Input placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
                    <Input placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                    <Input placeholder="Confirm Password" onChange={(e) => { setCPassword(e.target.value) }} />
                    <Agreement>
                        <Checkbox type="checkbox" value={consent} onClick={checkHandler} />
                        By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    {error && <Error>&#x1F615; {msg}</Error>}

                    <Button onClick={handleClick} disabled={isFetching}>CREATE</Button>
                </Form>
                    <NLink to="/" style={{ marginTop: "2rem", justifyContent: "flex-end" }}>
                        Go back to home&nbsp;--&gt;&gt;&nbsp;&nbsp;&nbsp;&nbsp;
                        <StyledHomeIcon fontSize='large' /></NLink>
            </Wrapper>
        </Container>
    )
}

export default Register