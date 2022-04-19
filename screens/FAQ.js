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
export default class FAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      drop_down:false,
      drop_down1:false,
      drop_down2:false,
      drop_down3:false,
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
  drop_down3=()=>{
    this.setState({drop_down3:!this.state.drop_down3})
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

            <View style={{width:"100%",marginTop:30, justifyContent:"center", alignItems: "center", alignContent: "center"}}>
          <View style={{ width: "95%",borderWidth:3,borderColor:"#99A49E"}}>
           
          <View style={{ width: "100%",padding:10 ,backgroundColor: 'rgba(52, 52, 52, 0.8)' }}>
            <View style={{ width: "90%"  }}>
                <Text style={{color:"#ff9815",fontWeight:"bold",fontSize:15}}>Frequently Asked Question</Text>
              </View>
           
              <View style={{ width: "100%" ,marginTop:20}} >
                 <Image style={styles.buyer_seller} source={require('../assets/images/Assets/FAQ_Image.png')} />
              </View>
              
              
              </View>
           
              <View style={{width:"100%",marginTop:20,alignItems:"center"}}>
      <View style={{width:"95%",backgroundColor:"#272C2C",marginTop:20,borderWidth:2,borderColor:"white",borderRadius:5,paddingVertical:5,flexDirection:"row"}}>
      <View style={{width:"90%"}}>
      <Text style={{fontSize:14,fontWeight:"bold",color:"#FB9414",marginLeft:5}}>
      Is my personal information safe on this app?
      </Text>
      </View>
      <TouchableOpacity style={{width:"10%"}} onPress={()=>this.drop_down()}>
      <AntDesign name="caretdown" size={15} color="#FB9414" />

      </TouchableOpacity>
</View>
{this.state.drop_down ? (
  <View style={{width:"95%",backgroundColor:"#fff",borderWidth:2,borderColor:"white",paddingVertical:5,borderRadius:5}}>
  <Text style={{fontSize:14,color:"#000",marginLeft:5}}>
  We take every step on our end to make the Transaction Dashboard safe, secure, and resistant to threats using industry-standard data protection. Remember, the biggest privacy threats usually come from your own network!

  </Text>
</View>
):null}

</View>
         
<View style={{width:"100%",alignItems:"center"}}>
      <View style={{width:"95%",backgroundColor:"#272C2C",marginTop:5,borderWidth:2,borderColor:"white",borderRadius:5,paddingVertical:5,flexDirection:"row"}}>
      <View style={{width:"90%"}}>
      <Text style={{fontSize:14,fontWeight:"bold",color:"#FB9414",marginLeft:5}}>
      Are agreements made on this app legal and final?
      </Text>
      </View>
      <TouchableOpacity style={{width:"10%"}} onPress={()=>this.drop_down1()}>
      <AntDesign name="caretdown" size={15} color="#FB9414" />

      </TouchableOpacity>
</View>
{this.state.drop_down1 ? (
  <View style={{width:"95%",backgroundColor:"#fff",borderWidth:2,borderColor:"white",paddingVertical:5,borderRadius:5}}>
  <Text style={{fontSize:14,color:"#000",marginLeft:5}}>
  All real estate transactions must be signed and authorized by the appropriate parties to be fully legal. Like a verbal agreement, this app is mostly a tool for communication.

  </Text>
</View>
):null}

</View>
<View style={{width:"100%",alignItems:"center"}}>
      <View style={{width:"95%",backgroundColor:"#272C2C",marginTop:5,borderWidth:2,borderColor:"white",borderRadius:5,paddingVertical:5,flexDirection:"row"}}>
      <View style={{width:"90%"}}>
      <Text style={{fontSize:14,fontWeight:"bold",color:"#FB9414",marginLeft:5}}>
      Do I have to pay to use this app?
      </Text>
      </View>
      <TouchableOpacity style={{width:"10%"}} onPress={()=>this.drop_down2()}>
      <AntDesign name="caretdown" size={15} color="#FB9414" />

      </TouchableOpacity>
</View>
{this.state.drop_down2 ? (
  <View style={{width:"95%",backgroundColor:"#fff",borderWidth:2,borderColor:"white",paddingVertical:5,borderRadius:5}}>
  <Text style={{fontSize:14,color:"#000",marginLeft:5}}>
  Absolutely not! The Transaction Dashboard is free. Your home purchase is a different story!
  </Text>
</View>
):null}

</View>

<View style={{width:"100%",alignItems:"center"}}>
      <View style={{width:"95%",backgroundColor:"#272C2C",marginTop:5,borderWidth:2,borderColor:"white",borderRadius:5,paddingVertical:5,flexDirection:"row"}}>
      <View style={{width:"90%"}}>
      <Text style={{fontSize:14,fontWeight:"bold",color:"#FB9414",marginLeft:5}}>
      I don’t like apps or technology. Can I just talk to a real estate agent?
      </Text>
      </View>
      <TouchableOpacity style={{width:"10%"}} onPress={()=>this.drop_down3()}>
      <AntDesign name="caretdown" size={15} color="#FB9414" />

      </TouchableOpacity>
</View>
{this.state.drop_down3 ? (
  <View style={{width:"95%",backgroundColor:"#fff",borderWidth:2,borderColor:"white",paddingVertical:5,borderRadius:5}}>
  <Text style={{fontSize:14,color:"#000",marginLeft:5}}>
  Absolutely. While many customers love the Transaction Dashboard, we offer traditional real estate services by phone or in-person as well.
  </Text>
</View>
):null}

</View>
         
<View style={styles.faq_pageNo}>
<View style={styles.page_no}>
        <Text style={{textAlign:"center",color:"#000",fontWeight:"bold"}}>
      1
        </Text>
      </View>
      <View style={styles.page_no1}>
        <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold"}}>
      2
        </Text>
      </View>
      <View style={styles.page_no1}>
        <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold"}}>
      3 .. Next
        </Text>
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