import { Dimensions } from "react-native"
console.log(Dimensions.get('window').height/2)
const theme={
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:' linear-gradient(180deg, rgba(6, 41, 78, 1) 0%, rgba(6, 51, 97, 1) 7%, rgba(9, 61, 113, 0.9724264705882353) 12%, rgba(3, 69, 124, 0.9948354341736695) 16%, rgba(3, 80, 143, 1) 24%, rgba(3, 80, 143, 1) 74%, rgba(10, 70, 128, 0.97) 84%, rgba(9, 61, 113, 0.98) 90%, rgba(6, 51, 97, 1) 95%, rgba(6, 41, 78, 1) 100%)',
    },
    containerLogin: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: (Dimensions.get('window').width -100),
        borderBottomLeftRadius:15,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        borderBottomRightRadius:15,
        backgroundColor: '#fff',
        height: 45,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
    pessable:{
        alignItems: 'center',
        justifyContent: 'center',
        width: (Dimensions.get('window').width -100), height:(Dimensions.get('window').height/2),
    },
    //Efecto de Mostrar Luego de press
    oculta:{

    }
}

export default theme