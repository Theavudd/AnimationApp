import {useStripe} from '@stripe/stripe-react-native';
import React, {useEffect, useState} from 'react';
import {Alert, Button, SafeAreaView} from 'react-native';

export default function CheckoutScreen() {
  const {initPaymentSheet, presentPaymentSheet} = useStripe();
  const [loading, setLoading] = useState(false);
  const API_URL = 'https://api.stripe.com/v1/customers';

  const fetchPaymentSheetParams = async () => {
    try {
      const response = await fetch(
        `http://192.168.2.186:3000/api/payments/payment-sheet`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const {paymentIntent, ephemeralKey, customer} = await response.json();

      return {
        paymentIntent,
        ephemeralKey,
        customer,
      };
    } catch (error) {
      console.log('error', error);
    }
  };

  const initializePaymentSheet = async () => {
    const {paymentIntent, ephemeralKey, customer, publishableKey}: any =
      await fetchPaymentSheetParams();

    const {error} = await initPaymentSheet({
      merchantDisplayName: 'Example, Inc.',
      customerId: customer,
      googlePay: {
        merchantCountryCode: '+91',
        currencyCode: '+91',
        testEnv: true,
      },
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
      //methods that complete payment after a delay, like SEPA Debit and Sofort.
      allowsDelayedPaymentMethods: true,
      defaultBillingDetails: {
        name: 'Jane Doe',
      },
    });
    if (!error) {
      setLoading(true);
    }
  };

  const openPaymentSheet = async () => {
    const response = await presentPaymentSheet();
    console.log('response', response);

    if (response.error) {
      const {error} = response;
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      console.log('res', await response);
      Alert.alert('Success', 'Your order is confirmed!');
    }
  };

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  return (
    <SafeAreaView>
      <Button title="Checkout" onPress={openPaymentSheet} />
    </SafeAreaView>
  );
}
