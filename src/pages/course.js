import { useState } from "react";
import { Text, StyleSheet, View, Dimensions, ScrollView, Button, Image, Linking  } from "react-native"
import MapView from 'react-native-maps';
export const Course = ({route}) => {
    const {name, img, campus, shift, workload, location, relatedImgs, videoLink, wppCordinationPhone, cordinator, emailContact, site} = route.params.course
    const [favorite, setFavorite] = useState(route.params.favoriteCourses.includes(name))
    const message = "Olá coordenador(a), gostaria de tirar uma dúvida"
    const whatsApp = () => {
        Linking.openURL(`whatsapp://send?text=${message}&phone=${wppCordinationPhone}`);
    }
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
            <ScrollView style={styles.scrollView}>
                <Text/>
                <Text> Curso de {JSON.stringify(name).replace(/"/g, '')}</Text>
                <Button onPress={() => Linking.openURL(site) }
                title="Site do curso" />
                <Text/>
                <Text>Câmpus no qual o curso é realizado: {JSON.stringify(campus).replace(/"/g, '')}</Text>
                <Text/>
                <Text> Turno(s): {shift.map((turn)=> (<>{turn}; </>))}</Text>
                <Text/>
                <Text>Total de Horas: {JSON.stringify(workload).replace(/"/g, '')}</Text>
                <Text/>
                <Text>Coordenador: {JSON.stringify(cordinator).replace(/"/g, '')}</Text>
                <Button 
                    onPress={whatsApp}
                    title={"WhatsApp Coordenador"} />
                <Text/>
                <Image style={styles.image}  title="image" source={{uri: JSON.stringify(img).replace(/"/g, '')}} ></Image>

                <Text>Email de contato: {JSON.stringify(emailContact).replace(/"/g, '')}</Text>
                <Button onPress={() => Linking.openURL(`mailto:${emailContact}`) }
                    title="Enviar e-mail" />
                <Text/>
                <Text>Imagens da sala de aula do curso:</Text>
                {relatedImgs?.map((img, i) => (
                    <Image key={i} style={styles.image}  title="image" source={{uri: img}} />
                ))}
                <Text/>
                <Button
                    onPress={()=>(setFavorite(!favorite), !favorite? includeFav() : removeFav())}
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
    scrollView: {
        margin: 'auto'
    },
    course: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 320,
        height:160,
        margin: 'auto'
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