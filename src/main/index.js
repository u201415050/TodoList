import React, {Component} from 'react';
import {TextInput,Image, StyleSheet,TouchableOpacity, Text, View, ScrollView} from 'react-native';
import Item from './item';

export default class TodoList extends Component{
    state={
        list: [],
        val:'',
        edit:''
    }
    addItem=()=>{
        let tempList=this.state.list
        //TO ADD
        if(this.state.val!=''){
            if(this.state.edit.toString()=='') {
                this.setState({
                    list: [...tempList,{name:this.state.val, status:false}]
                },()=>{
                    this.setState({
                        val: ''
                    })  
                }
                )
            } else {
            //TO EDIT
                tempList= this.state.list
                tempList[this.state.edit].name=this.state.val
                
                this.setState({list:tempList, edit:'', val:''})
            }
        } 
    }
    toggleStatusItem=(index)=>{
        //TO MARK AS COMPLETED
        let tempList= this.state.list
        tempList[index].status=!tempList[index].status
        this.setState({list:tempList})
    }
    deleteItem=(index)=>{
        //TO DELETE
        let temp= this.state.list.filter((item,i)=>{
            return i!=index
        })
        this.setState({list:temp})
        if(this.state.edit.toString()!=''){
            this.setState({edit:'', val:''})
        }
    }
    editItem=(index)=>{
        //TO START EDIT
        this.setState({edit:index, val:this.state.list[index].name})
    }
    componentDidMount(){
        this.input.focus()
    }
    render() {
        return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>My To-Do List</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput 
                    autoCorrect={false} 
                    onSubmitEditing={this.addItem} 
                    ref={x=>this.input=x} 
                    clearButtonMode="while-editing" 
                    style={styles.inputStyle} 
                    value={this.state.val} 
                    onChangeText={(val)=>this.setState({val})}/>
                <TouchableOpacity 
                    onPress={this.addItem} 
                    style={styles.addButtonStyle}>
                    <Image 
                        source={require('../assets/add.png')} 
                        style={styles.addImageStyle}/>
                </TouchableOpacity>
            </View>
            <ScrollView 
                keyboardDismissMode={true} 
                keyboardShouldPersistTaps="always" 
                style={styles.scrollContainer}>
                {
                    this.state.list.map((item,i)=>{
                        return <Item key={i} 
                                    editItem={()=>this.editItem(i)} 
                                    deleteItem={()=>this.deleteItem(i)} 
                                    toggleStatusItem={()=>this.toggleStatusItem(i)} 
                                    name={item.name} 
                                    status={item.status}/>
                    })
                }
            </ScrollView>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  header: {
    width:'100%', 
    borderColor:'rgb(100,100,100)',
    borderBottomWidth:2, 
    alignItems:'center', 
    padding:20
  },
  title: {
    fontSize:20,
    color:'black',
    fontFamily:"Montserrat-Bold"
  },
  inputContainer: {
    flexDirection:'row',
    borderColor:'rgb(100,100,100)',
    borderBottomWidth:2,
    alignItems:'flex-end'
  },
  inputStyle:{
    borderColor:'rgb(100,100,100)', 
    fontSize:20,
    fontFamily:'Montserrat-Medium',
    borderBottomWidth:2, 
    flex:1,
    marginHorizontal:10,
    marginBottom:10,
    paddingVertical:5, 
    paddingHorizontal:10
  },
  addButtonStyle:{
    padding:20
  },
  addImageStyle:{
    width:30,
    height:30
  },
  scrollContainer:{
    flex:1, 
    width:'100%'
  }

});
