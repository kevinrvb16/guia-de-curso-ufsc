import { Text, StyleSheet, View, Dimensions, ScrollView  } from "react-native"
import MapView from 'react-native-maps';
export const Course = ({route}) => {
    const {name, img, campus, shift, worload, location, related, videoLink, wppCordinationPhone, cordinator, emailContact, site} = route.params
    return (
        <View style={styles.course}>
            <ScrollView>
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