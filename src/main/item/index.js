import React, {Component} from 'react';
import {Platform,Image,TouchableOpacity, StyleSheet, Text, View, ScrollView} from 'react-native';


export default class Item extends Component{
    render() {
      const {name, status}=this.props
      const {toggleStatusItem, deleteItem, editItem} =  this.props
      const check=status?require('../../assets/success.png')
      :require('../../assets/pending.png')
    return ( 
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.checkContainer} 
          onPress={toggleStatusItem} >
          <Image source={check} style={styles.checkImage}/>
        </TouchableOpacity>
        <Text style={styles.nameStyle}>{name}</Text>
        <TouchableOpacity 
          style={styles.buttonContainer} 
          onPress={deleteItem} >
          <Image 
            source={require('../../assets/trash.png')} 
            style={styles.buttomImage}/>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.buttonContainer} 
          onPress={editItem} >
          <Image 
            source={require('../../assets/edit.png')} 
            style={styles.buttomImage}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    flex:1,
    justifyContent: 'flex-start',
    alignItems:'center',
    flexDirection:'row',
    borderColor:'rgba(100,100,100,0.5)',
    borderBottomWidth:2,
  },
  checkContainer:{
    padding: 20
  },
  checkImage:{
    width:30,
    height:30
  },
  nameStyle:{
    flex:1,
    fontFamily:"Montserrat-Medium", 
    fontSize:18
  },
  buttonContainer:{
    height:'100%', 
    alignItems:'center', 
    justifyContent:'center', 
    paddingHorizontal:10
  },
  buttomImage:{
    width:30,
    height:30
  }
});
