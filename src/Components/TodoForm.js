import {  Text, TextInput ,TouchableOpacity} from 'react-native'
import {styles} from '../../styles'
import React, { useState } from 'react'

const TodoForm = ({onSubmit}) => {
    const [title, setTitle]=useState('')
    const [description, setDescription]=useState('')

    const handleSubmit=() =>{
        const todo={
            id:Math.random().toString(),
            title,
            description,
            completed:false
        }
        console.log(todo);
        
        onSubmit(todo);
        setDescription('');
        setTitle('');
       
      
    }
  return (
    <>
   
          <TextInput placeholder='Enter Title ' style={styles.input} value={title} onChangeText={(val)=> setTitle(val)}/>
          <TextInput placeholder='Enter Description ' style={styles.input} value={description}  onChangeText={(val)=> setDescription(val)}/>
          <TouchableOpacity style={styles.submitBtn} activeOpacity={0.7} onPress={handleSubmit}>
            <Text style={{...styles.text,fontWeight: 'bold'}}>Save</Text>
          </TouchableOpacity>
    </>
  )
}

export default TodoForm