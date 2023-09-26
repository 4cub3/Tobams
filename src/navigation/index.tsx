import { Account, Cart, Home, ItemScreen, Menu } from "@/screens";
import Header from "@/shared/custom-header";
import { ParamsList, Path } from "@/types/general-types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";
import { bodyTextgray, tomatoRed, white } from "@/constants/colors";
import { Label } from "@/shared";
const Tab = createBottomTabNavigator<ParamsList>();
const Stack = createStackNavigator<ParamsList>();
const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName={Path.HOME}
      screenOptions={{
        tabBarStyle: {
          height: 70,
          borderTopColor: "#E1E5E9",
          borderTopWidth: 1,
        },
      }}
    >
      <Tab.Screen
        name={Path.HOME}
        component={Home}
        options={{
          header: ({ navigation }) => {
            return <Header navigation={navigation} title="Home" />;
          },
          tabBarIcon: ({ focused, size }) => {
            return !focused ? (
              <Image
                source={require("@app/assets/navigation-icons/outline/heroicons_home.png")}
                style={{ width: 24, height: 24 }}
              />
            ) : (
              <Ionicons name="home" color={tomatoRed} size={24} />
            );
          },
          tabBarLabel: ({ children, focused }) => {
            return (
              <Label
                textStyle={{
                  color: focused ? tomatoRed : "#858585",
                  marginBottom: 12,
                  marginTop: -12,
                }}
              >
                {children}
              </Label>
            );
          },
        }}
      />
      <Tab.Screen
        name={Path.MENU}
        component={Menu}
        options={{
          header: ({ navigation }) => {
            return <Header navigation={navigation} title="Menu" />;
          },
          tabBarIcon: ({ focused, size }) => {
            return !focused ? (
              <Image
                source={require("@app/assets/navigation-icons/outline/menu.png")}
                style={{ width: size, height: size }}
              />
            ) : (
              <Image
                source={require("@app/assets/navigation-icons/filled/menu-filled.png")}
                style={{ width: 18, height: 18 }}
              />
            );
          },
          tabBarLabel: ({ children, focused }) => {
            return (
              <Label
                textStyle={{
                  color: focused ? tomatoRed : "#858585",
                  marginBottom: 12,
                  marginTop: -12,
                }}
              >
                {children}
              </Label>
            );
          },
        }}
      />
      <Tab.Screen
        name={Path.CART}
        component={Cart}
        options={{
          header: ({ navigation }) => {
            return <Header navigation={navigation} back title="Cart" />;
          },
          tabBarIcon: ({ focused, size }) => {
            return !focused ? (
              <Image
                source={require("@app/assets/navigation-icons/outline/heroicons_shopping-bag.png")}
                style={{ width: size, height: size }}
              />
            ) : (
              <Ionicons name="cart" color={tomatoRed} size={24} />
            );
          },
          tabBarLabel: ({ children, focused }) => {
            return (
              <Label
                textStyle={{
                  color: focused ? tomatoRed : "#858585",
                  marginBottom: 12,
                  marginTop: -12,
                }}
              >
                {children}
              </Label>
            );
          },
        }}
      />
      <Tab.Screen
        name={Path.ACCOUNT}
        component={Account}
        options={{
          header: ({ navigation }) => {
            return <Header navigation={navigation} title="Account" />;
          },
          tabBarIcon: ({ focused, size }) => {
            return (
              <Image
                source={require("@app/assets/navigation-icons/outline/account.png")}
                style={{ width: size, height: size }}
              />
            );
          },
          tabBarLabel: ({ children, focused }) => {
            return (
              <Label
                textStyle={{
                  color: focused ? tomatoRed : "#858585",
                  marginBottom: 12,
                  marginTop: -12,
                }}
              >
                {children}
              </Label>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Path.BOTTOMTAB}
          component={BottomTab}
          options={{
            headerShown: false,           
          }}
        />
        <Stack.Screen
          name={Path.ITEM}
          component={ItemScreen}
          options={{
            headerShown: false,
            cardStyle:{
                backgroundColor: white
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
