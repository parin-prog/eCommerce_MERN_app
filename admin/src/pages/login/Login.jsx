import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/apiCalls';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");  
	const {currentUser} = useSelector((state)=>state.user);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleClick = (e) => {
		e.preventDefault();
		login(dispatch, { username, password });
	}

	useEffect(() => {
		if (currentUser?.isAdmin===true) {
			window.location = "/";
		}
	}, [currentUser, navigate])

	return (
		<div style={{
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			flexDirection: "column",
			height: "100vh",
			width: "100vw"
		}}>
			<input
				style={{ padding: "10px", marginBottom: "20px", fontSize: "1.5rem" }}
				type="text"
				placeholder="Username"
				onChange={e => setUsername(e.target.value)}
				name="username"
			/>
			<input
				style={{ padding: "10px", marginBottom: "20px", fontSize: "1.5rem" }}
				type="password"
				placeholder="Password"
				onChange={e => setPassword(e.target.value)}
				name="password"
			/>
			<button style={{ padding: "20px", fontSize: "1rem" }} onClick={handleClick}>Login</button>
		</div>
	)
}

export default Login;