import axios from "axios"

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = 
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YTI0NDE3Y2VjMWY2MWMyNmEyN2FjYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODcyMTEzOCwiZXhwIjoxNjg4OTgwMzM4fQ.O1XEB_7MFqz18jtazug8ZpvnWsmxTx1lVCTltrIPoYg"

export const publicRequest = axios.create({
	baseURL: BASE_URL
})

export const userRequest = axios.create({
	baseURL: BASE_URL,
	header: {token: `Bearer ${TOKEN}`}
})