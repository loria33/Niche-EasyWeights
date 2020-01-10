import React from "react";
import { StyleSheet,Text } from "react-native";


class DrawerItem extends React.Component {
 
  render() {
    debugger;
    return (
     
          <Text
            size={15}
          >
            {this.props.title}
          </Text>
      
    );
  }
}

const styles = StyleSheet.create({
 
});

export default DrawerItem;
