import { View , Text} from "react-native";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native";

type Props = {
    placeholder: string;
    value?: string;
    setValue: (text: string) => void;
    onChange?: (text: string) => void;
}


function CustomInput({placeholder, value, setValue, }:Props) {

    return (
        
        <View style={styles.container}> 
         <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={setValue}
            style={{width: '100%'}}
         />  
        
        
        </View>
        
    )
}
export default CustomInput;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',

        borderColor: '#fac9c9ff',
        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal: 10,
        marginVertical: 5,
    },

});