import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Image, style,StyleSheet, Picker,LogBox , Dimensions, ImageBackground, TextInput, Alert, AsyncStorage,Modal,
} from 'react-native';
import { MaterialIcons,AntDesign } from '@expo/vector-icons';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
LogBox.ignoreAllLogs(true)

export default class Forgot_Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      email:"",
      Password:""
   
    }

  }
 
  render() {

    return (

 <ImageBackground source={require("../assets/images/background_image.png")} imageStyle={{ resizeMode: "cover", overlayColor: "grey" }} style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ width: "100%", alignItems: "center", alignContent: "center" }} >
            <View style={{ width: "90%",marginTop:20,alignItems:"center"}} >

          

              <View style={{ width: "75%" }} >
           
                              <Image style={{ width: 250, height: 100,resizeMode:"contain" }} source={require('../assets/images/transaction_dashboard_logo.png')} />
              </View>
              
              </View>
            
            </View>

          <View style={{width:"100%", position:"absolute",top:300, justifyContent:"center", alignItems: "center", alignContent: "center"}}>
          <View style={{ width: "95%", backgroundColor: "#fff", borderRadius: 10,backgroundColor:"#f8f8f8" }}>
           
            <View style={{ width: "100%",padding:10 , borderTopLeftRadius: 10,borderTopRightRadius:10,backgroundColor:"#202020" }}>
                <Text style={{color:"#ffffff",fontWeight:"bold",textAlign:"center",fontSize:18}}>Forgot Password</Text>
              </View>
            
            <View style={{ width: "100%", borderBottomColor: "#ff9815", borderBottomWidth: 0.5 ,marginTop:5}}>
              <View style={{ width: "90%",padding:5 }}>
              <TextInput
                style={{
                  color: "#000000",
                  fontSize: 15,
                  paddingHorizontal: 15,
                  fontWeight:"bold"
                }}
                keyboardType="email-address"
                placeholder={"Email Address"}
                placeholderTextColor="#000000"
                onChangeText={(email) => this.setState({ email })}
                value={this.state.email}
              />
              </View>
             
            </View>

        
         
<View style={{width:"100%",alignItems:"center",paddingBottom:10,marginTop:20}}>

          <TouchableOpacity style={styles.SignUp_button} 
          // onPress={() => this.submit()}
          >
            <View style={{alignItems:"center",flexDirection:"row"}}>
            <View>
            <Text style={{ color:"#FF9D13",fontWeight:"bold",textAlign:"center",fontSize:18 }}>SUBMIT </Text>
            </View>
            <View>
          <AntDesign name="right" size={20} color="#FF9D13" />
            </View>
            </View>
        </TouchableOpacity>

        </View>




          </View>
        </View>
        
      

     
 </ImageBackground>
       

       
        
    );
  }
}
const styles = StyleSheet.create({
image:{
resizeMode:"contain",
width:100,
height:100

},
SignUp_button: {
  width: "80%",
  marginTop: 15,
  paddingVertical: 5,
  alignItems: "center",
  borderRadius: 10,
  borderBottomColor: "#ff9815",
  backgroundColor: "#202020",
  borderWidth: 3
},

});