import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Image, style, StyleSheet, Picker, LogBox, Dimensions, ImageBackground, TextInput, Alert, AsyncStorage, Modal,
} from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
import { Drawer, } from 'native-base';
import SideBar from '../Includes/Sidebar'
LogBox.ignoreAllLogs(true)
import ToggleSwitch from 'toggle-switch-react-native'
export default class Profile extends Component {
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
                  <Text style={{ color: "#ff9815", fontWeight: "bold", fontSize: 15 }}>PROFILE</Text>
                </View>
                <View style={{ width: "100%", paddingTop: 5 }}>
                  <Text style={{ color: "#fff", fontSize: 12 }}>Denzel Hayes Washington Jr. (born December 28, 1954) is an American actor, director,
                    and producer. Known for his performances on the screen and stage, he has been described as an actor
                    who reconfigured "the concept of classic movie
                  </Text>
                </View>
                <View style={{ width: "100%", alignItems: "center", marginTop: 20 }}>

                  <View style={styles.box} >

                    <Image style={{ width: "100%", height: "100%", resizeMode: "cover", borderRadius: 80 }} source={require('../assets/images/Assets/Testimonials_image.png')} />
                    <TouchableOpacity style={{ position: "absolute", bottom: 2, right: -5, borderWidth: 1, borderColor: "#fff", borderRadius: 50, padding: 6, backgroundColor: "#F0F0F0" }}
                      onPress={() => this.pickImage()}>

                      <Image style={styles.menu} source={require('../assets/images/icons/Edit_icon.png')} />
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={{ width: "100%", paddingTop: 5 }}>
                  <View style={{ width: "90%", marginTop: 20, flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#ff9815", paddingBottom: 3 }}>
                    <View style={{ width: "30%", marginHorizontal: 5, justifyContent: "center" }}>
                      <Text style={{ fontWeight: "bold", fontSize: 12, color: "#ff9815" }}>
                        Name
                      </Text>
                    </View>
                    <View style={{ width: "70%", justifyContent: "center" }}>
                      <TextInput
                        style={{
                          color: "#fff",
                          fontSize: 12,
                          paddingHorizontal: 15,
                          fontWeight: "bold"
                        }}
                        keyboardType="email-address"
                        placeholder={": Name"}
                        placeholderTextColor="#fff"
                        onChangeText={(name) => this.setState({ name })}
                        value={this.state.name}
                      />
                    </View>
                  </View>
                </View>
                <View style={{ width: "100%", marginTop: 10 }}>
                  <View style={{ width: "90%", flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#ff9815", paddingBottom: 3 }}>
                    <View style={{ width: "30%", marginHorizontal: 5, justifyContent: "center" }}>
                      <Text style={{ fontWeight: "bold", fontSize: 12, color: "#ff9815" }}>
                        Email Address
                      </Text>
                    </View>
                    <View style={{ width: "70%", justifyContent: "center" }}>
                      <TextInput
                        style={{
                          color: "#fff",
                          fontSize: 12,
                          paddingHorizontal: 15,
                          fontWeight: "bold"
                        }}
                        keyboardType="email-address"
                        placeholder={": Email Address"}
                        placeholderTextColor="#fff"
                        onChangeText={(email) => this.setState({ email })}
                        value={this.state.email}
                      />
                    </View>
                  </View>
                </View>
                <View style={{ width: "100%", marginTop: 10 }}>
                  <View style={{ width: "90%", flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#ff9815", paddingBottom: 3 }}>
                    <View style={{ width: "30%", marginHorizontal: 5, justifyContent: "center" }}>
                      <Text style={{ fontWeight: "bold", fontSize: 12, color: "#ff9815" }}>
                        Date of Birth
                      </Text>
                    </View>
                    <View style={{ width: "70%", justifyContent: "center" }}>
                      <TextInput
                        style={{
                          color: "#fff",
                          fontSize: 12,
                          paddingHorizontal: 15,
                          fontWeight: "bold"
                        }}
                        keyboardType="email-address"
                        placeholder={": DD/MM/YYYY"}
                        placeholderTextColor="#fff"
                        onChangeText={(dob) => this.setState({ dob })}
                        value={this.state.dob}
                      />
                    </View>
                  </View>
                </View>
                <View style={{ width: "100%", marginTop: 10 }}>
                  <View style={{ width: "90%", flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#ff9815", paddingBottom: 3 }}>
                    <View style={{ width: "30%", marginHorizontal: 5, justifyContent: "center" }}>
                      <Text style={{ fontWeight: "bold", fontSize: 12, color: "#ff9815" }}>
                        Gender
                      </Text>
                    </View>
                    <View style={{ width: "70%", justifyContent: "center" }}>
                      <TextInput
                        style={{
                          color: "#fff",
                          fontSize: 12,
                          paddingHorizontal: 15,
                          fontWeight: "bold"
                        }}
                        keyboardType="email-address"
                        placeholder={": Gender"}
                        placeholderTextColor="#fff"
                        onChangeText={(gender) => this.setState({ gender})}
                        value={this.state.gender}
                      />
                    </View>
                  </View>
                </View>
                <View style={{ width: "100%", marginTop: 10 }}>
                  <View style={{ width: "90%", flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#ff9815", paddingBottom: 3 }}>
                    <View style={{ width: "30%", marginHorizontal: 5, justifyContent: "center" }}>
                      <Text style={{ fontWeight: "bold", fontSize: 12, color: "#ff9815" }}>
                        Address
                      </Text>
                    </View>
                    <View style={{ width: "70%", justifyContent: "center" }}>
                      <TextInput
                        style={{
                          color: "#fff",
                          fontSize: 12,
                          paddingHorizontal: 15,
                          fontWeight: "bold"
                        }}
                        keyboardType="email-address"
                        placeholder={": Address"}
                        placeholderTextColor="#fff"
                        onChangeText={(address) => this.setState({ address })}
                        value={this.state.address}
                      />
                    </View>
                  </View>
                </View>
                <View style={{ width: "100%", marginTop: 10 }}>
                  <View style={{ width: "90%", flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#ff9815", paddingBottom: 3 }}>
                    <View style={{ width: "30%", marginHorizontal: 5, justifyContent: "center" }}>
                      <Text style={{ fontWeight: "bold", fontSize: 12, color: "#ff9815" }}>
                        Zip
                      </Text>
                    </View>
                    <View style={{ width: "70%", justifyContent: "center" }}>
                      <TextInput
                        style={{
                          color: "#fff",
                          fontSize: 12,
                          paddingHorizontal: 15,
                          fontWeight: "bold"
                        }}
                        keyboardType="email-address"
                        placeholder={": Zip Code"}
                        placeholderTextColor="#fff"
                        onChangeText={(email) => this.setState({ email })}
                        value={this.state.email}
                      />
                    </View>
                  </View>
                </View>
                <View style={{ width: "100%", marginTop: 10 }}>
                  <View style={{ width: "90%", flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#ff9815", paddingBottom: 3 }}>
                    <View style={{ width: "30%", marginHorizontal: 5, justifyContent: "center" }}>
                      <Text style={{ fontWeight: "bold", fontSize: 12, color: "#ff9815" }}>
                        Phone Number
                      </Text>
                    </View>
                    <View style={{ width: "70%", justifyContent: "center" }}>
                      <TextInput
                        style={{
                          color: "#fff",
                          fontSize: 12,
                          paddingHorizontal: 15,
                          fontWeight: "bold"
                        }}
                        keyboardType="email-address"
                        placeholder={": Phone Number"}
                        placeholderTextColor="#fff"
                        onChangeText={(phone) => this.setState({ phone })}
                        value={this.state.phone}
                      />
                    </View>
                  </View>
                </View>
                <View style={{width:"100%",alignItems:"center",paddingBottom:10}}>

<TouchableOpacity style={styles.SignUp_button} 
// onPress={() => this.submit()}
>
  <View style={{alignItems:"center"}}>
  <Text style={{ color:"#ff9815",fontWeight:"bold",textAlign:"center",fontSize:18 }}>UPDATE</Text>
 
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
  menu: {
    width: 20, height: 20, resizeMode: "contain"
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