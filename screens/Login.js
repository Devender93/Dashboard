import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Image, style,StyleSheet, Picker,LogBox , Dimensions, ImageBackground, TextInput, Alert, AsyncStorage,Modal,
} from 'react-native';
import { MaterialIcons} from '@expo/vector-icons';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
import { Drawer, } from 'native-base';
import SideBar from '../Includes/Sidebar'
LogBox.ignoreAllLogs(true)

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false,
   
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
            <View style={{ width: "90%", flexDirection: "row", marginTop: 50 }} >
              <View style={{ width: "80%" }} >

              <View style={{ width: "20%", }} >
                <View style={{ width: "40%" }} >
                  <TouchableOpacity style={{}} onPress={() => this.openDrawer()}>
                    <MaterialIcons name="segment" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{ width: "80%", }} >
              <View style={{ width: "80%", }} >
             <Image styles={styles.image} source={require('../assets/images/transaction_dashboard_logo.png')} />
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
// image:{
// resizeMode:"contain",
// width:100,
// height:100

// }

});