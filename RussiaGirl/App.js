import { View, Text, SafeAreaView, StyleSheet, Platform, StatusBar, Image, ScrollView } from 'react-native'
import React from 'react'
import {MaterialCommunityIcons,Entypo} from 'react-native-vector-icons';



export default function App() {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
      <View style={style.bubu1}>
      <Text style={style.kuttu1}>Добрый Вечер</Text>
      <MaterialCommunityIcons name = "ticket-percent" style={style.icon1}></MaterialCommunityIcons>
      <Image style={style.Poto1} source={require("./assets/pr.png")}/>
      </View>

      <View style={style.bubu2}>
        <View style={style.box1}><Text style={style.boxtxt}>Товч ном</Text><Entypo name="triangle-right" style={style.boxicon}></Entypo></View>
        <View style={style.box2}><Text style={style.boxtxt}>Аудио ном</Text></View>
        <View style={style.box3}><Text style={style.boxtxt}>Цахим ном</Text></View>
        <View style={style.box4}><Text style={style.boxtxt}>Подкаст</Text></View>
      </View>

      <View style={style.bubu3}>
        <Text style={style.txt2}>Шөнө</Text>
        <Text style={style.txt3}>Энэ 7 хоногийн онцлох</Text>
        <Image source={require('./assets/sky.png')} style={style.Poto2}></Image>
      </View>
      </ScrollView>
      </SafeAreaView>
  )
}


const style = StyleSheet.create({
   container:{
    flex:1,
    backgroundColor:"#f5deb3",
    paddingTop: Platform.OS === "web" ? StatusBar.currentHeight :0,
   },
   bubu1:{
     height:50,
     borderWidth:1,
     alignItems:"center",
     flexDirection:'row',
   },
   kuttu1:{
    fontSize:25,
    fontWeight: "bold",
    marginLeft:20,
   },
   icon1:{
    fontSize: 35,
    color: 'blue',
    marginLeft: 100,
   },
   Poto1: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginLeft: 10,
   },
   bubu2:{
     height: 250,
     backgroundColor: "mintcream",
     borderRadius: 20,
     flexDirection:'row',
     flexWrap: "wrap",
     justifyContent: "center",
     alignItems: "center",
   },
   box1:{
    width: 150,
    height: 90,
    backgroundColor: "silver",
    borderRadius: 20,
    margin:10,
   },
   box2:{
    width: 150,
    height:90,
    backgroundColor: "chocolate",
    borderRadius: 20,
    margin:10,
   },
   box3:{
    width: 150,
    height:90,
    backgroundColor: "cornflowerblue",
    borderRadius: 20,
    margin:10,
   },
   box4:{
    width: 150,
    height:90,
    backgroundColor: "darkorange",
    borderRadius: 20,
    margin:10,
   },
   boxtxt:{
    fontSize:20,
    fontWeight: 700,
    margin:10,
  },
  boxicon:{
    fontSize: 35,
    color: "firebrick",
  },
  bubu3:{
    width:350,
    height:700,
    backgroundColor: "white",
    borderRadius:20,
    margin:14,
  },
  txt2:{
    fontSize:15,
    color:'gray',
    textTransfrom: 'uppercase',
    marginLeft:20,
  },
  txt3:{
    fontSize:35,
    fontWeight: 'bold',
    marginLeft:20,
  },
  Poto2:{
    width: '100%',
    resizeMode: "stretch",
    flex:1,
  },
  
})