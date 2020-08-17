import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screen/Home";
import Code1 from "./screen/Code1";
import Code2 from "./screen/Code2";
import Code3 from "./screen/Code3";
import Code4 from "./screen/Code4";
import Code5 from "./screen/Code5";
import Code6 from "./screen/Code6";
import End from "./screen/End";
export default class App extends React.Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator
          headerMode="none"
          a
          screenOptions={{
            // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            // cardStyle: CardStyleInterpolators.forScaleFromCenterAndroid,
            gestureEnabled: true,
            gestureDirection: "horizontal",
            animationEnabled: true,
            // animationTypeForReplace:
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Code1" component={Code1} />
          <Stack.Screen name="Code2" component={Code2} />
          <Stack.Screen name="Code3" component={Code3} />
          <Stack.Screen name="Code4" component={Code4} />
          <Stack.Screen name="Code5" component={Code5} />
          <Stack.Screen name="Code6" component={Code6} />
          <Stack.Screen name="End" component={End} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
