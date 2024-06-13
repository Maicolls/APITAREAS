import { StyleSheet, Dimensions } from 'react-native'

const dibujar = StyleSheet.create({
    container: {
      width:'100%',
      padding: 20
    },
    title: {
      color: "white",
      textAlign: "center",
      fontSize: 20
    },
    text: {
      color: 'black',
      fontSize: 14,
      textAlign: 'center'
    },
    wtext: {
      color: 'blue',
      fontSize: 10,
    },
    textInput: {
      borderColor: 'gainsboro',
      borderRadius: 15,
      borderWidth: 1,
      width: Dimensions.get("screen").width*0.6,
      paddingLeft: 10
    },
    inputContainer: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    button: {
      width: Dimensions.get('screen').width*0.25,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15
    },
    tareasContainer: {
      paddingVertical: 20,
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    textDone:{
      fontSize: 16,
      color: 'white',
      textDecorationLine: 'line-through'
    },
    removeBtn:{
      backgroundColor: 'r',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 10,
      borderRadius: 15
    }
})

export default dibujar