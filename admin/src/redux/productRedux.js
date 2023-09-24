import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
	name: "product",
	initialState: {
		products: [],
		isFetching: false,
		error: false
	},
	reducers: {
		// GET ALL
		getProductStart: (state) => {
			state.isFetching = true;
			state.error = false;
		},
		getProductSuccess: (state, action) => {
			state.products = action.payload;
			state.isFetching = true;
			state.error = false;
		},
		getProductFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
		// DELETE
		deleteProductStart: (state) => {
			state.isFetching = true;
			state.error = false;
		},
		deleteProductSuccess: (state, action) => {
			state.products.splice(
				state.products.findIndex(item => item._id === action.payload),
				1
			)
			state.isFetching = true;
			state.error = false;
		},
		deleteProductFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
		// Update 
		updateProductStart: (state) => {
			state.isFetching = true;
			state.error = false;
		},
		updateProductSuccess: (state, action) => {
			state.products[state.products.findIndex((item) => item._id === action.payload)
			] = action.payload.product;
			state.isFetching = false;
			state.error = false;
		},
		updateProductFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
		// Add 
		addProductStart: (state) => {
			state.isFetching = true;
			state.error = false;
		},
		addProductSuccess: (state, action) => {
			state.products.push(action.payload); 
			state.isFetching = true;
			state.error = false;
		},
		addProductFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		}
	}
});

export const { getProductStart, getProductFailure, getProductSuccess,
	deleteProductStart, deleteProductFailure, deleteProductSuccess,
	updateProductStart, updateProductFailure, updateProductSuccess,
	addProductStart, addProductFailure, addProductSuccess } = productSlice.actions;

export default productSlice.reducer;