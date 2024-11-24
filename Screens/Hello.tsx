import { useNavigation } from "@react-navigation/native";
import React , {useEffect} from "react";
import { View } from "react-native";

function Hello () {
    const navigation : any = useNavigation();
    
    // useEffect(()=>{
    //     setTimeout(() => {
    //       navigation.navigate("HomeTwo")
    //     }, 500);
    // },[]);  

    return (
        <View style={{ flex :1 , backgroundColor :'green'}}>
        </View>
    )
}

export default Hello