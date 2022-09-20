import { useState } from "react";
import { Text, StyleSheet, View, Dimensions, ScrollView, Button  } from "react-native"
import MapView from 'react-native-maps';
export const Course = ({route}) => {
    const {name, img, campus, shift, worload, location, related, videoLink, wppCordinationPhone, cordinator, emailContact, site} = route.params.course
    const [favorite, setFavorite] = useState(route.params.favoriteCourses.includes(name))

    const includeFav = () => {
        route.params.setFavoriteCourses(route.params.favoriteCourses.concat(name))
    }

    const removeFav = () => {
        route.params.setFavoriteCourses(route.params.favoriteCourses.filter(e => e !== name))
    }
    return (
        <View style={styles.course}>
            {favorite ?
                <Text style={styles.star}>⭐</Text> : <></>
            }
            <ScrollView>
                <Text/>
                <Text> Curso de {JSON.stringify(name).replace(/"/g, '')}</Text>
                <Text/>
                <Text>Câmpus no qual o curso é realizado: {JSON.stringify(campus).replace(/"/g, '')}</Text>
                <Text/>
                <Text> Turno(s): {shift.map((turn)=> (<>{turn}; </>))}</Text>
                <Text/>
                <Text>Total de Horas: {JSON.stringify(worload)}</Text>
                <Text/>
                <Text>Coordenador: {JSON.stringify(cordinator).replace(/"/g, '')}</Text>
                <Text/>
                <Text>Email de contato: {JSON.stringify(emailContact).replace(/"/g, '')}</Text>
                <Text/>
                <Button
                    onPress={()=>{setFavorite(!favorite), !favorite? includeFav() : removeFav()}}
                    title={favorite ? "Remover dos Favoritos" : "Adicionar aos Favoritos"}
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </ScrollView>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: -27.60111,
                    longitude: -48.52,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            /> 
        </View>
    )
}

const styles = StyleSheet.create({
    star: {
        position: 'absolute',
        fontSize: 25,
        right: 20,
        top: 10,
    },
    course: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height/2.2,
      },
  })