import React , {useEffect} from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

function HelloTwo () {
    const navigation : any = useNavigation();

    useEffect(()=>{
        setTimeout(() => {
          navigation.navigate("HomeThree")
        }, 500);
    },[]); 

    return (
        <View style={{ flex:1, backgroundColor :'blue'}}>

        </View>
    )
}

export default HelloTwo