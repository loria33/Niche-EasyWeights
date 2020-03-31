import React from 'react';
import { StyleSheet, Dimensions,ImageBackground, TouchableOpacity,View,Text,Image,TextInput } from 'react-native';
import PropTypes from 'prop-types';
import ErrorObject from '../Global/ErrorObject';
import NavigationService from '../../Navigation/NavigationService'
import {useActions} from 'react-redux';

const { width } = Dimensions.get('screen');

class Home extends React.Component {
 
  constructor() {
    super();
    
  }
  
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerTitle:'Easy Weights',
    
    headerStyle: {
        backgroundColor: '#00adee',
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
        height:60,
      },
    headerLeft: () =>
      
      <TouchableOpacity style={{ paddingLeft: 20,marginBottom:5}} onPress={() => navigation.openDrawer()}>
            <Image style={{  width:25,height:25}} source={require('../../Assets/Icons/menu-icon.png')} />
        </TouchableOpacity>
    
  });

  gotoPayments = () => {
    this.props.navigation.navigate('Payments');   
  }
  
  render(){
    return (
      
         <View style={styles.home}>
          <ImageBackground source={require('../../Assets/BG/bgpic.png')} style={styles.backgroundImage}>
            <View style={{width:'100%',justifyContent:"center",alignItems:'center'}}>
            <ErrorObject>
              <View style={styles.mainBoxes}>
                  <View key="recentLabel" style={styles.recentLabel}>
                      <Text style={{color:'#e9205cAA',fontWeight:"600"}}>Recent Lifts/Workouts</Text>
                  </View>
                  <View key="recentInputView" style={styles.recentInputView}>
                    <View key="recentInputParentView" style={styles.recentInputpView}>
                      <TextInput key="recentInput" placeholderTextColor='black' numberOfLines={1} style={styles.recentInput} placeholder='Search Lift'></TextInput>
                    </View>
                  </View>
                  <View key="recentInputAutoComplete">
                      <View key='inputCompletItem'>

                      </View>
                  </View>
                  <View key="recentboxes" styles={styles.recBoxesView}>
                      <View styles={styles.recBoxes}>

                      </View>
                      <View styles={styles.recBoxes}>
                        
                      </View>
                      <View styles={styles.recBoxes}>
                        
                      </View>
                  </View>
              </View>
              </ErrorObject>
              </View>
            <View style={styles.gotoPaymentsParentView}>
              <TouchableOpacity style={styles.gotoPaymentsView} onPress={() => this.gotoPayments()}>
                  <Text style={styles.gotoPayments}>CheckOut</Text>
              </TouchableOpacity>
            </View>
              
          </ImageBackground>
         </View>
     
    );
  }
}


Home.propTypes = {
 
};

const styles = StyleSheet.create({
  home: {
    width: '100%',
    alignItems: 'center',  
    justifyContent: 'center',
    flex:1
  },
  detailsBox:{
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:8,  
    paddingTop:10,marginBottom:10,marginTop:10,paddingBottom:10  
  },
  mainBoxes: {
    flex:0,
    justifyContent: 'center',
    alignItems: 'center',
    width:'90%',
    backgroundColor:'#ccccccAA',
    borderRadius:5,
    borderWidth:1,
    borderColor:'pink',
    marginTop:20
  },
  backgroundImage: {
    flex:1,
    width:'100%',
  },
  recentLabel :{
    padding:10,
    margin:10
  },
  recentInputView: {
    flex:0,
    width:'100%',
    paddingTop:10,
    paddingBottom:10,
    justifyContent:"center",
    alignItems:"center",
  },
  recentInputpView: {
    flex:0,
    width:'90%',
    paddingTop:10,
    paddingBottom:10,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:'white'
  },
  recentInput: {
    backgroundColor:'white',
    borderRadius:5,
    width:'85%',
    height:40,
  },
  recBoxes:{
    backgroundColor:'#e9205cAA',
    width:'33%'
  },
  gotoPayments: {
    color:'#e9205cAA',
    fontSize:20,

  },
  gotoPaymentsParentView: {
    width:'100%',
    flex:0,
    marginTop:20,
    marginBottom:20,
    justifyContent:'center',
    alignItems:'center'
  },
  gotoPaymentsView: {
    backgroundColor:'white',
    width:'80%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
  }
});


export default Home;