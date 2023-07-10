import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import moment from "moment";
import { weatherType } from "../utilities/WeatherType";

const ListItem = (props) => {
    // sử dụng kỹ thuật props để truyền dữ liệu từ cha xuống con để hiển thị
    // ở đây là con
    const { dt_txt, min, max, condition } = props
    // sử dụng kỹ thuật destructuring để viết cú pháp styles cho gọn
    const { item, date, temp, dateTextWrapper } = styles
    return (
      <View style={item}>
        <Feather name={weatherType[condition]?.icon} size={50} color={'white'} />
        <View style={dateTextWrapper}>
            {/* sử dụng thư viện moment để xử lý ngày giờ */}
          <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
          <Text style={date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
        </View>
        <Text style={temp}>{`${Math.round(min)}° / ${Math.round(max)}°`}</Text>
      </View>
    )
  }

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderWidth: 5,
        backgroundColor: "indianred",
    },
    temp_min: {
        color: "white",
        fontSize: 18,
    },
    temp_max: {
        color: "white",
        fontSize: 18,
    },
    date: {
        color: "white",
        fontSize: 12,
    },
    dateTextWrapper: {
        flexDirection: "column",
    }
});
export default ListItem;
