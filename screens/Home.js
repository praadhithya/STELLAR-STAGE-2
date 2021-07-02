import React, { Component } from 'react';
import {  Text, View,StyleSheet,TouchableOpacity,ImageBackground,SafeAreaView,StatusBar,Image,Platform } from 'react-native';
export default class HomeScreen extends Component {
    render(){
        return (
        <View style={{
            flex:1,
        }}>
            <Text style={styles.TitleText}>HomeScreen</Text>
            <ImageBackground source={require('../assets/stars.gif')}style={styles.backgroundImage}>
            <TouchableOpacity style = {styles.buttonStyle} onPress={() => this.props.navigation.navigate("DailyPic") } >
             <Text style = {styles.TextStyle}>
             DailyPic
             </Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.buttonStyle} onPress={() => this.props.navigation.navigate("SpaceCrafts") } >
             <Text style = {styles.TextStyle}>
             SpaceCrafts
             </Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.buttonStyle} onPress={() => this.props.navigation.navigate("StarMap") } >
             <Text style = {styles.TextStyle}>
             StarMap
             </Text>
            </TouchableOpacity>
            </ImageBackground>
        
        </View>
        )
    }
}
const styles = StyleSheet.create({
    backgroundImage:{
    flex:100
    },
    buttonStyle : {
    flex : 0.25,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:30,
    marginLeft:50,
    marginRight:50,
    marginTop:50,
    backgroundColor:'white',
    fontSize : 40,
    fontWeight : 'bold',
    color:'black',
    marginTop:75,
    paddingLeft : 20,
    },
    TitleText : {
    alignItems:'center',
    justifyContent:'center',
    borderBottomWidth:20,
    backgroundColor:'red',
    fontSize : 40,
    fontWeight : 'bold',
    paddingLeft : 660,
    },
    TextStyle : {
        fontSize : 40,
        fontWeight : 'bold',
        color:'black',
        marginTop:15,
        paddingLeft : 50,
      },
})
