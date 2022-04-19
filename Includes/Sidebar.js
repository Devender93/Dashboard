import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Image, StyleSheet, Picker, Dimensions,LogBox ,ImageBackground, TextInput, Linking,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import { URL } from '../constants/API'
LogBox.ignoreAllLogs(true)


export default class SideBar extends Component {
  // const [started, setStarted] = useState(false)
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      auth:"",
      first_name:"",
      last_name:"",

    }

  }
  authentication = () => {
    this.setState({
      auth: !this.state.auth
    });
  }    
  logout = () => {
    AsyncStorage.removeItem("user_data");
    this.props.navigation.reset({
      index: 0,
      routes: [{ name: 'splash' }],
    });

  }
   componentDidMount() {
  
 
  }

  render() {
    return (

      <View style={{ flex: 1, alignItems: "center", backgroundColor: "#4b89dc" }}>
       <View style={{ width: "100%",flexDirection:"row", }}>  
  
        <View style={{ width: "50%",alignItems:"center",marginTop:50  }}>

        <View style={styles.box} >

    <Image style={{ width: "100%", height: "100%", resizeMode: "cover", borderRadius: 80 }} source={require('../assets/images/Assets/Testimonials_image.png')} />
  <TouchableOpacity style={{ position: "absolute", bottom: 2, right: -5, borderWidth: 1, borderColor: "#fff", borderRadius: 50, padding: 6, backgroundColor: "#F0F0F0" }} 
  >

<Image style={styles.menu} source={require('../assets/images/icons/via_email.png')} />
  </TouchableOpacity>
</View>
</View>
  
<TouchableOpacity style={{ width: "50%",marginTop:80,marginHorizontal:8 }} 

onPress={() => this.props.navigation.push('help')} >

<Text style={{ fontSize: 18, fontWeight: "bold", color: "#ffffff" }}>Doreen julye</Text>
          <Text style={{ fontSize: 12, color: "#ffffff" ,paddingTop:10}}>Lorem ipsum dumy</Text>
        </TouchableOpacity>
       
          </View>

      

  <TouchableOpacity style={{ width: "70%", marginTop: 30, paddingBottom: 10, paddingLeft: 1, borderBottomWidth: 1, borderColor: "#E3E3E3",flexDirection:"row" }}
   onPress={() => this.props.navigation.push('OurBuyer')} >
  <Image style={styles.menu} source={require('../assets/images/icons/home.png')} />
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#ffffff" ,marginLeft:15}}>Home</Text>
        </TouchableOpacity>

        
        <TouchableOpacity style={{ width: "70%", marginTop: 10, paddingBottom: 10, paddingLeft: 1, borderBottomWidth: 1, borderColor: "#E3E3E3",flexDirection:"row" }} 
        onPress={() => this.props.navigation.push('Work')} >
        <Image style={styles.menu} source={require('../assets/images/icons/how-it-works-icon.png')} />

          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#ffffff" ,marginLeft:15}}>How it Works</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ width: "70%", marginTop: 20, paddingBottom: 10, paddingLeft: 1, borderBottomWidth: 1, borderColor: "#E3E3E3",flexDirection:"row" }}
         onPress={() => this.props.navigation.push('Testimonial')} >
        <Image style={styles.menu} source={require('../assets/images/icons/review_icon.png')} />

          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#ffffff" ,marginLeft:15}}>Client Reviews</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ width: "70%", marginTop: 20, paddingBottom: 10, paddingLeft: 1, borderBottomWidth: 1, borderColor: "#E3E3E3",flexDirection:"row" }}
         onPress={() => this.props.navigation.push('Messages')} >
        <Image style={styles.menu} source={require('../assets/images/icons/messages-icon.png')} />
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#ffffff" ,marginLeft:15}}>Messages</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ width: "70%", marginTop: 20, paddingBottom: 10, paddingLeft: 1, borderBottomWidth: 1, borderColor: "#E3E3E3",flexDirection:"row" }} 
        onPress={() => this.props.navigation.push('EditProfile')} 
        // onPress={() => this.props.navigation.push('Profile')} 
        >
        <Image style={styles.menu} source={require('../assets/images/icons/profile.png')} />
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#ffffff" ,marginLeft:15}}>Profile</Text>
        </TouchableOpacity>
       
        <TouchableOpacity style={{ width: "70%", marginTop: 20, paddingBottom: 10, paddingLeft: 1, borderBottomWidth: 1, borderColor: "#E3E3E3",flexDirection:"row" }} 
        onPress={() => this.props.navigation.push('AppSetting')} >
        <Image style={styles.menu} source={require('../assets/images/icons/setting.png')} />
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#ffffff" ,marginLeft:15}}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: "70%", marginTop: 20, paddingBottom: 10, paddingLeft: 1, borderBottomWidth: 1, borderColor: "#E3E3E3",flexDirection:"row" }}
         onPress={() => this.props.navigation.push('OurSeller')} >
        <Image style={styles.menu} source={require('../assets/images/icons/setting.png')} />
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#ffffff" ,marginLeft:15}}>OurSeller</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: "70%", marginTop: 20, paddingBottom: 10, paddingLeft: 1, borderBottomWidth: 1, borderColor: "#E3E3E3",flexDirection:"row" }} 
        onPress={() => this.props.navigation.push('OurStory')} >
        <Image style={styles.menu} source={require('../assets/images/icons/setting.png')} />
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#ffffff" ,marginLeft:15}}>OurStory</Text>
        </TouchableOpacity>


        <TouchableOpacity style={{ width: "70%", marginTop: 20, paddingBottom: 10, paddingLeft: 1,flexDirection:"row" }}
         onPress={() => this.logout()} >
        <Image style={styles.menu} source={require('../assets/images/icons/logout.png')} />
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#ffffff" ,marginLeft:15}}>Log Out</Text>
        </TouchableOpacity>
       
      
        
      </View>


    );
  }

}
const styles = StyleSheet.create({
 
  menu:{
    width: 20, height: 20,resizeMode:"contain"
  },
  box: {

    width: 130,
    height: 130,
    borderRadius: 80
    , borderWidth: 3, borderColor: "#fff",
    // position:"absolute"


  },
 
});