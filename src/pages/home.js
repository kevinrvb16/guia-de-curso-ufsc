import { useEffect } from 'react';
import { Text, View, StyleSheet, BackHandler } from 'react-native';

export const Home = () => {

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => true);
    }, [])
    return (
        <View style={styles.home}>
            <Text>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
  })