import { Dimensions } from "react-native"
const theme={
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:' linear-gradient(180deg, rgba(6, 41, 78, 1) 0%, rgba(6, 51, 97, 1) 7%, rgba(9, 61, 113, 0.9724264705882353) 12%, rgba(3, 69, 124, 0.9948354341736695) 16%, rgba(3, 80, 143, 1) 24%, rgba(3, 80, 143, 1) 74%, rgba(10, 70, 128, 0.97) 84%, rgba(9, 61, 113, 0.98) 90%, rgba(6, 51, 97, 1) 95%, rgba(6, 41, 78, 1) 100%)',
    },
    containerLogin:{
        width:(Dimensions.get('window').width),
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    input: {
        width: '80%',
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
        backgroundColor: '#fff',
    },
    //Modo Claro
    containerClaro: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextPrimaryClaro:{
        color:'#fff',
        width: (Dimensions.get('window').width -100),
        textAlign: 'justify'
    },
    containerPrimaryElements:{
        height:100,
        justifyContent: 'space-around',
    },
    primaryButtons:{
        width:50,
        height:40,
    },
    ViewTextClaro:{
        alignItems: 'center',
        justifyContent: 'center',
        width:(Dimensions.get('window').width)
    },
    
    ModalClaro:{
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        flex:1,
    },
    centeredView:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centeredViewModal:{
        height: (Dimensions.get('window').height *.3),
        width: (Dimensions.get('window').width * .8),
        backgroundColor: '#fff',
        minHeight: 300,
    },
    
    //Modo Oscuro
    containerOscuro: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:' linear-gradient(180deg, rgba(6, 41, 78, 1) 0%, rgba(6, 51, 97, 1) 7%, rgba(9, 61, 113, 0.9724264705882353) 12%, rgba(3, 69, 124, 0.9948354341736695) 16%, rgba(3, 80, 143, 1) 24%, rgba(3, 80, 143, 1) 74%, rgba(10, 70, 128, 0.97) 84%, rgba(9, 61, 113, 0.98) 90%, rgba(6, 51, 97, 1) 95%, rgba(6, 41, 78, 1) 100%)',
    },
}

export default theme