import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Main from './src/modules/main';
import Alternate from './src/modules/alt';
import Third from './src/modules/third';
import RazorPayTest from './src/modules/razorPayTest';
import InAppPurchase from './src/modules/inAppPurchase/inAppPurchase';
import Stripe from './src/modules/stripe';
import {StripeProvider} from '@stripe/stripe-react-native';
import Reanimate from './src/modules/reanimate';
import AlternateReanimate from './src/modules/altReanimate';
import Chatting from './src/modules/chat';
import Counter from './src/modules/chat';
import BoxGame from './src/modules/new';
import {LogBox} from 'react-native';
import DynamicColumn from './src/modules/dynamicColumn';
import Practice from './src/modules/practice';
import {Provider} from 'react-redux';
import {store} from './src/modules/redux/store';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

export default function App() {
  // return <Alternate />;

  return (
    <Provider store={store}>
      <Practice />
    </Provider>
  );
  // return <AlternateReanimate />;
  // return <Reanimate />;
  // return <Chatting />;
  // return <Counter />;
  // return <BoxGame />;
  // return <DynamicColumn />;
  // return (
  //   <StripeProvider
  //     publishableKey="pk_test_51Mp6mJSBNF5KvcY2w2axWHzfSxzoUJVfjXsIo5uXyxVlGgamoLCQugVWKoKfNMS9oP8DXk5PjOb0OA8KluMzvCg100DoDGF8Sq"
  //     // urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
  //     merchantIdentifier="merchant.com.testing" // required for Apple Pay
  //   >
  //     <Stripe />
  //   </StripeProvider>
  // );
  // return <RazorPayTest />;
  // return <InAppPurchase />;
}
