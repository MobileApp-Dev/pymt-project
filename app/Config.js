import React, { Component } from "react";
import { AppRegistry, View, Image, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
 
import Home from "./Forms/Home";
import SideBar from "./Forms/SideBar"; 
import Categories from "./Forms/Categories"; 
import Food from "./Forms/Food"; 

import { StackNavigator,DrawerNavigator ,NavigationActions  } from "react-navigation";
 
const homenav = StackNavigator({
  Main:{
    screen: Home,
     
  },
 },{ 
});
const HomeDrawer = DrawerNavigator({
  Main: {
    screen: homenav,
      screenProps :{
        name: 'Home'
    }
  }, 
},
 {
   Name: 'Main',
  contentComponent : props => <SideBar {...props} />,
   
  header: null,
  headerMode: 'none'
 }
);
const GetAyudaReact = StackNavigator(
  {
    Home: { screen: HomeDrawer   },
    SideBar: { screen: SideBar  }, 
    Categories: { screen: Categories  }, 
    Food: { screen: Food  }, 
   
  },{initialRouteName: 'Home',
    headerMode: 'none', });
  export default GetAyudaReact