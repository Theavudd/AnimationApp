import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Main from './src/modules/main';
import Alternate from './src/modules/alt';
import Third from './src/modules/third';
import RazorPayTest from './src/modules/razorPayTest';
import InAppPurchase from './src/modules/inAppPurchase/inAppPurchase';
import {initConnection, getProducts, endConnection} from 'react-native-iap';
import Stripe from './src/modules/stripe/stripe';
import {StripeProvider} from '@stripe/stripe-react-native';

export default function App() {
  return <Alternate />;
  // return (
  // <StripeProvider
  //   publishableKey="pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3"
  //   // urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
  //   // merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}" // required for Apple Pay
  // >
  //   {/* <Stripe /> */}
  // </StripeProvider>
  // );
  // return <RazorPayTest />;

  // return <InAppPurchase />;
}
