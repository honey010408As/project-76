import React, { component } from 'react';
import { Text, View } from 'react-native';

export default class SpaceCraftScreen extends component {
    render() {
        return(
            <View 
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
                  }}>
                  <Text>Space Craft Screens</Text>    
            </View>
        )
    }
}