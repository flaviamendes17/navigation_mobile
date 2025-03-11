import React from "react"; // Importa a biblioteca React
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; // Importa a função para criar um navegador de abas inferior
import TabScreen from "../pages/TabScreen"; // Importa o componente TabScreen
import Tab2 from "../pages/Tab2"; // Importa o componente Tab2
import Icon from "react-native-vector-icons/Ionicons"; // Importa o componente Icon

const Tab = createBottomTabNavigator(); // Cria uma instância do navegador de abas inferior

export default function TabNavigator() {
    return (
        <Tab.Navigator initialRouteName="Tab Screen">
                <Tab.Screen 
                    name="Tab Screen" 
                    component={TabScreen} 
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="home" color={color} size={size} />
                        ),
                    }}
                />
            <Tab.Screen name="Tab2" component={Tab2} />
        </Tab.Navigator>
    );
}

/*
Liste icons padroes
Icon name="home"
Icon name="person"
Icon name="search"
Icon name="add"
Icon name="notifications"
Icon name="settings"
Icon name="menu"
Icon name="arrow-back"
Icon name="arrow-forward"
Icon name="arrow-up"
Icon name="arrow-down"
Icon name="close"
Icon name="checkmark"
Icon name="refresh"
Icon name="refresh-circle"
Icon name="refresh-circle-sharp"
Icon name="refresh-outline"
Icon name="refresh-sharp"
*/