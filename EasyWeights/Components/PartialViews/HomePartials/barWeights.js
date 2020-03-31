import React from "react";
import { StyleSheet,Text } from "react-native";


class BarWeights extends React.Component {
 
  render() {
  
    return (
          <Text size={15}>
            {this.props.title}
          </Text>
    );
  }
}



const styles = StyleSheet.create({
 
});

export default BarWeights;
