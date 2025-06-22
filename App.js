import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {styles} from './styles.js'
import TodoForm from './src/Components/TodoForm.js';
import { useEffect, useState } from 'react';
import Todo from './src/Components/Todo.js';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {

    useEffect(() => {
    const loadTodos = async () => {
      try {
        const storedTodos = await AsyncStorage.getItem('todos');
        if (storedTodos !== null) {
          setTodos(JSON.parse(storedTodos));
        }
      } catch (error) {
        console.error( error);
      }
    };

    loadTodos();
  }, []);



  const [todos,setTodos]=useState([]);

  const handleAddTodo = async (todo)=>{

    setTodos((prevTodos)=> [...prevTodos,todo])

     try {
        await AsyncStorage.setItem('todos', JSON.stringify(updatedTodos));
        console.log('Todos updated in AsyncStorage');
    } catch (error) {
        console.error('Failed to save todos:', error);
    }
    
  }

  const deleteTodo= async(id)=>{
   try {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    console.log('Filtered todos:', updatedTodos); 
    setTodos(updatedTodos);
    await AsyncStorage.setItem('todos', JSON.stringify(updatedTodos));
  } catch (error) {
    console.error('Failed to delete todo:', error);
  }
  }  
  return (
    <SafeAreaView style={{...styles.container}}>
   
      <Text style={{fontWeight:'bold',fontSize:35,color:'purple',marginVertical:40}}>Todo App</Text>


     <TodoForm onSubmit={(todo)=>handleAddTodo(todo)} />

      <View style={styles.dividerLine}/>

      <View style={styles.filterContainer}>

        <TouchableOpacity style={styles.filterBtn} activeOpacity={0.7}>
        <Text style={{...styles.filterText}}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterBtn} activeOpacity={0.7}>
        <Text style={{...styles.filterText}}>Completed</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterBtn} activeOpacity={0.7}>
        <Text style={{...styles.filterText}}>In Progress</Text>
        </TouchableOpacity>

      </View>


    {todos.length > 0 && <Todo todos={todos} deleteTodo={deleteTodo}/> }
      
      
    
    </SafeAreaView>

  );
}

