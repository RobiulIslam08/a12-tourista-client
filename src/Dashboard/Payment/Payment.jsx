import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";

// todo
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
	const {price} = useParams()
	console.log("my payment amount",price)
	return (
		<div className="w-1/2 mx-auto">
			<p className="text-lg md:text-2xl lg:text-3xl font-bold text-center my-20">Payment</p>
			<p className="font-bold my-5">Your tatal amount: {price}$</p>
			<div>
				<Elements stripe={stripePromise}>
					<CheckoutForm price={price}/>
				</Elements>
			</div>
		</div>
	);
};

export default Payment;