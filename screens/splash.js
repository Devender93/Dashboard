import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Image, style,StyleSheet, Picker,LogBox , Dimensions, ImageBackground, TextInput, Alert, AsyncStorage,Modal,
} from 'react-native';
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default class splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      drop_down:false,
      Password:""
   
    }

  }
  render() {

    return (
    <ImageBackground source={require("../assets/images/Assets/Splash_pageBG.jpg")} imageStyle={{ resizeMode: "cover", overlayColor: "grey" }} style={{ flex: 1, alignItems: 'center' }}>
    <View style={{ width: "100%", alignItems: "center", alignContent: "center"}} >
          <View style={{ width: "95%",marginTop:20,alignItems:"center"}} >
          
               <Image style={styles.image} source={require('../assets/images/transaction_dashboard_logo.png')} />
            </View>
          </View>
      <View>
        <View style={{width:"100%",alignItems:"center"}}>
        <View style={styles.image_container}>
        <View style={styles.image1_view}>
          <Image
            style={styles.image1}
            source={require("../assets/images/Assets/Splash_page_acceptedofferimage.png")}
          ></Image>
        </View>
        <View style={styles.image2_view}>

          <Image
            style={styles.image2}
            source={require("../assets/images/Assets/Splash_page_Clossingdateimage.png")}
          ></Image>
        </View>
        </View>
        </View>
        <View style={styles.image_container2}>
          <Image
            style={styles.image3}
            source={require("../assets/images/Assets/Splash_page_Transaction-dial_image.png")}
          ></Image>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.push("Login")}>
        <Text style={styles.button_text}>LOG IN</Text>
      </TouchableOpacity>
      <View style={styles.footer_container}>
        <Text style={{textAlign:"center"}}>
          Aliquip id amet laborum suntAliquip id amet laborum officia labore
          fugiat dolore commodo.
        </Text>
      </View>
    </ImageBackground>
  );
}
}
const styles = StyleSheet.create({
  image1_view:{
    width:"50%",paddingLeft:10
  },
  image2_view:{
    width:"50%",alignItems:"center",paddingLeft:70
  },
  backgroungImage: {
    flex: 1,
  },
  footer_container: {
    width: "100%",
    position: "absolute",
    bottom: 100,
    paddingHorizontal: 15,
    color: "#000",
  },
  container: {
    width: "100%",
    marginTop: 40,
    flexDirection: "row",
    paddingBottom: 20,
  },
  image_container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image_container2: {
    width: "100%",
    alignItems: "center",
    alignContent: "center",
    position: "absolute",
    top: 40,
  },
  logo: {
    width: "100%",
    height: 55,
    resizeMode: "contain",
    marginLeft: 60,
  },
  logo_container: { width: "65%", height: 50 },
  image1: {
    width: 100,
    marginTop: 30,
    height: 100,
    resizeMode:"contain"
  },
  image2: {
    width: 100,
    marginTop: 30,
    height: 100,
    resizeMode:"contain"

  },
  image3: {
    width: "95%",
    height: screenHeight / 2,
    resizeMode: "contain",
    marginTop: 30,
  },
  button: {
    position: "absolute",
    bottom : 220,
    width: "30%",
    marginTop: 15,
    paddingVertical: 5,
    alignItems: "center",
    borderBottomColor: "#fff",
    backgroundColor: "#202020",
    borderWidth: 3
  },
  button_text: { color: "#FB9414", fontSize: 11, fontWeight: "bold" },
  image:{
    width: 250, height: 100,resizeMode:"contain"
  },
});
