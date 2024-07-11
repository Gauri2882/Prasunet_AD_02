import { 
  
    StyleSheet, 
    Text,
    
    View 
} from "react-native";
import React from 'react';

const Fallback = () =>{
        return(
            <View>
                <Text style={{
                    flexDirection: "row",
                    paddingVertical: 170,
                    paddingLeft: 30,
                    fontSize: 35
                }}>Add your to do list!</Text>
                
            </View>
            
        );
};

export default Fallback;

const styles = StyleSheet.create({}) 