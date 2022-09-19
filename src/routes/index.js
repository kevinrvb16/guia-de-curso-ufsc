import {Splash} from "../pages/splash"
import {Home} from "../pages/home"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import { Course } from "../pages/course";
const NativeStack = createNativeStackNavigator();
export const AppRoutes = () => {
    return (
        <NavigationContainer>
            <NativeStack.Navigator screenOptios={{headerShown: false}}>
                <NativeStack.Screen name="Splash" component={Splash} />
                <NativeStack.Screen name="Home" component={Home} />
                <NativeStack.Screen name="Course" component={Course} />
            </NativeStack.Navigator>
        </NavigationContainer>
    )
}