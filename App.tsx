import { Keyboard, Pressable, StyleSheet, Text, View } from "react-native";
import { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Button, Container, Search, Label, BodyText, Counter, Favourite } from "@/shared";
import Navigation from "@/navigation";
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'poppins-light': require('@app/assets/fonts/Poppins-Light.ttf'),
    'poppins-regular': require('@app/assets/fonts/Poppins-Regular.ttf'),
    'poppins-medium': require('@app/assets/fonts/Poppins-Medium.ttf'),
    'poppins-semi-bold': require('@app/assets/fonts/Poppins-SemiBold.ttf'),
    'poppins-bold': require('@app/assets/fonts/Poppins-Bold.ttf'),
    'poppins-black': require('@app/assets/fonts/Poppins-Black.ttf'),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
        <StatusBar style="dark" />
        <Pressable onPress={Keyboard.dismiss} style={styles.container}>
            <StatusBar style="auto" />
            <Navigation />
        </Pressable>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
