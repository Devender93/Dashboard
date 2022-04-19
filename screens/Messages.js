import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Image,ScrollView, style, StyleSheet, Picker, LogBox, Dimensions, ImageBackground, TextInput, Alert, AsyncStorage, Modal,
} from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
import { Drawer, } from 'native-base';
import SideBar from '../Includes/Sidebar'
LogBox.ignoreAllLogs(true)
import ToggleSwitch from 'toggle-switch-react-native'
export default class Messages extends Component {
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

          <View style={{ width: "100%", marginTop: 20, justifyContent: "center", alignItems: "center", alignContent: "center" }}>
            <View style={{ width: "95%", borderWidth: 3, borderColor: "#99A49E" }}>

              <View style={{ width: "100%", padding: 10, backgroundColor: 'rgba(52, 52, 52, 0.8)' }}>
                <View style={{ width: "90%" }}>
                  <Text style={{ color: "#ff9815", fontWeight: "bold", fontSize: 15 }}>Messages</Text>
                </View>
                <View style={{ width: "100%", paddingTop: 5 }}>
                  <Text style={{ color: "#fff", fontSize: 12 }}>Have an important message for your seller? Need to inform a buyer about a new development? Communicate with all the members of your real estate team with ease.
                  </Text>
                </View>
                <View style={{ width: "100%", alignItems: "center", alignContent: "center" }}>
         
            <ScrollView 
             showsVerticalScrollIndicator={false} style={{ width: "97%" }}>
                <View style={{ width: "100%", paddingTop: 5,alignItems:"center" }}>
                  <View style={{ width: "90%", marginTop: 20, flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#99A49E", paddingBottom: 15 }}>
                    <View style={{ width: "10%", marginHorizontal: 5,paddingTop:2 }}>
                    <Image style={styles.menu} source={require('../assets/images/icons/messages-icon.png')} />
                    </View>
                    <View style={{ width: "90%" }}>
                    <Text style={{ color: "#ff9815", fontSize: 12 }}>LOREM IPSUM DUMMY</Text>
                    <Text style={{ color: "#fff", fontSize: 10 }}>01/03/2022</Text>
                    <Text style={{ color: "#fff", fontSize: 10,paddingTop:5 }}>LOREM IPSUM DUMMY TEXT</Text>
                    <Text style={{ color: "#fff", fontSize: 10 }}>LOREM IPSUM DUMMY RECORDINGTEXT</Text>
                    </View>
                  </View>
                </View>
                <View style={{ width: "100%", paddingTop: 5,alignItems:"center" }}>
                  <View style={{ width: "90%", marginTop: 20, flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#99A49E", paddingBottom: 15 }}>
                    <View style={{ width: "10%", marginHorizontal: 5,paddingTop:2 }}>
                    <Image style={styles.menu} source={require('../assets/images/icons/messages-icon.png')} />
                    </View>
                    <View style={{ width: "90%" }}>
                    <Text style={{ color: "#ff9815", fontSize: 12 }}>LOREM IPSUM DUMMY</Text>
                    <Text style={{ color: "#fff", fontSize: 10 }}>01/03/2022</Text>
                    <Text style={{ color: "#fff", fontSize: 10,paddingTop:5 }}>LOREM IPSUM DUMMY TEXT</Text>
                    <Text style={{ color: "#fff", fontSize: 10 }}>LOREM IPSUM DUMMY RECORDINGTEXT</Text>
                    </View>
                  </View>
                </View>
                <View style={{ width: "100%", paddingTop: 5,alignItems:"center" }}>
                  <View style={{ width: "90%", marginTop: 20, flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#99A49E", paddingBottom: 15 }}>
                    <View style={{ width: "10%", marginHorizontal: 5,paddingTop:2 }}>
                    <Image style={styles.menu} source={require('../assets/images/icons/messages-icon.png')} />
                    </View>
                    <View style={{ width: "90%" }}>
                    <Text style={{ color: "#ff9815", fontSize: 12 }}>LOREM IPSUM DUMMY</Text>
                    <Text style={{ color: "#fff", fontSize: 10 }}>01/03/2022</Text>
                    <Text style={{ color: "#fff", fontSize: 10,paddingTop:5 }}>LOREM IPSUM DUMMY TEXT</Text>
                    <Text style={{ color: "#fff", fontSize: 10 }}>LOREM IPSUM DUMMY RECORDINGTEXT</Text>
                    </View>
                  </View>
                </View>
                <View style={{ width: "100%", paddingTop: 5,alignItems:"center" }}>
                  <View style={{ width: "90%", marginTop: 20, flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#99A49E", paddingBottom: 15 }}>
                    <View style={{ width: "10%", marginHorizontal: 5,paddingTop:2 }}>
                    <Image style={styles.menu} source={require('../assets/images/icons/messages-icon.png')} />
                    </View>
                    <View style={{ width: "90%" }}>
                    <Text style={{ color: "#ff9815", fontSize: 12 }}>LOREM IPSUM DUMMY</Text>
                    <Text style={{ color: "#fff", fontSize: 10 }}>01/03/2022</Text>
                    <Text style={{ color: "#fff", fontSize: 10,paddingTop:5 }}>LOREM IPSUM DUMMY TEXT</Text>
                    <Text style={{ color: "#fff", fontSize: 10 }}>LOREM IPSUM DUMMY RECORDINGTEXT</Text>
                    </View>
                  </View>
                </View>
                <View style={{ width: "100%", paddingTop: 5,alignItems:"center" }}>
                  <View style={{ width: "90%", marginTop: 20, flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#99A49E", paddingBottom: 15 }}>
                    <View style={{ width: "10%", marginHorizontal: 5,paddingTop:2 }}>
                    <Image style={styles.menu} source={require('../assets/images/icons/messages-icon.png')} />
                    </View>
                    <View style={{ width: "90%" }}>
                    <Text style={{ color: "#ff9815", fontSize: 12 }}>LOREM IPSUM DUMMY</Text>
                    <Text style={{ color: "#fff", fontSize: 10 }}>01/03/2022</Text>
                    <Text style={{ color: "#fff", fontSize: 10,paddingTop:5 }}>LOREM IPSUM DUMMY TEXT</Text>
                    <Text style={{ color: "#fff", fontSize: 10 }}>LOREM IPSUM DUMMY RECORDINGTEXT</Text>
                    </View>
                  </View>
                </View>
                <View style={{ width: "100%", paddingTop: 5,alignItems:"center" }}>
                  <View style={{ width: "90%", marginTop: 20, flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#99A49E", paddingBottom: 15 }}>
                    <View style={{ width: "10%", marginHorizontal: 5,paddingTop:2 }}>
                    <Image style={styles.menu} source={require('../assets/images/icons/messages-icon.png')} />
                    </View>
                    <View style={{ width: "90%" }}>
                    <Text style={{ color: "#ff9815", fontSize: 12 }}>LOREM IPSUM DUMMY</Text>
                    <Text style={{ color: "#fff", fontSize: 10 }}>01/03/2022</Text>
                    <Text style={{ color: "#fff", fontSize: 10,paddingTop:5 }}>LOREM IPSUM DUMMY TEXT</Text>
                    <Text style={{ color: "#fff", fontSize: 10 }}>LOREM IPSUM DUMMY RECORDINGTEXT</Text>
                    </View>
                  </View>
                </View>
                <View style={{ width: "100%", paddingTop: 5,alignItems:"center" }}>
                  <View style={{ width: "90%", marginTop: 20, flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#99A49E", paddingBottom: 15 }}>
                    <View style={{ width: "10%", marginHorizontal: 5,paddingTop:2 }}>
                    <Image style={styles.menu} source={require('../assets/images/icons/messages-icon.png')} />
                    </View>
                    <View style={{ width: "90%" }}>
                    <Text style={{ color: "#ff9815", fontSize: 12 }}>LOREM IPSUM DUMMY</Text>
                    <Text style={{ color: "#fff", fontSize: 10 }}>01/03/2022</Text>
                    <Text style={{ color: "#fff", fontSize: 10,paddingTop:5 }}>LOREM IPSUM DUMMY TEXT</Text>
                    <Text style={{ color: "#fff", fontSize: 10 }}>LOREM IPSUM DUMMY RECORDINGTEXT</Text>
                    </View>
                  </View>
                </View>
       </ScrollView>

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
  buyer_seller: {
    width: "100%", height: 200, resizeMode: "contain"
  },

  box: {

    width: 130,
    height: 130,
    borderRadius: 80
    , borderWidth: 3, borderColor: "#fff",
    // position:"absolute"


  },
  SignUp_button: {
    width: "80%",
    marginTop: 15,
    paddingVertical: 5,
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#fff",
    backgroundColor: "#202020",
    borderWidth: 1
  },
});