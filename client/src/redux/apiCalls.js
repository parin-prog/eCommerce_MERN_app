import { publicRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

export const login = async (dispatch, user)=>{
	dispatch(loginStart());
	try {
		const res = await publicRequest.post("/auth/login", user);
		dispatch(loginSuccess(res.data));
	}catch(err) {
		dispatch(loginFailure());
	}
}

export const register = async (dispatch, user)=>{
	dispatch(loginStart());
	try {
		const {username, password} = user;
		const res = await publicRequest.post("/auth/register", user);
		const res2 = await publicRequest.post("/auth/login", {username, password})
		dispatch(loginSuccess(res2.data));
	}catch(err) {
		dispatch(loginFailure());
	}
}