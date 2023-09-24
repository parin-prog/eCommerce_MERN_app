import { publicRequest, userRequest } from "../requestMethods";
import { addProductFailure, addProductStart, addProductSuccess, deleteProductFailure, deleteProductStart, deleteProductSuccess, getProductFailure, getProductStart, getProductSuccess, updateProductFailure, updateProductStart, updateProductSuccess } from "./productRedux";
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

export const getProduct = async (dispatch)=>{
	dispatch(getProductStart());
	try {
		const res = await publicRequest.get("/products");
		dispatch(getProductSuccess(res.data));
	}catch(err) {
		dispatch(getProductFailure());
	}
}

export const deleteProduct = async (id, dispatch)=>{
	dispatch(deleteProductStart());
	try {
		const res = await userRequest.delete(`/products/${id}`);
		dispatch(deleteProductSuccess(res.data));
	}catch(err) {
		dispatch(deleteProductFailure());
	}
}

export const updateProduct = async (id, product, dispatch)=>{
	dispatch(updateProductStart());
	try {
		await userRequest.put(`/products/${id}`);
		dispatch(updateProductSuccess({id, product}));
	}catch(err) {
		dispatch(updateProductFailure());
	}
}

export const addProduct = async (product, dispatch)=>{
	dispatch(addProductStart());
	try {
		const res = await userRequest.post(`/products`, product);
		dispatch(addProductSuccess(res.data));
	}catch(err) {
		dispatch(addProductFailure());
	}
}