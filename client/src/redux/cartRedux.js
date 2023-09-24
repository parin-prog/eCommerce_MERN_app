import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		products: [],
		items: 0,
		total: 0,
		estShipping: 0,
		discount: 0
	},
	reducers: {
		addProduct: (state, action) => {
			const exist = state.products.some((product) => product._id === action.payload._id 
			&& product.color === action.payload.color 
			&& product.size === action.payload.size);   // exist check
			if (exist) {
				const newProducts = state.products.map(obj => {
					if (obj._id === action.payload._id) {
						obj.quantity += action.payload.quantity;
					}
					if (obj.quantity>3 && state.total>500){						// shipping discount
						state.estShipping -=2;
						state.discount -= 4.4;
					}
					return obj;
				});															  // product quantity incr.
				state.products = newProducts;
			} else {
				state.items += 1;
				state.products.push(action.payload);    					 // new product adding
			}
			state.total += action.payload.price * action.payload.quantity;  // increase total price
			state.estShipping = 5.90;									   // other costing
			state.discount = -9.44;									  // other costing
		},
		removeProduct: (state, action) => {
			const newProducts = state.products.map(obj => {
				if (obj._id === action.payload._id) {
					if (obj.quantity > 1) {							// product quantity decr.
						obj.quantity -= action.payload.quantity;
					} else {						  			   // product removed
						return null;
					}
				}
				return obj;
			}).filter(obj => obj !== null);					  // changed array
			state.items = newProducts.length;
			state.products = newProducts;
			state.total -= action.payload.price * action.payload.quantity;
			if (state.items === 0) {						// check items
				state.estShipping = 0;
				state.discount = 0;
			} else {
				state.estShipping = 5.90;							// other costing
				state.discount = -9.44;							   // other costing
			}
		},
		clearCart: (state) => {
			state.items = 0;
			state.products = [];
			state.total = 0;
			state.estShipping = 0;
			state.discount = 0;
		}
	}

});

export const { addProduct, removeProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;