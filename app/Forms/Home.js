import React, { Component } from 'react';
import {
    AppRegistry, View, Image, Text, TouchableOpacity, StyleSheet, TextInput,
    ScrollView, Alert, AsyncStorage, ToastAndroid, ListView, ActivityIndicator, Dimensions, TouchableHighlight, ImageBackground
} from 'react-native';
import {
    Container, Content, Badge, Row, Header, Title, Button, Tabs, Tab, Fab, Footer, FooterTab,
    Right, Left, Body, TabHeading, Radio, Card
} from 'native-base';

import Constant from "../Constant"

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


const wall = require('../images/drink.jpg');
const datas = [
    {
        img: wall,
        item: "Drinks",
        id: 1
    },
    {
        img: wall,
        item: "Entree's",
        id: 2
    },
    {
        img: wall,
        item: "Dessert",
        id: 3
    },
    {
        img: wall,
        item: "French Toast",
        id: 4
    },
];

export default class Home extends Component {

    static navigationOptions = {
        header: null
        //headerMode: 'none'
    };
    constructor(props) {
        super(props);
        this.state = {

            radio4: false,  
        };
    } 

    render() {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }) 
        return (
            <View style={styles.container} >

                <Header hasTabs
                    style={{ backgroundColor: Constant.primaryColor, justifyContent: 'center', }}
                    androidStatusBarColor={Constant.androidStatusBarColor}
                    iosBarStyle="light-content">
                    <View style={{ width: width, flexDirection: "row", alignItems: 'center', justifyContent: 'center', }}>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate("DrawerOpen")}
                            style={{ marginLeft: 10, position: 'absolute', left: 0, }}>
                            <Image source={require('../images/icon/new/toggle.png')} style={{ width: 24, height: 24 }} />
                        </TouchableOpacity>
                        <Text style={{ fontWeight: 'bold', color: "#FFF", fontSize: 22, position: 'absolute', }}>
                            Pymt</Text>

                    </View>
                </Header>

                <View style={{
                    backgroundColor: '#FFFFFF', marginLeft: 5, marginRight: 5, borderRadius: 10,
                    height: 40, marginTop: 10
                }}>
                    <TextInput secureTextEntry={this.props.secureTextEntry} placeholder={"SEARCH PRODUCTS"}
                        placeholderTextColor="gray" underlineColorAndroid={'transparent'}
                        style={{ marginLeft: 10 }}
                        textColor="#000" />

                    <TouchableOpacity style={{
                        position: "absolute", right: 5, top: 10, alignItems: 'center',
                        backgroundColor: Constant.primaryColor, marginRight: 10, width: 50, height: 25, borderRadius: 20
                    }}>
                        <Image style={{ resizeMode: "contain", width: 15, height: 15, marginTop: 4 }} source={require('../images/search.png')} />
                    </TouchableOpacity>
                </View>

               
                <View style={{ marginTop: 10, marginBottom: 160, backgroundColor: 'transparent' }}>

                    <ListView
                        enableEmptySections={true}
                        dataSource={ds.cloneWithRows(datas)}
                        renderRow={(rowData) =>

                            <Card style={{
                                marginTop: 10, marginLeft: 10, marginRight: 10, borderRadius: 10,
                                backgroundColor: 'transparent'
                            }}>
                                <ImageBackground source={rowData.img}
                                    borderRadius={5}
                                    resizeMode={'stretch'}
                                    style={{
                                        width: '100%', height: 160, flexDirection: 'row',
                                    }}>



                                    <View style={{ marginLeft: 15, marginTop: 15 }}>
                                        <Text style={{ fontWeight: 'bold', color: "#fff", fontSize: 25, }}>
                                            {rowData.item}</Text>
                                    </View>
                                </ImageBackground>

                            </Card>} />

                </View>


                <Footer style={styles.footer} >

                <View style={{
                    width: width, justifyContent: 'space-between', backgroundColor: Constant.bottomTab,
                    flexDirection: 'row', alignItems: 'center'
                }}>
                    <View style={{ alignItems: 'center', marginLeft: 20 }}>
                        <TouchableOpacity
                        >
                            <Image source={require("../images/icon/new/icon1.png")} style={styles.iconContainerBot} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity
                        >
                            <Image source={require("../images/icon/new/icon2.png")} style={styles.iconContainerBot} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity
                        >
                            <Image source={require("../images/icon/camera.png")} style={styles.iconContainerBot} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center', marginRight: 20 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Categories")}
                        >
                            <Image source={require("../images/icon/new/icon3.png")} style={styles.iconContainerBot} />
                        </TouchableOpacity>
                    </View>

                </View>
            </Footer>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F7F6FB",
        height: '100%',
    },
    buttonOnBed: {
        marginBottom: 10,
        marginLeft: 20,
        marginTop: 15,
        flexDirection: 'row'
    },
    iconContainerBot: {
        height: 35, width: 35,  
    },
    footer: {
        position: 'absolute',
        height: 50,
        bottom: 0,
        backgroundColor: Constant.bottomTab
    },
    modalContent: {
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)"
    },
    bottomModal: {
        justifyContent: "flex-end",
        marginBottom: 50,
        width: '100%',
    },
})