import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
import { Drawer, } from 'native-base';
import SideBar from '../Includes/Sidebar'
import { Container, Header, Content, ListItem, CheckBox, Body, Tab, Tabs, TabHeading, Item } from 'native-base';
export default class help extends Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      name: "",
      email: "",
      dob: "",
      gender: "",
      address: "",
      zip: "",
      phone: "",
      istab: "info"

    }

  }
  changeTab = (todo) => {
    console.log("todo")
    console.log(todo)
    this.setState({ istab: todo })
  }
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => { this.drawer._root.open() };
  render() {

    return (
      <Drawer ref={(ref) => { this.drawer = ref; }} content={<SideBar navigation={this.props.navigation} />} onClose={() => this.closeDrawer()}>

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

        <TouchableOpacity style={styles.back_container}
        onPress={()=>this.props.navigation.push("OurBuyer")}
        >
          <Ionicons name="chevron-back" size={24} color="black" />
          <Text style={styles.back_page}>Back to main Page</Text>
        </TouchableOpacity>

        <View style={styles.text_container}>
          <Text style={styles.text}>
            Lorem Ipsum Dummy Text Including Lorem
          </Text>
        </View>

        <View style={{ width: "100%", marginTop: 10, backgroundColor: 'rgba(52, 52, 52, 0.8)', alignItems: "center" }}>
          <View style={{ width: "95%", flexDirection: "row", justifyContent: "space-between" }}>
            <TouchableOpacity onPress={() =>{ 
              let tab="info"
              this.changeTab(tab)
            }} 
             style={{ alignItems: "center", marginHorizontal: 5, paddingBottom: 5, borderBottomColor: this.state.istab == "info" ? "#ff9815" : "#fff", borderBottomWidth: 2 }}
            >
              <Text style={{ fontSize: 15, color: this.state.istab == "info" ? "#ff9815" : "#fff", fontWeight: "bold" }}>INFO</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>{ 
              let tab="feed"
              this.changeTab(tab)
            }} 
             style={{ alignItems: "center", marginHorizontal: 5, paddingBottom: 5, borderBottomColor: this.state.istab == "feed" ? "#ff9815" : "#fff", borderBottomWidth: 2 }}>
              <Text style={{ fontSize: 15, color: this.state.istab == "feed" ? "#ff9815" : "#fff", fontWeight: "bold" }}>FEED</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>{ 
              let tab="help"
              this.changeTab(tab)
            }} 
            style={{ alignItems: "center", marginHorizontal: 5, paddingBottom: 5, borderBottomColor: this.state.istab == "help" ? "#ff9815" : "#fff", borderBottomWidth: 2 }}>
              <Text style={{ fontSize: 15, color:this.state.istab == "help" ? "#ff9815" : "#fff", fontWeight: "bold" }}>HELP</Text>
            </TouchableOpacity>
          </View>
        </View>

        {this.state.istab == "info" ? (
          <View style={styles.bar_transparent}>
          <View style={styles.body_container}>
          <View style={styles.inside_body_container}>
            <View style={styles.logo_feedpage}>
              <Image
                style={styles.feedpage_icon}
                source={require("../assets/images/icons/info_status_icon.png")}
              ></Image>
            </View>
            <View style={styles.body_text_container}>
              <Text style={styles.body_text}>LOREM IPSUM DUMMY</Text>
              <Text style={styles.body_text1}>01/13/2022</Text>
              <Text style={styles.body_text2}>
                A new assignment has beenLoremipsim If you have Question or need
                help regarding on issue
              </Text>
            </View>
          </View>
          <View style={styles.inside_body_container}>
            <View style={styles.logo_feedpage}>
              <Image
                style={styles.feedpage_icon}
                source={require("../assets/images/icons/info_status_icon.png")}
              ></Image>
            </View>
            <View style={styles.body_text_container}>
              <Text style={styles.body_text}>LOREM IPSUM DUMMY</Text>
              <Text style={styles.body_text1}>01/13/2022</Text>
              <Text style={styles.body_text2}>
                A new assignment has beenLoremipsim If you have Question or need
                help regarding on issue
              </Text>
            </View>
          </View>
          <View style={styles.help_icon_container}>
            <Image
              style={styles.help_icon1}
              source={require("../assets/images/icons/info_status_icon.png")}
            ></Image>
            <View>
              <Text style={styles.detail4}>LOREM IPSUM DUMMY</Text>
            </View>
          </View>
          <View style={styles.help_icon_container}>
            <Image
              style={styles.help_icon1}
              source={require("../assets/images/icons/info_status_icon.png")}
            ></Image>
            <View>
              <Text style={styles.detail4}>CLEAR TO CLOSE</Text>
            </View>
          </View>
          <View style={styles.help_icon_container}>
            <Image
              style={styles.help_icon1}
              source={require("../assets/images/icons/info_status_icon.png")}
            ></Image>
            <View>
              <Text style={styles.detail4}>CLOSED</Text>
            </View>
          </View>
         
          </View>
          </View>
        ):this.state.istab == "feed" ? (
          <View style={styles.bar_transparent}>
          <View style={styles.body_container}>
          <View style={styles.inside_body_container}>
          <View style={styles.logo_feedpage}>
              <Image
                style={styles.feedpage_icon}
                source={require("../assets/images/icons/Feedpage_icon.png")}
              ></Image>
            </View>
            <View style={styles.body_text_container}>
              <Text style={styles.body_text}>LOREM IPSUM DUMMY</Text>
              <Text style={styles.body_text1}>01/13/2022</Text>
              <Text style={styles.body_text2}>
                A new assignment has been added:
              </Text>
              <Text style={styles.body_text2}>Loan Estimate Available</Text>
            </View>
            </View>
          </View>
          <View style={styles.inside_body_container}>
            <View style={styles.logo_feedpage}>
              <Image
                style={styles.feedpage_icon}
                source={require("../assets/images/icons/Feedpage_icon.png")}
              ></Image>
            </View>
            <View style={styles.body_text_container}>
              <Text style={styles.body_text}>LOREM IPSUM DUMMY</Text>
              <Text style={styles.body_text1}>01/13/2022</Text>
              <Text style={styles.body_text2}>
                A new assignment has been added:
              </Text>
              <Text style={styles.body_text2}>Submitted to Underwritting to Approved by Underwritting</Text>
            </View>
          </View>
          <View style={styles.inside_body_container}>
            <View style={styles.logo_feedpage}>
              <Image
                style={styles.feedpage_icon}
                source={require("../assets/images/icons/Feedpage_icon.png")}
              ></Image>
            </View>
            <View style={styles.body_text_container}>
              <Text style={styles.body_text}>LOREM IPSUM DUMMY</Text>
              <Text style={styles.body_text1}>01/13/2022</Text>
              <Text style={styles.body_text2}>
                A new assignment has been added:
              </Text>
              <Text style={styles.body_text2}>Submitted to Underwritting to Approved by Underwritting</Text>
            </View>
          </View>
          <View style={styles.inside_body_container}>
            <View style={styles.logo_feedpage}>
              <Image
                style={styles.feedpage_icon}
                source={require("../assets/images/icons/Feedpage_icon.png")}
              ></Image>
            </View>
            <View style={styles.body_text_container}>
              <Text style={styles.body_text}>LOREM IPSUM DUMMY</Text>
              <Text style={styles.body_text1}>01/13/2022</Text>
              <Text style={styles.body_text2}>
                A new assignment has been added:
              </Text>
              <Text style={styles.body_text2}>Submitted to Underwritting to Approved by Underwritting</Text>
            </View>
          </View>
            </View>


        ):this.state.istab == "help" ? (
          <View style={styles.bar_transparent}>
          <View style={styles.body_container}>
            <View style={styles.help_icon_container1}>
              <Image
                style={styles.help_icon1}
                source={require("../assets/images/icons/Helppage_icon.png")}
              ></Image>
            </View>

            <Text style={styles.help_text_container}>
              If you have Question or need help regarding on issue with your loan,
              please use the contact information below
            </Text>

            <View style={styles.bottom_bar_container}>
              <Text style={styles.bottom_bar}></Text>
            </View>

            <View style={styles.contact_container}>
              <View style={styles.phone_container}>
                <View style={styles.phone_logo}>
                  <FontAwesome5
                    style={{ marginLeft: 20 }}
                    name="phone-alt"
                    size={14}
                    color="white"
                  />
                </View>

                <View style={styles.phone_div}>
                  <Text style={styles.div_text}>Phone Number</Text>
                  <View style={styles.number_div_container}>
                    <Text style={styles.number_div}>(000)</Text>

                    <Text style={styles.number_digit}>000-0000</Text>
                  </View>
                </View>
              </View>

              <View style={styles.email_container}>
                <View style={styles.email_logo}>
                  <MaterialCommunityIcons
                    name="email-outline"
                    size={19}
                    color="white"
                  />
                </View>
                <View style={styles.email_div_container}>
                  <Text style={styles.email_address}>Email Address</Text>
                  <View style={styles.email_address_container}>
                    <Text style={styles.email_address_text}>info@gmail.com</Text>
                  </View>
                </View>
              </View>

            </View>
          </View>

          </View>

          
        ):null}
        

       
                      


        </ImageBackground>
      </Drawer>

    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 250, height: 100, resizeMode: "contain"
  },
  backgroungImage: {
    flex: 1,
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
    width: 15, height: 15, resizeMode: "contain"
  },
  logo: {
    width: "100%",
    height: 55,
    resizeMode: "contain",
  },
  logo_container: { width: "65%", height: 50 },
  back_container: {
    width: "100%",
    marginTop: 8,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    flexDirection: "row",
    paddingVertical: 5,
  },
  back_page: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    marginTop: 0,
    marginLeft: 12,
  },
  text_container: {
    width: "100%",
    marginTop: 8,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    flexDirection: "row",
    paddingVertical: 15,
    backgroundColor: "#FB9414",
  },
  text: { fontSize: 16, color: "#000", marginLeft: 12, fontWeight: "bold" },
  bar_transparent: {
    width: "100%",
    backgroundColor: 'transparent',
    marginTop:10,
   alignItems:"center"

    // height: 30,
    // opacity: 0.7,
  },
  bar_container: {
    width: "100%",
    marginTop: 8,
    borderBottomWidth: 2,
    borderBottomColor: "#FB9414",
    flexDirection: "row",
    paddingVertical: 5,
    position: "absolute",
    marginTop: 5
  },
  bar_info: { width: "35%", fontSize: 18, color: "#fff", marginLeft: 12 },
  bar_feed: { width: "30%", fontSize: 18, color: "#fff", marginLeft: 35 },
  bar_help: {
    width: "15%",
    fontSize: 18,
    color: "#fff",
    marginLeft: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#Fff",
  },
  transparent: {
    width: "90%",
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    marginLeft: 20,
    marginTop: 20,
    height: 420,
    opacity: 0.5,
  },
  body_container: {
    width: "95%",
    height:screenHeight,
    padding: 10, backgroundColor: 'rgba(52, 52, 52, 0.8)'
  },
  help_icon_container1: {
    width: "100%",
    marginTop: 20,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  help_icon1: { height: 20, width: 20 },
  help_text_container: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#Fff",
    marginTop: 15,
    marginLeft: 12,
    paddingBottom: 10,
    alignItems: "center",
    alignContent: "center",
  },
  bottom_bar_container: { width: "90%", marginLeft: 20 },
  bottom_bar: {
    borderTopWidth: 2,
    borderTopColor: "#666C6E",
    alignItems: "center",
    alignContent: "center",
  },
  contact_container: { width: "100%", flexDirection: "row" },
  phone_container: {
    width: "50%",
    borderRightWidth: 2,
    borderRightColor: "#666C6E",
    flexDirection: "row",
  },
  phone_logo: {
    width: "20%",
    marginTop: 10,
    alignContent: "center",
    alignItems: "center",
  },
  phone_div: { width: "80%", marginTop: 1 },
  div_text: {
    fontSize: 14,
    textAlign: "center",
    alignContent: "center",
    color: "#FB9414",
  },
  number_div_container: {
    marginTop: 1,
    flexDirection: "row",
    width: "100%",
    marginLeft: 20,
    alignItems:"center"
  },
  number_div: {
    fontSize: 12,
    textAlign: "center",
    alignContent: "center",
    color: "#FB9414",
  },
  number_digit: {
    fontSize: 12,
    textAlign: "center",
    alignContent: "center",
    color: "#fff",
  },
  email_container: { width: "50%", flexDirection: "row" },
  email_logo: { width: "20%", marginTop: 10, paddingHorizontal: 5 },
  email_div_container: { width: "80%", marginTop: 1 },
  email_address: { fontSize: 14, color: "#FB9414" },
  // email_address:{flexDirection:"row",width:"100%"},
  email_address_text: { fontSize: 12, color: "#fff" },
  logo_feedpage: { width: "9%", marginLeft: 10, marginTop: 10 },
  body_text_container: { width: "82%", marginLeft: 8, marginTop: 5 },
  body_text: { color: "#FB9414", fontSize: 14, fontWeight: "bold" },
  body_text1: { color: "#Fff", fontSize: 12, marginBottom: 4 },
  body_text2: { color: "#Fff", fontSize: 12 },
  feedpage_icon: {
    width: 20,
    height: 20,
    resizeMode:"cover"
  },
  inside_body_container: {
    width: "90%",
    marginLeft: 10,
    borderBottomColor: "#7F7F7F",
    paddingBottom: 5,
    borderBottomWidth: 1,
    flexDirection: "row",
  },
  help_icon_container: {
    width: "100%",
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "flex-start",
    marginLeft: 22,
  },
  help_icon: { width: "7%", height: 22 },
  help_icon1: { borderRadius: 50, height: 22, width: "7%" },
  detail4: {
    width: "100%",
    color: "#Ffff",
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 10,
    opacity: 0.4,
  },
});
