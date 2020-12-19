import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity,} from 'react-native';

class App extends Component{
  constructor(){
    super()
    this.state = {
      resultText: "",
      tempText: "",
    }
  }

  numsPressed(text){
    console.log(text)
    if (text === "="){
      if(this.state.resultText === '+' || this.state.resultText === "" || this.state.tempText === "" || this.state.resultText === '-' || this.state.resultText === '*' || this.state.resultText === '/' || this.state.resultText === '+.' || this.state.resultText === '-.' || this.state.resultText === '*.' || this.state.resultText === '/.'){}
      else if (!this.state.resultText.includes('+') && !this.state.resultText.includes('-') && !this.state.resultText.includes('*') && !this.state.resultText.includes('/')){}
      else{
        if (this.state.resultText === '/0'){
          this.setState({
            tempText: "Didn't you go to school brooo?",
            resultText: "You cannot divide by zero!"
          })
        }
        else{
          this.setState({
            tempText: this.state.tempText + this.state.resultText,
            resultText: eval(this.state.tempText + this.state.resultText)
          })
        }
      }
    }
    else if (text === '.'){
      if(!this.state.resultText.includes('.')){
        if(this.state.resultText === ""){
          this.setState({
            resultText: "0" + text
          })
        }
        else {
          this.setState({resultText: this.state.resultText + text})
        }
      }
    }
    else if (this.state.tempText !== ""){
      if (this.state.resultText === "+."){
        this.state.resultText = "+0."
        this.setState({resultText: this.state.resultText + text})
      }
      else if (this.state.resultText === "+0"){
        this.state.resultText = "+"
        this.setState({resultText: this.state.resultText + text})
      }
      else if (this.state.resultText === "*0"){
        this.state.resultText = "*"
        this.setState({resultText: this.state.resultText + text})
      }
      else if (this.state.resultText === "/0"){
        this.state.resultText = "/"
        this.setState({resultText: this.state.resultText + text})
      }
      else if (this.state.resultText === "-0"){
        this.state.resultText = "-"
        this.setState({resultText: this.state.resultText + text})
      }
      else if (this.state.tempText === "Didn't you go to school brooo?"){
        this.state.tempText = ''
        this.state.resultText = ''
        this.setState({resultText: this.state.resultText + text})
      }
      else if (this.state.resultText === "0"){
        this.state.resultText = ""
        this.setState({resultText: this.state.resultText + text})
      }
      else{
        this.setState({resultText: this.state.resultText + text})
      }
    }
    
    else{
      if (this.state.resultText === "0"){
        this.state.resultText = ""
        this.setState({resultText: this.state.resultText + text})
      }
      
      else{
        this.setState({resultText: this.state.resultText + text})
      }
    }
  }

  upperOperatorPressed(operator){
    console.log(operator)
    switch(operator){
      case 'C':
        this.setState({
          tempText: '',
          resultText: ''
        })
        break;
      case 'CE':
        if (this.state.tempText === "Didn't you go to school brooo?"){
          this.setState({
            tempText: '',
            resultText: ''
          })
        }
        else{
          this.setState({resultText: ''})
        }
        break;
      case '<-':
        if (this.state.tempText === "Didn't you go to school brooo?"){
          this.setState({
            tempText: '',
            resultText: ''
          })
          console.log('this.state.tempText,',this.state.tempText)
        }
        else{
          console.log('this.state.tempText,else',this.state.resultText)
          this.setState({resultText: this.state.resultText.toString().slice(0, -1)})}
        break;
    }
  }

  operatorPressed(operator){
    switch(operator){
      case '+':
      case '*':
      case '/':
        if (this.state.resultText === '+' || this.state.resultText === '-' || this.state.resultText === '*' || this.state.resultText === '/' || this.state.resultText === '' && this.state.tempText === ''){}
        else if (this.state.tempText !== ''){
          if (!this.state.resultText.includes('+') || !this.state.resultText.includes('-') || !this.state.resultText.includes('*') || !this.state.resultText.includes('/')){}
        }
        else if(this.state.tempText !== '' || this.state.resultText !==''){
          if (this.state.resultText === '/0'){
            this.setState({
              tempText: "Didn't you go to school brooo?",
              resultText: "You cannot divide by zero!"
            })
          }
          else{
            this.setState({
              tempText: this.state.tempText + this.state.resultText,
              resultText: operator
            })
          }
        }
        break;
      case '-':
        if (this.state.resultText === '+' || this.state.resultText === '-' || this.state.resultText === '*' || this.state.resultText === '/'){}
        else if (this.state.tempText !== ''){
          if (!this.state.resultText.includes('+') || !this.state.resultText.includes('-') || !this.state.resultText.includes('*') || !this.state.resultText.includes('/')){}
        }
        else {
          if (this.state.resultText === '/0'){
            this.setState({
              tempText: "Didn't you go to school brooo?",
              resultText: "You cannot divide by zero!"
            })
          }
          else{
            this.setState({
              tempText: this.state.tempText + this.state.resultText,
              resultText: operator
            })
          } 
        }
        break;
    }
  }

  upperOperations = ["CE", "C", '<-'];
  upperOperationBtn = this.upperOperations.map(i => {return <TouchableOpacity onPress={()=> this.upperOperatorPressed(i)} style={styles.allButtons}>
    <Text style={styles.operatorsButtonText}>{i}</Text>
  </TouchableOpacity>})

  operation =["/", "*", "-", "+"];
  operationBtn = this.operation.map(i => {return <TouchableOpacity onPress={()=> this.operatorPressed(i)} style={styles.allButtons}>
    <Text style={styles.operatorsButtonText}>{i}</Text>
  </TouchableOpacity>});

  numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, '.', 0, '='];
  numbersBtn = this.numbers.map(i => {return <TouchableOpacity onPress={()=> this.numsPressed(i)} style={styles.numsButtonRow}>
    <Text style={styles.numsButtonText}>{i}</Text>
  </TouchableOpacity>});
  render(){


    
    return(
      <SafeAreaView style={styles.container}>
        <View style={styles.temp}>
          <Text style={styles.tempText}>{this.state.tempText}</Text>
        </View>
        <View style={styles.operations}>
          <Text style={styles.operationsText}>{this.state.resultText}</Text>
        </View>
        <View style={styles.upperOperators}>
          {this.upperOperationBtn}
        </View>
        <View style={styles.buttons}>
          <View style={styles.numsButton}>
            {this.numbersBtn}
          </View>
          <View style={styles.operatorsButton}>
          {this.operationBtn}
          </View>
        </View>
        
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  temp: {
    flex: 1,
    backgroundColor: '#f4f1e8',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  tempText: {
    fontSize: 25,
    color: '#ab9f68',
  },
  operations: {
    flex: 1.3,
    backgroundColor: '#f4f1e8',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  operationsText: {
    fontSize: 35,
    color: '#ab9f68',
  },
  upperOperators: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ab9f68',
  },
  buttons: {
    flex: 4,
    flexDirection: 'row',
  },
  operatorsButtonText: {
    fontSize: 40,
    color :'#f4f1e8',
  },
  allButtons:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  numsButton: {
    flex: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f1e8',
  },
  numsButtonRow:{
    width: '30%',
    height: '25%'
  },
  numsButtonText: {
    fontSize: 50,
    alignSelf: 'center',
    justifyContent: 'space-around',
    color: '#ab9f68',
  },
  operatorsButton:{
    flex: 1,
    backgroundColor: '#ab9f68',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
})

export default App;
