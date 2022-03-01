import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Image, StyleSheet, Picker, Dimensions, LogBox,ImageBackground, TextInput, Linking, AsyncStorage
} from 'react-native';
import { Ionicons, EvilIcons, MaterialIcons, Entypo, FontAwesome5, AntDesign,SimpleLineIcons } from '@expo/vector-icons';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
// import { URL } from '../constants/API'
LogBox.ignoreAllLogs(true)

export default class Restaurant_Sidebar extends Component {
  // const [started, setStarted] = useState(false)
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      auth:"",
      restaurant_name:""

    }

  }
  authentication = () => {
    this.setState({
      auth: !this.state.auth
    });
  }    
  logout = () => {
    AsyncStorage.clear();
    this.props.navigation.push('welcome');

  }
  async componentDidMount() {
    AsyncStorage.getItem("userID").then(user_data => {
      const val = JSON.parse(user_data);
     
      if (val) {
        this.setState({restaurant_id:val.data.id,restaurant_name:val.data.first_name})
      }
      console.log(">>>>>>>>>>")
    console.log(this.state.restaurant_id)
   
    });
 
  }

  render() {
    return (

      <View style={{ flex: 1, alignItems: "center", backgroundColor: "#fff" }}>
       <View style={{ width: "100%",flexDirection:"row", }}>  
      
        <View style={{ width: "70%",  }}>

        <Text style={{ fontWeight: "bold", fontSize: 30, marginLeft:10,marginTop:85,color: "#C93434"}}>{this.state.restaurant_name}</Text>
</View>
  
       
          </View>

          {/* <View style={{ width: "100%", marginLeft:150,marginTop:120,position:"absolute" }}>  
        <View style={{width:"35%",backgroundColor: "#D6FBDb", borderRadius:5,paddingBottom:2, marginLeft:80,}}> 
        <Text style={{ color: '#10B128', textAlign: "center", marginTop: 2, fontSize: 11, fontWeight: "bold" }}>Ready for orders</Text>
        </View> 
          </View> */}
{this.state.auth ? (
  <TouchableOpacity style={{ width: "90%", marginTop: 40, paddingBottom: 10, paddingLeft: 15, borderBottomWidth: 1, borderColor: "#E3E3E3" }} onPress={() => this.props.navigation.navigate('login')}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#1294D0 " }}>Sign In</Text>
        </TouchableOpacity>
):(
  <TouchableOpacity style={{ width: "90%", marginTop: 30, paddingBottom: 10, paddingLeft: 1, borderBottomWidth: 1, borderColor: "#E3E3E3",flexDirection:"row" }} onPress={() => this.props.navigation.navigate('restaurant_dashboard')} >
    <Ionicons name="home-outline" size={20} color="black" />
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#393939" ,marginLeft:15}}>Home</Text>
        </TouchableOpacity>
)
}
        
        <TouchableOpacity style={{ width: "90%", marginTop: 30, paddingBottom: 10, paddingLeft: 1, borderBottomWidth: 1, borderColor: "#E3E3E3",flexDirection:"row" }} onPress={() => this.props.navigation.navigate('restaurant_statistics')} >
        <Ionicons name="stats-chart-outline" size={20} color="black" />
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#393939" ,marginLeft:15}}>Statistics</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ width: "90%", marginTop: 30, paddingBottom: 10, paddingLeft: 1, borderBottomWidth: 1, borderColor: "#E3E3E3",flexDirection:"row" }} onPress={() => this.props.navigation.navigate('change_password')} >
        <MaterialIcons name="lock-outline" size={19} color="#393939" />
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#393939" ,marginLeft:15}}>Change Password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ width: "90%", marginTop: 30, paddingBottom: 10, paddingLeft: 1, borderBottomWidth: 1, borderColor: "#E3E3E3",flexDirection:"row" }} onPress={() => this.props.navigation.navigate('rider_receipts')} >
        <Ionicons name="receipt-outline"  size={20} color="black" />
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#393939" ,marginLeft:15}}>My Receipt</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ width: "90%", marginTop: 30, paddingBottom: 10, paddingLeft: 1, borderBottomWidth: 1, borderColor: "#E3E3E3",flexDirection:"row" }} onPress={() => this.props.navigation.navigate('profile')} >
        <MaterialIcons name="receipt-long"  size={20} color="black" />
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#393939" ,marginLeft:15}}>Term & Conditions</Text>
        </TouchableOpacity>
       
       
        <TouchableOpacity style={{ width: "90%", marginTop: 30,  paddingLeft: 1,flexDirection:"row" }}
         onPress={() => this.logout()} >
        <SimpleLineIcons name="logout" size={21} color="#C93434" />
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#C93434" ,marginLeft:15}}>Log out</Text>
        </TouchableOpacity>
        
      </View>


    );
  }

}
const styles = StyleSheet.create({
  pic: {


    height: 250,
    width: "100%",


  },
  login_button: {
    width: "90%",

    marginTop: 10,
    paddingVertical: 13,
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#808080",
    borderRadius: 10
  },
  facebook: {

    width: "90%",

    marginTop: 30,
    paddingVertical: 13,
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#005f9A",
    borderRadius: 10
  },
});