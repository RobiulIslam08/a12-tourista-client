import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

// todo
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
	return (
		<div className="w-1/2 mx-auto">
			<p className="text-lg md:text-2xl lg:text-3xl font-bold text-center my-20">Payment</p>
			<div>
				<Elements stripe={stripePromise}>
					<CheckoutForm />
				</Elements>
			</div>
		</div>
	);
};

export default Payment;