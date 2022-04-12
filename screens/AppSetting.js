import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Image, style,StyleSheet, Picker,LogBox , Dimensions, ImageBackground, TextInput, Alert, AsyncStorage,Modal,
} from 'react-native';
import { MaterialIcons,AntDesign } from '@expo/vector-icons';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
import { Drawer, } from 'native-base';
import SideBar from '../Includes/Sidebar'
LogBox.ignoreAllLogs(true)
import ToggleSwitch from 'toggle-switch-react-native'
export default class AppSetting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      email:"",
      Password:""
   
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
      <View style={{ width: "100%", alignItems: "center", alignContent: "center",borderBottomWidth:1,borderBottomColor:"#99A49E" }} >
            <View style={{ width: "90%", flexDirection: "row",marginTop:20}} >
              <View style={{ width: "15%" }} >
                  <TouchableOpacity style={{paddingTop:40}} onPress={() => this.openDrawer()}>
                  <Image style={styles.menu} source={require('../assets/images/icons/menu.png')} />
                  </TouchableOpacity>
              </View>
              <View style={{ width: "85%" }} >
                 <Image style={styles.image} source={require('../assets/images/transaction_dashboard_logo.png')} />
              </View>
              </View>
            </View>

          <View style={{width:"100%",marginTop:30, justifyContent:"center", alignItems: "center", alignContent: "center"}}>
          <View style={{ width: "95%",borderWidth:3,borderColor:"#99A49E"}}>
           
            <View style={{ width: "100%",padding:10 ,backgroundColor: 'rgba(52, 52, 52, 0.8)' }}>
                <Text style={{color:"#ff9815",fontWeight:"bold",fontSize:15}}>App Setting</Text>
              </View>
            
            <View style={{ width: "100%", borderBottomColor: "#ff9815", borderBottomWidth: 0.5,backgroundColor:"#C3C4C6" }}>
              <View style={{ width: "100%" }}>

              <View style={{ width: "100%",flexDirection:"row",padding:10,borderBottomColor: "#ff9815", borderBottomWidth: 0.5}}>
              <View style={{ width: "90%" }}>
              <Text style={{color:"#000",fontWeight:"bold",fontSize:15}}>Push notification enable disable</Text>
             </View>
             <View style={{ width: "10%",paddingTop:2 }}>
             <View style={{ width: "60%" }}>
             <ToggleSwitch
  isOn={this.state.warmupSwitch}
  onColor="#70ca96"
  offColor="grey"
  labelStyle={{ color: "black", fontWeight: "900" }}
  size="small"
  onToggle={isOn => this.setState({warmupSwitch:!this.state.warmupSwitch})}
/>
             </View>
             </View>
             </View>

             <View style={{ width: "100%",flexDirection:"row",padding:10,borderBottomColor: "#ff9815", borderBottomWidth: 0.5}}>
              <View style={{ width: "90%" }}>
              <Text style={{color:"#000",fontWeight:"bold",fontSize:15}}>Rate our App</Text>
             </View>
             <View style={{ width: "10%",paddingTop:2 }}>
             <View style={{ width: "60%",marginLeft:"auto" }}>
             <AntDesign name="right" size={18} color="black" />
             </View>
             </View>
             </View>
           
          

             <View style={{ width: "100%",flexDirection:"row",padding:10,borderBottomColor: "#ff9815", borderBottomWidth: 0.5}}>
              <View style={{ width: "90%" }}>
              <Text style={{color:"#000",fontWeight:"bold",fontSize:15}}>FAQ</Text>
             </View>
             <TouchableOpacity style={{ width: "10%",paddingTop:2 }}
             onPress={()=>this.props.navigation.push("FAQ")}
             >
             <View style={{ width: "60%",marginLeft:"auto" }}>
             <AntDesign name="right" size={18} color="black" />
             </View>
             </TouchableOpacity>
             </View>

             <View style={{ width: "100%",flexDirection:"row",padding:10,borderBottomColor: "#ff9815", borderBottomWidth: 0.5}}>
              <View style={{ width: "90%" }}>
              <Text style={{color:"#000",fontWeight:"bold",fontSize:15}}>Contact us</Text>
             </View>
             <TouchableOpacity style={{ width: "10%",paddingTop:2 }}
             onPress={()=>this.props.navigation.push("help")}
             
             >
             <View style={{ width: "60%",marginLeft:"auto" }}>
             <AntDesign name="right" size={18} color="black" />
             </View>
             </TouchableOpacity>
             </View>

             <View style={{ width: "100%",flexDirection:"row",padding:10}}>
              <View style={{ width: "90%" }}>
              <Text style={{color:"#000",fontWeight:"bold",fontSize:15}}>Share with Friends</Text>
             </View>
             <View style={{ width: "10%",paddingTop:2 }}>
             <View style={{ width: "60%",marginLeft:"auto" }}>
             <AntDesign name="right" size={18} color="black" />
             </View>
             </View>
             </View>
            
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
  menu:{
  width: 20, height: 20,resizeMode:"contain"
},
image:{
  width: 250, height: 100,resizeMode:"contain"
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