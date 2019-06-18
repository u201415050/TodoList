import React, {Component} from 'react';
import {Platform,Image,TouchableOpacity, StyleSheet, Text, View, ScrollView} from 'react-native';


export default class Item extends Component{
  render() {
      const {name, status}=this.props
      const {toggleStatusItem} =  this.props
      const check=status?require('../../assets/success.png')
      :require('../../assets/pending.png')
    return ( 
      <View style={styles.container}>
        <TouchableOpacity style={{padding: 20}} onPress={toggleStatusItem} >
          <Image source={check} style={{width:30,height:30}}/>
        </TouchableOpacity>
        <Text style={{flex:1,fontFamily:"Montserrat-Medium", fontSize:18}}>{name}</Text>
        <TouchableOpacity style={{height:'100%', alignItems:'center', justifyContent:'center', paddingHorizontal:10}} onPress={this.props.deleteItem} >
          <Image source={require('../../assets/trash.png')} style={{width:30,height:30}}/>
        </TouchableOpacity>
        <TouchableOpacity style={{height:'100%', alignItems:'center', justifyContent:'center', paddingHorizontal:10}} onPress={this.props.editItem} >
          <Image source={require('../../assets/edit.png')} style={{width:30,height:30}}/>
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
    borderColor:'rgba(100,100,100,0.5)',borderBottomWidth:2,
  },
});
