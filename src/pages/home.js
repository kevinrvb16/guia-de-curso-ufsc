import { useEffect, useState } from 'react';
import { View, StyleSheet, BackHandler, Button, Text, Image } from 'react-native';

const jsonData= require('../server/data.json');
export const Home = ({navigation}) => {
    const [favoriteCourses, setFavoriteCourses] = useState([]);
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        setCourses(jsonData.data);
        BackHandler.addEventListener('hardwareBackPress', () => true);
    }, [])

    return (
        <View style={styles.home}>
            <Text>Bem vindo!</Text>
            <Text/>
            <Image style={styles.image} source={require('../assets/Brasao_UFSC.png')}/>
            <Text>Selecione o curso:</Text>
            <Text/>
            {courses?.map((course, i) => (
                <View key={i}>
                    <Button title={course.name} onPress={() => navigation.navigate('Course', {course: course, favoriteCourses: favoriteCourses, setFavoriteCourses: setFavoriteCourses})}/>
                    <Text/>
                </View>
            ))}
            <Text/>
            <Text/>
            <Text/>
            <Button title="Ver Favoritos" onPress={() => navigation.navigate('Favorite', favoriteCourses)}/>       
        </View>
    )
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        height:110,
        width:110,

    }
  })