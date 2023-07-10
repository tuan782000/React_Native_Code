import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import { WEATHER_API_KEY } from "@env";

export const useGetWeather = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [weather, setWeather] = useState([]);
    const [lat, setLat] = useState([]);
    const [lon, setLon] = useState([]);

    // Này gọi API kèm theo tọa độ để lấy dữ liệu về sau đó sử dụng useState bắt sự thay đổi và gán lại cho return cuối cùng để đưa về kết quả
    // kèm xử lý bất đồng bộ
    const fetchWeatherData = async () => {
        try {
            const res = await fetch(
                `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
            );
            const data = await res.json();
            setWeather(data);
        } catch (err) {
            setError("could not fetch weather");
        } finally {
            setLoading(false);
        }
    };
    // có try thì không có catch mà có catch thì không có try
    // Cái finally là luôn luôn chạy nha

    // Lấy tọa độ
    // xử lý bất đồng bộ
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== "granted") {
                setError("permission to access location was denied");
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setLat(location.coords.latitude);
            setLon(location.coords.longitude);
            await fetchWeatherData();
        })();
    }, [lat, lon]);

    //này trả kết quả sau khi xử lý
    return [loading, error, weather];
};
