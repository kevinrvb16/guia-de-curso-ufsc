import { View, StyleSheet } from 'react-native';
import Lottie from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native'
export const Splash = () => {

    const navigation = useNavigation();
    return (
        <View style={styles.splash}>
             <Lottie source={require('../assets/animation.json')} autoPlay loop={false} onAnimationFinish={ () => {navigation.navigate('Home')}} />
        </View>
    )
}

const styles = StyleSheet.create({
    splash: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
  })