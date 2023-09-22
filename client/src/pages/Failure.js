import React from 'react'
import { useNavigate } from 'react-router-dom';

const Failure = () => {
	const navigate = useNavigate();
	setTimeout(() => {
		navigate("/cart");
	}, 3000);
	return (
		<div>
			<section style={{margin: "50vh 0 0 50vw"}}>
				<p>Forgot to add something to your cart? Shop around then come back to pay!</p>
			</section>
		</div>
	)
}

export default Failure