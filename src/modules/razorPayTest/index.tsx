import {View, Text, FlatList, SafeAreaView, Button, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import RazorpayCheckout from 'react-native-razorpay';

export default function RazorPayTest() {
  const [data, setData] = useState([]);
  const [extra, setExtra] = useState([{name: ''}]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res: any) => {
        return res.json();
      })
      .then((res: any) => {
        setData(res);
      });
  }, []);

  const renderItem = (item: any) => {
    return (
      <View>
        <Text>{item.item.name}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={renderItem} />
      <Button
        title="RazorPay"
        onPress={() => {
          var options = {
            description: 'Credits towards consultation',
            image: 'https://i.imgur.com/3g7nmJC.png',
            currency: 'INR',
            key: 'rzp_test_guCCWG4CG0nk6K',
            amount: '100000',
            // external: {
            //   wallets: ['paytm'],
            // },
            name: 'Mohammad Faiz',
            prefill: {
              email: 'akshay@razorpay.com',
              contact: '8955806560',
              name: 'Akshay Bhalotia',
            },
            theme: {color: '#F37254'},
          };
          RazorpayCheckout.open(options)
            .then((data: any) => {
              // handle success
              console.log('successFull', data);
              // Alert.alert(`Success: ${data.razorpay_payment_id}`);
            })
            .catch((error: any) => {
              // handle failure
              Alert.alert(`Error: ${error.code} | ${error.description}`);
            });
        }}
      />
    </SafeAreaView>
  );
}
