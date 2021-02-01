import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const TodoItem = (props) => {
    const { item } = props;
    const { deleteItem } = props;
 
    return (
        <TouchableOpacity onPress={() => deleteItem(item.item.id)}>
            <View style={styles.todoItem}>
                <Text>{item.item.value}</Text>
            </View>
        </TouchableOpacity>  
    );
};

const styles = StyleSheet.create({
    todoItem: {
      padding: 10,
      backgroundColor: "#ccc",
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 3,
      borderColor: "black",
      marginVertical: 10
    }
});

export default TodoItem;