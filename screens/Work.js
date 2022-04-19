import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Image, style,StyleSheet, Picker,LogBox , Dimensions, ImageBackground, TextInput, Alert, ScrollView,Modal,
} from 'react-native';
import { MaterialIcons,AntDesign } from '@expo/vector-icons';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
import { Drawer, } from 'native-base';
import SideBar from '../Includes/Sidebar'
LogBox.ignoreAllLogs(true)
import ToggleSwitch from 'toggle-switch-react-native'
export default class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      drop_down:false,
      drop_down1:false,
      drop_down2:false,
      Password:""
   
    }

  }
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => { this.drawer._root.open() };
  drop_down=()=>{
    this.setState({drop_down:!this.state.drop_down})
  }
  drop_down1=()=>{
    this.setState({drop_down1:!this.state.drop_down1})
  }
  drop_down2=()=>{
    this.setState({drop_down2:!this.state.drop_down2})
  }
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
<ScrollView>
<View style={{width:"100%",marginTop:30, justifyContent:"center", alignItems: "center", alignContent: "center"}}>
          <View style={{ width: "95%",borderWidth:3,borderColor:"#99A49E"}}>
           
          <View style={{ width: "100%",padding:10 ,backgroundColor: 'rgba(52, 52, 52, 0.8)' ,height:screenHeight}}>
            <View style={{ width: "90%"  }}>
                <Text style={{color:"#ff9815",fontWeight:"bold",fontSize:15}}>How The Transaction Dashboard Works</Text>
              </View>
              <View style={{ width: "100%", paddingTop: 5 }}>
                  <Text style={{ color: "#fff", fontSize: 12 }}>Putting your real estate information at your fingertips! </Text>

                </View>

                <View style={{paddingTop:10}}>
                <Text style={{ color: "#fff", fontSize: 12, fontStyle:"italic", fontWeight:"bold" }}>Anywhere Access </Text>
                </View>

                <View style={{paddingTop:2}}>
                <Text style={{ color: "#fff", fontSize: 12 }}>Check on your home sale or purchase from any device and stay updated on recent developments.</Text>
                </View>

                <View style={{paddingTop:10}}>
                <Text style={{ color: "#fff", fontSize: 12, fontStyle:"italic", fontWeight:"bold" }}>Custom Interface</Text>
                </View>

                <View style={{paddingTop:2}}>
                <Text style={{ color: "#fff", fontSize: 12 }}>You can adjust your Transaction Dashboard to show you the most important info, and control what you share.</Text>
                </View>

                <View style={{paddingTop:10}}>
                <Text style={{ color: "#fff", fontSize: 12, fontStyle:"italic", fontWeight:"bold" }}>Realtor Support </Text>
                </View>

                <View style={{paddingTop:2}}>
                <Text style={{ color: "#fff", fontSize: 12 }}>Behind the Transaction Dashboard is a team of experienced realtors in NJ who are ready to finalize your sale!</Text>
                </View>


                <View style={{paddingTop:10}}>
                <Text style={{ color: "#fff", fontSize: 15, fontWeight:"bold" }}>Advanced Features</Text>
                </View>

                <View style={{paddingTop:2}}>
                <Text style={{ color: "#fff", fontSize: 12 }}>Convenient control of your real estate transactions.
</Text>
                </View>


                <View style={{paddingTop:10}}>
                <Text style={{ color: "#fff", fontSize: 12, fontStyle:"italic", fontWeight:"bold" }}>Security
 </Text>
                </View>
                <View style={{paddingTop:2}}>
                <Text style={{ color: "#fff", fontSize: 12 }}>The leading mobile app technology keeps your real estate information safe.
</Text>
                </View>

                <View style={{paddingTop:10}}>
                <Text style={{ color: "#fff", fontSize: 12, fontStyle:"italic", fontWeight:"bold" }}>Privacy</Text>
                </View>
                <View style={{paddingTop:2}}>
                <Text style={{ color: "#fff", fontSize: 12 }}>Share only what you choose—your private date is safe on our real estate app!

</Text>
                </View>

                <View style={{paddingTop:10}}>
                <Text style={{ color: "#fff", fontSize: 12, fontStyle:"italic", fontWeight:"bold" }}>Customizable </Text>
                </View>
                <View style={{paddingTop:2}}>
                <Text style={{ color: "#fff", fontSize: 12 }}>Find or sell your home your way with a custom app experience.
</Text>
                </View>

                <View style={{paddingTop:10}}>
                <Text style={{ color: "#fff", fontSize: 12, fontStyle:"italic", fontWeight:"bold" }}>Innovation </Text>
                </View>
                <View style={{paddingTop:2}}>
                <Text style={{ color: "#fff", fontSize: 12 }}>We are always finding new features and ways to make your experience better.

</Text>
                </View>

                <View style={{paddingTop:10}}>
                <Text style={{ color: "#fff", fontSize: 12, fontStyle:"italic", fontWeight:"bold" }}>Responsive Design </Text>
                </View>
                <View style={{paddingTop:2}}>
                <Text style={{ color: "#fff", fontSize: 12 }}>The simple, intuitive design of our Transaction Dashboard makes real estate easy!
</Text>
                </View>

                <View style={{paddingTop:10}}>
                <Text style={{ color: "#fff", fontSize: 12, fontStyle:"italic", fontWeight:"bold" }}>Engage </Text>
                </View>
                <View style={{paddingTop:2}}>
                <Text style={{ color: "#fff", fontSize: 12 }}>Connect with your Realtor, buyer, or seller easily with a dedicated app
</Text>
                </View>
                <View style={{paddingTop:10}}>
                <Text style={{ color: "#fff", fontSize: 15, fontWeight:"bold" }}>Close Real Estate Transactions Faster With A Transaction Dashboard App
</Text>
                </View>

                <View style={{paddingTop:10}}>
                <Text style={{ color: "#fff", fontSize: 12 }}>If you are buying or selling a home in New Jersey, you have lots on your mind already! Between arranging the finances, scheduling showings, and making sure you have all your plans in order, it can be hard to keep track of all these responsibilities. If you’re buying a home, you may have dozens of properties you are interested in; if you’re selling, your next buyer could be on their way! Keep track of it all more easily and reach your closing faster with our Transaction Dashboard App! Check the status of your offers or properties, send and receive messages, and keep all parties informed of what comes next. 

</Text>
                </View>
              {/* <View style={{ width: "100%" ,marginTop:20}} >
                 <Image style={styles.buyer_seller} source={require('../assets/images/Assets/howitworkpage_image.png')} />
              </View> */}
              
              
              </View>
        




          </View>
        </View>
     
</ScrollView>
          
        
      

     
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
  width: "100%", height: 200,resizeMode:"cover"
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
faq_pageNo: {
width:"100%",
alignItems:"center",
justifyContent:"center",
 paddingVertical:5,
 flexDirection:"row"
},
page_no: {
alignItems:"center",
backgroundColor:"#ff9815",
width: 18,
height:18
},
page_no1: {
  alignItems:"center",
  width: 18,
  height:18,
 
  },

});