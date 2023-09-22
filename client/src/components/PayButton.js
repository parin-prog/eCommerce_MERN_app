import { useSelector } from "react-redux";
import { publicRequest, userRequest } from "../requestMethods";
import styled from "styled-components";

const PayButton = ({ cartItems }) => {
	const Button = styled.button`
	width: 100%;
	padding: 10px;
	background-color: black;
	color: white;
	font-weight: 600;
	z-index: 2;
	`
	const { currentUser } = useSelector((state) => state.user);

	const handleCheckout = async () => {
		const newCartItems = await Promise.all(
			cartItems.map(async (item) => {
			  const res = await fetch(`${process.env.REACT_APP_BASE_URL}products/find/${item._id}`);
			  const product = await res.json();
			  const { title, desc, img } = product;
			  return {
			    ...item,
			    title,
			    desc,
			    img,
			  };
			})
		      );

		await userRequest
			.post(`${process.env.REACT_APP_BASE_URL}checkout/create-checkout-session`, {
				cartItems: newCartItems,
				userId: currentUser._id,
			})
			.then((res) => {
				if (res.data.url) {
					window.location.href = res.data.url;
				}
			})
			.catch((err) => console.log(err.message));
	};

	return (
		<>
			<Button onClick={() => handleCheckout()}>Checkout Now</Button>
		</>
	);
};

export default PayButton;