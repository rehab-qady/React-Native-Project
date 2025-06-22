import { View, Text } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
const TodoItem = ({todo,deleteTodo}) => {

    
  return (
   <View style={{ padding:20,
       borderRadius:10,
       borderWidth:1,
       borderColor:'#ccc',
       width:'100%',
       marginVertical:5,
       flex:1,
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center',
       }}>

   
           <Text style={{fontSize:20, fontWeight:'500'}}>{todo.title}</Text>
           <Feather name="trash" size={20} color="red" onPress={()=>deleteTodo(todo.id)}/>
   </View>
  )
}

export default TodoItem