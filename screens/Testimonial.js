import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Image, style, StyleSheet, Picker, LogBox, Dimensions, ImageBackground, TextInput, Alert, AsyncStorage, Modal,
} from 'react-native';
import { MaterialIcons, Octicons } from '@expo/vector-icons';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
import { Drawer, } from 'native-base';
import SideBar from '../Includes/Sidebar'
LogBox.ignoreAllLogs(true)
import ToggleSwitch from 'toggle-switch-react-native'
export default class Testimonial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      drop_down: false,
      Password: ""

    }

  }
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => { this.drawer._root.open() };
  drop_down = () => {
    this.setState({ drop_down: !this.state.drop_down })
  }
  render() {

    return (
      <Drawer ref={(ref) => { this.drawer = ref; }} content={<SideBar navigation={this.props.navigation} />} onClose={() => this.closeDrawer()}  >

        <ImageBackground source={require("../assets/images/background_image.png")} imageStyle={{ resizeMode: "cover", overlayColor: "grey" }} style={{ flex: 1, alignItems: 'center' }}>
        <View style={{ width: "100%", alignItems: "center", alignContent: "center", borderBottomWidth: 1, borderBottomColor: "#99A49E" }} >
            <View style={{ width: "90%", flexDirection: "row", marginTop: 20 }} >
              <View style={{ width: "15%" }} >
                <TouchableOpacity style={{ paddingTop: 40 }} onPress={() => this.openDrawer()}>
                  <Image style={styles.menu} source={require('../assets/images/icons/menu.png')} />
                </TouchableOpacity>
              </View>
              <View style={{ width: "85%" }} >
                <Image style={styles.image} source={require('../assets/images/transaction_dashboard_logo.png')} />
              </View>
            </View>
          </View>

          <View style={{ width: "100%", marginTop: 30, justifyContent: "center", alignItems: "center", alignContent: "center" }}>
            <View style={{ width: "95%", borderWidth: 3, borderColor: "#99A49E" }}>

              <View style={{ width: "100%", padding: 10, backgroundColor: 'rgba(52, 52, 52, 0.8)' }}>
            

                <View style={{ width: "90%" }}>
                  <Text style={{ color: "#ff9815", fontWeight: "bold", fontSize: 15 }}>OUR TESTIMONIAL</Text>
                </View>
              <View style={{ width: "100%" ,marginTop:10}} >

              <Image
                    style={styles.testimonial_pic}
                    source={require("../assets/images/Assets/Testimonials_image.png")}
                  />
                  </View>
                  <View style={styles.review_icon_container}>
                    <Image
                      style={styles.review_icon}
                      source={require("../assets/images/icons/Reviewpage_icon.png")}
                    ></Image>
                  </View>

                  <Text style={styles.comment_text_container}>
                    "I knew finding a home in New Jersey’s suburbs would be a challenge, but I never realized how hard it would be to keep track of all the homes I was interested in! The Transaction Dashboard helped me to stay organized and keep track of everything until I made my final decision—and I contacted the seller right through the app to move onto our next steps. So much faster than phone calls and emails, I would recommend this to anyone."
                  </Text>

                  <Text style={styles.testimonial_name_heading}>
                  Lonnie C., Sparta, NJ
                  </Text>

                  <Text style={styles.dummy_text}>
                    Loremipsim Dummy
                  </Text>
                  <View style={styles.slider_container}>
                    <Octicons style={styles.slider1} name="primitive-dot" size={20} color="#FB9414" />
                    <Octicons name="primitive-dot" size={20} color="#FFF" />
                    <Octicons style={styles.slider3} name="primitive-dot" size={20} color="#Fff" />
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
    
  menu: {
    width: 15, height: 15, resizeMode: "contain"
  },
  image: {
    width: 250, height: 100, resizeMode: "contain"
  },
            container: {
              width: "100%",
            height: 80,
            marginTop: 40,
            flexDirection: "row",
            borderBottomWidth: 1,
            borderBottomColor: "gray",
  },
            menu_container: {
              width: "15%",
            height: 10,
            alignContent: "center",
            alignItems: "center",
  },
            menu: {
              width: "30%",
            height: 20,
            marginTop: 20,
  },
            logo: {
              width: "100%",
            height: 55,
            resizeMode: "contain",
  },
            logo_container: {width: "65%", height: 50 },
            back_container: {
              width: "100%",
            marginTop: 8,
            borderBottomWidth: 1,
            borderBottomColor: "gray",
            flexDirection: "row",
            paddingVertical: 5,
  },

            transparent: {
              width: "90%",
            backgroundColor: "#272C2C",
            marginLeft: 20,
            marginTop: 20,
            height: 480,
            opacity: 0.5,
  },
            testimonial_pic:{
              width:"90%",height:200,resizeMode:"contain",marginTop:15,marginLeft:14
  },
            review_icon_container: {
              width: "100%",
            marginTop: 20,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
  },
            review_icon: {height: 32, width: "10%" },
            comment_text_container: {
              fontSize: 14,
            fontWeight: "bold",
            color: "#Fff",
            marginTop: 10,
            marginLeft: 12,
            paddingBottom: 10,
            alignItems: "center",
            alignContent: "center",
  },
            body_container:{position:"absolute",marginTop:145,width:"90%",marginLeft:25},
            testimonial_heading:{color:"#FB9414",fontSize:22,fontWeight:"bold"},
            testimonial_name_heading:{color:"#FB9414",fontSize:20,fontWeight:"bold",textAlign:"center"},
            dummy_text:{color:"#Ffff",fontSize:14,textAlign:"center"},
            slider_container:{flexDirection:"row",justifyContent:"center",marginTop:10},
            slider1:{marginRight:7},
            slider3:{marginLeft:7}



});
