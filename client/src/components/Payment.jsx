import StripeCheckout from 'react-stripe-checkout'
import {useGlobalContext} from '../context/global/global.context'

const Payment = () => {
	const {handleToken} = useGlobalContext()

	return (
		<StripeCheckout 
			name="Emaily"
			description="$5 for 5 credits"
			amount={500}
			token={ token => handleToken(token) }
			stripeKey={process.env.STRIPE_KEY } 
		>
			<div className="addCreditsButton">Add Credits</div>
		</StripeCheckout> 
	)
}

export default Payment