import React, { useContext, useEffect, useState } from 'react';
import './common.css'
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js'
import axios from 'axios';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';
import useConfirmed from '../../Hooks/useConfirmed/useConfirmed';

const CheckOutForm = () => {
    const [clientSecret, setClientSecret] = useState('')
    const [loading, setLoading] = useState(false)
    const { user } = useContext(AuthContext)
    const stripe = useStripe();
    const elements = useElements();
    const singleBook = useLoaderData()
    const price = singleBook?.price
    useEffect(() => {
        axios.post('https://mazza-restaurent-server.vercel.app/create-payment-intent', { price })
            .then(data => {
                setClientSecret(data.data.clientSecret)
            })
    }, [])
    const handleSubmit = async (event) => {
        setLoading(true)
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {

        } else {
            // console.log('[PaymentMethod]', paymentMethod);

        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'unknown',
                        email: user?.email || 'anonymous',
                    },
                },
            },
        );
        if (confirmError) {
            toast.error(confirmError.message)
            setLoading(false)
        } else {
            const payment = { transactionId: paymentIntent.id, amount: paymentIntent.amount, productName: singleBook?.name, name: user?.displayName, email: user?.email, host: singleBook?.Host, paymentId: singleBook?._id }
            if (paymentIntent.status) {
                axios.post('https://mazza-restaurent-server.vercel.app/payment', { payment })
                    .then(data => {
                        useConfirmed(singleBook?._id, true)
                            .then(data => {
                                toast.success(`payment successful transactionId ${paymentMethod?.id}`)
                                setLoading(false)
                            })

                    })
            }

        }

    };

    return (
        <form onSubmit={handleSubmit} className=''>
            <div>
                <p className=' font-bold text-black text-xl mb-4'>${singleBook?.price}</p>
            </div>
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
            <button type="submit" className=' bg-green-400 text-white px-10 py-1 hover:bg-green-500 rounded-md' disabled={!stripe}>
                {
                    loading ? <p className=' animate-spin'><FaSpinner size={20} /></p> : ' Payment'
                }
            </button>
        </form>
    );
};


export default CheckOutForm