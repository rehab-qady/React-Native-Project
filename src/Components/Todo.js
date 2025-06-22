import { View, Text, FlatList } from 'react-native'
import {styles} from '../../styles'

import React from 'react'
import TodoItem from './TodoItem'

const Todo = ({todos,deleteTodo}) => {
  return (
   <FlatList data={todos}
   style={{width:'90%', marginTop:20}}
   keyExtractor={(item)=>item.id}
   renderItem={({item})=>(

    <TodoItem todo={item} deleteTodo={deleteTodo}/>
   )}
   />
  )
}

export default Todo