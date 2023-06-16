import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {observer} from "mobx-react-lite";
import {NavigationContainer} from "@react-navigation/native";
import {routerConstants} from '../constants/routerConstants';
import MainS from "../screen/Main";
import GardenS from "../screen/GardenS";
import DoneTaskS from "../screen/DoneTaskS";

const RootStack = createNativeStackNavigator()
const RootNavigation = observer(() => {
    return (
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen
                    options={{headerShown: false}}
                    name={routerConstants.MAIN}
                    component={MainS}
                />
                <RootStack.Screen
                    options={{headerShown: false}}
                    name={routerConstants.garden}
                    component={GardenS}
                />
                <RootStack.Screen
                    options={{headerShown: false}}
                    name={routerConstants.doneTask}
                    component={DoneTaskS}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
});

export default RootNavigation;
