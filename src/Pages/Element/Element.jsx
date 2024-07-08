import React from 'react';
import CheckOutForm from '../../component/CheckOutForm/CheckOutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(import.meta.env.VITE_Stripe_Publish_Token);
const Element = () => {
    return (
        <div className=' md:ml-40 md:pt-60 pt-40  h-screen '>
            <Elements stripe={stripePromise}>
                <CheckOutForm />
            </Elements>
        </div>
    );
};

export default Element;