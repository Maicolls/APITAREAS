import React, { useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import dibujar from "./Styles";
import RenderItem from "./RenderItem";
import AsyncStorage from "@react-native-async-storage/async-storage";

const tareas = [
]

export interface Task{
  titulo: string,
  estado: boolean,
  date: Date
}

export default function App(){
  const [text, setText] = React.useState('')
  const [tareas, setTask] = React.useState<Task[]>([])
  //npm i @react-native-async-storage/async-storage
  const storeData = async (value:Task[]) => {
    try {
      await AsyncStorage.setItem('my-key', JSON.stringify(value))
    }catch (e){
    }
  }

  const getData = async() => {
    try {
      const value = await AsyncStorage.getItem('my-key')
      if (value !== null){
        const tasksLocal = JSON.parse(value)
        setTask(tasksLocal)
      }
    }catch(e){
    }
  }

  useEffect(()=>{
    getData()
  }, [])

  const addTarea = ()=>{
    const tmp = [...tareas]
    const newTarea = {
      titulo: text,
      estado: false,
      date: new Date()
    }
    tmp.push(newTarea)
    setTask(tmp)
    setText('')
    
  }
  const MarkDone=(tarea:Task)=>{
    const tmp = [...tareas]
    const index = tmp.findIndex(k=>k.titulo===tarea.titulo)
    const t = tmp[index]
    t.estado = !t.estado
    setTask(tmp)
  }
  const deleteFunction=(tarea:Task)=>{
    const tmp = [...tareas]
    const index = tmp.findIndex(k=>k.titulo===tarea.titulo)
    tmp.splice(index,1)
    setTask(tmp)
  }
  
  return (
    <View style={dibujar.container}>
      <Text style={dibujar.title}>Hola las bolas</Text>
      <View style={dibujar.inputContainer}>
        <TextInput style={dibujar.textInput} 
        placeholder="Agregar" 
        value={text}
        onChangeText={(t:string)=>setText(t)}
        />
        <TouchableOpacity style={dibujar.button}>
          <Text style={dibujar.wtext} onPress={addTarea}>Agregar</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          renderItem={({item})=>
            (<RenderItem
            item={item}
            MarkDone={MarkDone}
            deleteFunction={deleteFunction}
            />)}
        data={tareas}
        />
      </View>
    </View>
  );
}