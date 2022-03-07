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
export default class OurBuyer extends Component {
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
            <View style={{ width: "90%"  }}>
                <Text style={{color:"#ff9815",fontWeight:"bold",fontSize:15}}>OUR BUYER</Text>
              </View>
              <View style={{ width: "100%" ,paddingTop:5 }}>
                <Text style={{color:"#fff",fontSize:12}}>Denzel Hayes Washington Jr. (born December 28, 1954) 
                is an American actor, director, and producer. Known for his performances on the screen and stage, he has
                 been described as an actor who reconfigured "the concept of classic movie stardom".[1] He has frequently
                  collaborated with directors Spike Lee, Antoine Fuqua, and Tony Scott. He has earned various awards, 
                  including two Academy Awards, three Golden Globe Awards, a Screen Actors Guild Award, and a Tony Award.[2]
                   In 2016, he received the Cecil B. DeMille Lifetime Achievement Award. In 2020, The New York Times ranked
                    him as the greatest actor of the twenty-first century</Text>
              </View>
              <View style={{ width: "100%" }} >
                 <Image style={styles.buyer_seller} source={require('../assets/images/Buyer_or_seller_image.png')} />
              </View>
              <View style={{ width: "100%" ,paddingTop:5 }}>
                <Text style={{color:"#fff",fontSize:12}}>Denzel Hayes Washington Jr. (born December 28, 1954) is an American actor, director, and producer. Known for his performances on the screen and stage, he has been described as an actor who reconfigured "the concept of classic movie stardom".[1] He has frequently collaborated with directors Spike Lee, Antoine Fuqua, and Tony Scott. He has earned various awards, including two Academy Awards, three Golden Globe Awards, a Screen Actors Guild Award, and a Tony Award.[2] In 2016, he received the Cecil B. DeMille Lifetime Achievement Award. In 2020, The New York Times ranked him as the greatest actor of the twenty-first century</Text>
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
buyer_seller:{
  width: "100%", height: 200,resizeMode:"contain"
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