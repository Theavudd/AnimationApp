import {SafeAreaView, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

function Screen1() {
  return <View style={{flex: 1, backgroundColor: 'blue'}} />;
}
function Screen2() {
  return <View style={{flex: 1, backgroundColor: 'aqua'}} />;
}

function HomeScreen() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name={'Screen1'} component={Screen1} />
      <TopTab.Screen name={'Screen2'} component={Screen2} />
    </TopTab.Navigator>
  );
}

function SettingsScreen() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name={'Screen1'} component={Screen1} />
      <TopTab.Screen name={'Screen2'} component={Screen2} />
    </TopTab.Navigator>
  );
}
export default function Counter() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            // tabBarStyle: {position: 'absolute', top: 0},
          }}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
