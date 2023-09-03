import axios from "axios"

const BASE_URL = process.env.REACT_APP_BASE_URL;
const jsonString = localStorage.getItem("persist:root") ?? '{}';
const user = JSON.parse(JSON.parse(jsonString)?.user ?? '{}') ?? {};
const accessToken = user.currentUser?.accessToken ?? '';

export const publicRequest = axios.create({
	baseURL: BASE_URL
})

export const userRequest = axios.create({
	baseURL: BASE_URL,
	headers: {token: `Bearer ${accessToken}`}
})

export const adminRequest = axios.create({
	baseURL: process.env.REACT_APP_ADMIN_URL,
	headers: {token: `Bearer ${accessToken}`}
})