import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
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