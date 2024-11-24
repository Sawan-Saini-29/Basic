import React , {useEffect} from "react";
import { View } from "react-native";
import { useNavigation } from '@react-navigation/native';



function HelloThree () {
    const navigation : any = useNavigation();

    useEffect(()=>{
        setTimeout(() => {
          navigation.navigate("Home")
        }, 500);
        
    },[]);

    return (
        <View style={{flex:1 ,backgroundColor :'red'}}>
           
        </View>
    )
}

export default HelloThree