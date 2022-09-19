import { useEffect, useState } from 'react';
import { View, StyleSheet, BackHandler, Button, Text } from 'react-native';
import { Link } from '@react-navigation/native';

const jsonData= require('../server/data.json');
export const Home = ({navigation}) => {

    const [courses, setCourses] = useState([]);
    useEffect(() => {
        setCourses(jsonData.data);
        BackHandler.addEventListener('hardwareBackPress', () => true);
    }, [jsonData])

    return (
        <View style={styles.home}>
            <Text>Bem vindo!</Text>
            <Text/>
            <Text>Selecione o curso:</Text>
            <Text/>
            {courses?.map((course, i) => (
                <View key={i}>
                    <Button title={course.name} onPress={() => navigation.navigate('Course', course)} key={i}/>
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