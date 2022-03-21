import React, { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native'
import {  } from 'react-native-web';
import ResultImc from './ResultImc';
import styles from './style';
export default function Form() {

  const [height, setHeight] = useState(null)
  const [messageImc, setMessageImc] = useState('Preencha o peso e altura')
  const [imc, setImc] = useState(null)
  const [weight, setWeight] = useState(null)
  const [textButton, setTextButton] = useState('Calcular')


  function imcCalculator() {


    return setImc((weight / (height * height)).toFixed(2))
  }

  function validationImc() {
    if (weight != null && height != null) {
      imcCalculator()
      setWeight(null)
      setHeight(null)
      setMessageImc("Seu imc é igual: ")
      setTextButton("Calcular Novamente")
      return
    }
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("preencha o peso novamente")
  }


  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <TextInput style={styles.input}
          placeholder='Example, 1.75'
          keyboardType='numeric'
          onChangeText={setHeight}
          value={height}
        />
        <Text style={styles.formLabel}>Peso</Text>
        <TextInput
        style={styles.input}
          value={weight}
          onChangeText={setWeight}
          placeholder='Example 75'
          keyboardType='numeric'
        />
       <TouchableOpacity style={styles.buttonCalculator} onPress={()=> validationImc()}><Text style={styles.textButtonCalculator}>{textButton}</Text></TouchableOpacity>
      </View>
      <ResultImc messageResultImc={messageImc} resultImc={imc} />
    </View>
  );
}