import React from "react";
import { AppRegistry, Image, StatusBar, View, Text, StyleSheet, TouchableOpacity, Alert
,TextInput,AsyncStorage } from "react-native";
import {
  Button,
  Container,
  List,
  ListItem,
  Content,
} from "native-base";
import Constant from "../Constant"

import profileImg from '../images/no.png'; 
import drawer_user_settings from '../images/icon/drawer_user_settings.png';
import drawer_logout from '../images/icon/drawer_logout.png';

export default class SideBar extends React.Component {
  static navigationOptions = {
    header: null
    //headerMode: 'none'
  };

  constructor(props) {
    super();
    this.state = {
        visible: false,
        email: '',
        password: '',

        first_name: '',
        last_name: '',
    }
}

  async onRetreive() {

    var user_id = await AsyncStorage.getItem('user_id').then((value) => this.setState({ 'user_id': value }))
    var first_name = await AsyncStorage.getItem('first_name').then((value) => this.setState({ 'first_name': value }))
    var last_name = await AsyncStorage.getItem('last_name').then((value) => this.setState({ 'last_name': value }))
    var is_verified = await AsyncStorage.getItem('is_verified').then((value) => this.setState({ 'is_verified': value }))
  }

  componentWillMount() {
    {this.onRetreive()}
}

  render() {
    return (
      <Container>
        <Content>
          <View
            style={{
              height: 150,
              alignSelf: "stretch",

              backgroundColor: Constant.primaryColor
            }}
          >
            <View style={{ marginLeft: 18, marginTop: 16 }}>
              <TouchableOpacity style={{ flexDirection: "row", alignItems: 'center', }}
                onPress={() => this.props.navigation.navigate("Profile")}>
                <Image
                  style={{ height: 60, width: 60, borderRadius: 30 }}
                  source={profileImg}
                />
              </TouchableOpacity>
              <Text style={{ color: "#fff", fontSize: 15, marginTop: 10 }} 
              >{this.state.first_name} {this.state.last_name}</Text>
            </View>
            

          </View>
          <View style={styles.viewContainer}> 

            <View style={{ marginLeft: 10, flexDirection: "row", alignItems: 'center', }}>
              <TouchableOpacity style={{ flexDirection: "row", alignItems: 'center', }}
                onPress={() => this.props.navigation.navigate("Categories")}>
                <Image source={drawer_user_settings} style={styles.imageContainer} />
                <Text style={{ fontWeight: 'bold', color: "gray", fontSize: 16,  }}>Categories</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.viewDivider} /> 

          </View>
        </Content >
      </Container >
    );
  }
}



const styles = StyleSheet.create({

  container: {
    backgroundColor: "#4196CD"
  },

  buttonContainer: {
    justifyContent: "center",
    margin: 0,
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: "#FFF",
  },
  buttontextContainer: {
    color: "#000",
    fontSize: 20,
  },
  imageContainer: {
    marginRight: 15,
    margin: 5,
    width: 24,
    height: 24

  },
  textContainer: {
    color: "#244d66",
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,

  },
  col: {
    alignItems: "center",
    paddingHorizontal: 3
  },
  row: {
    paddingBottom: 20
  },
  iconText: {
    fontSize: 12
  },
  mb10: {
    marginBottom: 10
  },
  mb35: {
    marginBottom: 35
  },
  viewContainer: {
    backgroundColor: '#fff',
    marginTop: 10,
    alignSelf: 'stretch',

  },

  viewDivider: {
    marginTop: 8,
    backgroundColor: "#bab7b7",
    alignSelf: 'stretch',
    height: .3
  },

})