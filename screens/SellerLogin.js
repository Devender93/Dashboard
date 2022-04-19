import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Image, style,StyleSheet, Picker,LogBox , Dimensions, ImageBackground, TextInput, Alert,Modal,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons,AntDesign } from '@expo/vector-icons';
import { Drawer, } from 'native-base';
import SideBar from '../Includes/Sidebar'
import { sellerLoginRequest } from '../services/auth';

export default class SellerLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      email:"",
      password:""
   
    }

  }
  login = async () => {
    const {email , password} = this.state;

    if(!email && !password){
      alert("please fill all fields")
    }
    if(!email && password){
      alert("Email is required")
    }
    if(email && !password){
      alert("Password is required")
    }
    if(email && password){
    
   

  let formData = new FormData();
  formData.append("email",email)
  formData.append("password",password)
  
  const res = sellerLoginRequest(formData)
  .then(res => res.json())
  .then(async response => {
   
    if(response.error == "200"){
      let user_data = response.user;
      if(user_data.status == 'active'){
        Alert.alert(
          "InActive",
          "Please Activate your account",
          [
            { text: "OK" }
          ],
        );
      }else{
        AsyncStorage.setItem("user_data", JSON.stringify(response.user));
        AsyncStorage.setItem("account_type", "seller");
        this.props.navigation.reset({
          index: 0,
          routes: [{ name: 'Work' }],
        });
      }
     

    }else{
      Alert.alert(
        "Sorry",
        response.message,
        [
          { text: "OK" }
        ],
      );
    }


})
.catch(error => {
  console.log(error);
});
    }
  }
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => { this.drawer._root.open() };
  render() {

    return (
   <Drawer ref={(ref) => { this.drawer = ref; }} content={<SideBar navigation={this.props.navigation} />} onClose={() => this.closeDrawer()}  >

 <ImageBackground source={require("../assets/images/background_image.png")} imageStyle={{ resizeMode: "cover", overlayColor: "grey" }} style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ width: "100%", alignItems: "center", alignContent: "center" }} >
            <View style={{ width: "90%", flexDirection: "row",marginTop:20}} >

              <View style={{ width: "15%" }} >
                  <TouchableOpacity style={{paddingTop:40}} onPress={() => this.openDrawer()}>
                  <Image style={{ width: 20, height: 20,resizeMode:"contain" }} source={require('../assets/images/icons/menu.png')} />
                  </TouchableOpacity>
              </View>

              <View style={{ width: "85%" }} >
           
                              <Image style={{ width: 250, height: 100,resizeMode:"contain" }} source={require('../assets/images/transaction_dashboard_logo.png')} />
              </View>
              
              </View>
            
            </View>

          <View style={{width:"100%", position:"absolute",top:300, justifyContent:"center", alignItems: "center", alignContent: "center"}}>
          <View style={{ width: "95%", backgroundColor: "#fff", borderRadius: 10,backgroundColor:"#f8f8f8" }}>
           
            <View style={{ width: "100%",padding:10 , borderTopLeftRadius: 10,borderTopRightRadius:10,backgroundColor:"#202020" }}>
                <Text style={{color:"#ffffff",fontWeight:"bold",textAlign:"center",fontSize:18}}>Log In</Text>
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

            <View style={{ width: "100%", borderBottomColor: "#ff9815", borderBottomWidth: 0.5,marginTop:5 }}>
              <View style={{ width: "90%",padding:5 }}>
              <TextInput
              secureTextEntry={true}
                style={{
                  color: "#000000",
                  fontSize: 15,
                  paddingHorizontal: 15,
                  fontWeight:"bold"
                }}
                placeholder={"password"}
                placeholderTextColor="#000000"
                onChangeText={(password) => this.setState({ password })}
                value={this.state.password}
              />
              </View>
            </View>
            <View style={{ width: "100%",marginTop:10  }}>
          <TouchableOpacity style={{width:"95%", }}
          
          onPress={() => this.props.navigation.push("Forgot_Password")}
          >
          <Text style={{ fontWeight: "bold", fontSize: 14, color:"#974d06",textAlign:"right"  }}>Forgot password? </Text>

          </TouchableOpacity>
<View style={{width:"100%",alignItems:"center",paddingBottom:10}}>

          <TouchableOpacity style={styles.SignUp_button} 
          onPress={() => this.login()}
        //  onPress={()=>this.props.navigation.push("OurBuyer")}
          >
            <View style={{alignItems:"center",flexDirection:"row"}}>
            <View>
            <Text style={{ color:"#FF9D13",fontWeight:"bold",textAlign:"center",fontSize:18 }}>LOG IN </Text>
            </View>
            <View>
          <AntDesign name="right" size={20} color="#FF9D13" />
            </View>
            </View>
        </TouchableOpacity>

        </View>
        </View>




          </View>
        </View>
        
      

     
 </ImageBackground>
       
 </Drawer>

       
        
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