import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [newCount, setNewCount] = useState(0);

    // Cách dùng thứ 1 của useEffect ||
    // khi chạy dự án chắc chắn sẽ chạy useEffect và lấy useState đặt vào là 0
    // khi mà có 1 sự kiện (nhấn vào nút thay đổi) useEffect này sẽ tự động chạy lại.
    // Đó cũng chính là nhược điểm của thằng useEffect (1)
    // Cứ có bất kỳ thằng nào render trong này là useEffect (1) đều chạy.

    // useEffect(() => {
    //     console.log(`Our Count value is ${count}, Our Count value is ${newCount}`)
    // })
    // chạy bất cứ khi nào, có 1 thằng nào đó trong componet được cập dữ liệu, chắc chắn useEffect cũng đều chạy chức năng bên trong nó.

    // Sử dụng useEffect(3) khắc phục điểm yếu render của useEffect(1)
    // useEffect(() => {
    //     console.log(`Our Count value is ${count}, Our Count value is ${newCount}`)
    // },[count])
    // tóm lại phụ thuộc vào đối số mà nó nhận vào, nó sẽ focus vào state đó khi mà có thay đổi thì mới chạy chức năng bên trong useEffect.

    // Ngoải ra khi dùng useEffect xong thì cần phải clean up nó, tránh làm rò rỉ bộ nhớ
    // mô phỏng

    useEffect(() => {
        console.log(
            `Our Count value is ${count}, Our Count value is ${newCount}`
        );
        return () => {
            console.log("useEffect cleanup")
        };
    }, [count]);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{`count: ${count}`}</Text>
            <Button
                color={"red"}
                title={"Increase the count"}
                onPress={() => setCount(count + 1)}
            />
            <Button
                color={"green"}
                title={"Decrease the count"}
                onPress={() => setCount(count - 1)}
            />

            <Text style={styles.title}>{`count: ${newCount}`}</Text>

            <Button
                color={"red"}
                title={"Increase the count"}
                onPress={() => setNewCount(newCount + 1)}
            />
            <Button
                color={"green"}
                title={"Decrease the count"}
                onPress={() => setNewCount(newCount - 1)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "orange",
    },
    title: {
        alignSelf: "center",
        fontSize: 25,
        marginTop: 25,
    },
});
export default Counter;
