import { View, StyleSheet, Button, Text } from 'react-native';

export const Favorite = ({route}) => {
    return (
        <View style={styles.home}>
            <Text>Favoritos</Text>
            <Text/>
            {route.params.map((course, i) => (
                <View key={i}>
                    <Button title={course} key={i} disabled/>
                    <Text/>
                </View>
            ))}
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