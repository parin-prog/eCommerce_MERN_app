import axios from "axios"

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = 
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YTI0NDE3Y2VjMWY2MWMyNmEyN2FjYiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2ODgzNTYwMDYsImV4cCI6MTY4ODYxNTIwNn0.KRryOxUhFtxRmW30Kw6h8f9-7tEmk2UDl3H--5Tk2pI"

export const publicRequest = axios.create({
	baseURL: BASE_URL
})

export const userRequest = axios.create({
	baseURL: BASE_URL,
	header: {token: `Bearer ${TOKEN}`}
})