import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {styles} from './styles.js'
export default function App() {
  return (
    <SafeAreaView style={{...styles.container}}>
   
      <Text style={{fontWeight:'bold',fontSize:35,color:'purple',marginVertical:40}}>Todo App</Text>
      <TextInput placeholder='Enter Title ' style={styles.input}/>
      <TextInput placeholder='Enter Description ' style={styles.input}/>
      <TouchableOpacity style={styles.submitBtn} activeOpacity={0.7}>
        <Text style={{...styles.text,fontWeight: 'bold'}}>Save</Text>
      </TouchableOpacity>

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
      
    
    </SafeAreaView>

  );
}

