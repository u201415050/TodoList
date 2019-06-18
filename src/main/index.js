import React, {Component} from 'react';
import {Platform,TextInput,Image, StyleSheet,TouchableOpacity, Text, View, ScrollView} from 'react-native';
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
                    val:'',
                    list: [...tempList,{name:this.state.val, status:false}]
                })
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
            <View style={{width:'100%', borderColor:'rgb(100,100,100)',borderBottomWidth:2, alignItems:'center', padding:20}}>
                <Text style={{fontSize:20,color:'black', fontFamily:"Montserrat-Bold"}}>My To-Do List</Text>
            </View>
            <View style={{flexDirection:'row',borderColor:'rgb(100,100,100)',borderBottomWidth:2,alignItems:'flex-end'}}>
                <TextInput onSubmitEditing={this.addItem} ref={x=>this.input=x} clearButtonMode="while-editing" style={{borderColor:'rgb(100,100,100)', fontSize:20,fontFamily:'Montserrat-Medium',borderBottomWidth:2, flex:1,marginHorizontal:10,marginBottom:10,paddingVertical:5, paddingHorizontal:10}} value={this.state.val} onChangeText={(val)=>this.setState({val})}/>
                <TouchableOpacity onPress={this.addItem} style={{padding:20}}>
                    <Image source={require('../assets/add.png')} style={{width:30,height:30}}/>
                </TouchableOpacity>
            </View>
            <ScrollView keyboardDismissMode={true} keyboardShouldPersistTaps="always" style={{ flex:1, width:'100%'}}>
                {
                    this.state.list.map((item,i)=>{
                        return <Item editItem={()=>this.editItem(i)} deleteItem={()=>this.deleteItem(i)} key={i} toggleStatusItem={()=>this.toggleStatusItem(i)} name={item.name} status={item.status}/>
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
    backgroundColor: '#F5FCFF',
    paddingTop: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
