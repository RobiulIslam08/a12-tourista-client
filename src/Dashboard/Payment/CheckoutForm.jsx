import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosCommon from "../../Pages/hooks/useAxiosCommon";
import useAuth from "../../Pages/hooks/useAuth";
import { toast } from "react-toastify";


// eslint-disable-next-line react/prop-types
const CheckoutForm = ({price}) => {
	const stripe = useStripe();
	const elements = useElements();
	const [error, setError] = useState('')
	const [clientSecret, setClientSecret] = useState('')
	const [transactionId, setTransactionId] = useState('')
	const axiosCommon = useAxiosCommon()
	const {user} = useAuth()

	console.log('checkout er price', price)
	useEffect(()=>{
		axiosCommon.post('/create-payment-intent', {price: parseInt(price)})
		.then(res => {
			console.log(res.data.clientSecret)
			setClientSecret(res.data.clientSecret)
		})
	},[axiosCommon, price])
	const handleSubmit = async (event) => {
		event.preventDefault();
		if (!stripe || !elements) {

			return;
		}
		const card = elements.getElement(CardElement);

		if (card == null) {
			return;
		}

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card,
		});


		if (error) {
			console.log('[payment error]', error);
			setError(error.message)
		} else {
			console.log('[PaymentMethod]', paymentMethod);
			setError("")
		}
		// confirm payment
		const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: card, 
				billing_details: {
					email: user?.email || 'anonymous',
					name: user?.displayName || 'anonymous'
				}
			}
		})
		if(confirmError){
			console.log('confirm error')
		}else{
			console.log('payment intent', paymentIntent)
			if(paymentIntent.status === "succeeded"){
				console.log('successful payment', paymentIntent.id)
				toast.success(' successful your payment')
				setTransactionId(paymentIntent.id)
			}
		}
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<CardElement
					options={{
						style: {
							base: {
								fontSize: '16px',
								color: '#424770',
								'::placeholder': {
									color: '#aab7c4',
								},
							},
							invalid: {
								color: '#9e2146',
							},
						},
					}}
				/>
				<button className="btn mt-10 btn-secondary btn-sm" type="submit" disabled={!stripe || !clientSecret}>
					Pay
				</button>
				<p className="text-red-500">{error}</p>
				{
					transactionId && <p className="text-green-500"> your transaction id {transactionId}</p>
				}
			</form>
		</div>
	);
};

export default CheckoutForm;