import React, { useState, useEffect } from "react";
// import CurrentWeather from "./src/screens/CurrentWeather";
// import UpcomingWeather from "./src/screens/UpcomingWeather";
// import OurChild from "./src/components/OurChild";
// import City from "./src/screens/City";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Feather } from "@expo/vector-icons";
// import Counter from "./src/demonstration/Counter";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import * as Location from "expo-location";
import { WEATHER_API_KEY } from "@env";
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
// const Tab = createBottomTabNavigator();
import { useGetWeather } from "./src/hooks/useGetWeather";
import ErrorItem from "./src/components/ErrorItem";

const App = () => {
    // Cha lấy dữ liệu ở đây (tại hooks)
    const [loading, error, weather] = useGetWeather();
    // if (weather) {
    //     console.log(weather);
    // }

    // Nó đang xét điều kiện neesy mà có dữ liệu weather và danh sách  weather.list và loading = false thì mới chạy lệnh bên trong
    if (weather && weather.list && !loading) {
        return (
            <NavigationContainer>
                <Tabs weather={weather} />
            </NavigationContainer>
        );
    }
    // trường hợp còn lại là show lỗi hoặc show trang loading
    return (
        <View style={styles.container}>
            {error ? (
                <ErrorItem />
            ) : (
                <ActivityIndicator size={"large"} color={"blue"} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flex: 1,
    },
});

export default App;
