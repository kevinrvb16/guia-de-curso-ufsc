import {Splash} from "../pages/splash"
import {Home} from "../pages/home"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
const NativeStack = createNativeStackNavigator();
export const AppRoutes = () => {
    return (
        <NavigationContainer>
            <NativeStack.Navigator screenOptios={{headerShown: false}}>
                <NativeStack.Screen name="Splash" component={Splash} />
                <NativeStack.Screen name="Home" options={{
                    gestureEnabled: false
                }} component={Home} />
            </NativeStack.Navigator>
        </NavigationContainer>
    )
}