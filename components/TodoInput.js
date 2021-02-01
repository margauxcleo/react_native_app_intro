import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import Modal from 'modal-react-native-web';

const TodoInput = (props) => {

    const [inputValue, setInputValue] = useState("");
    const { addTodo, modalVisible, setModalVisible } = props;
    // ajouter closeModal() ici 
    
    const handleOnChangeInput = (enteredValue) => {
        setInputValue(enteredValue);
    };

    const handleAddTodo = () => {
        if (inputValue === "") return;
        addTodo(inputValue);
        setInputValue("");
        setModalVisible(false);
        // ou correction prof avec closeModal
        // closeModal()
    };

    const goBack = () => {
        // on vide l'input
        setInputValue("");
        // on ferme ou on appelle la fonction closeModal 
        setModalVisible(false);
    };

    return (
        <Modal visible={modalVisible} animationType='fade'>
            <View style={styles.inputContainer}>
                <TextInput
                style={styles.input}
                placeholder="todo"
                value={inputValue}
                onChangeText={handleOnChangeInput}
                />
                <View style={styles.buttons}>
                    <Button title="Ajouter" color="green" onPress={handleAddTodo} />
                    <Button title="Annuler" color="red" onPress={goBack}/>
                </View>
            </View>
        </Modal>  
    );
};

export default TodoInput;

const styles = StyleSheet.create({
    input: {
        width: "50%",
        borderColor: "black",
        borderWidth: 1,
        margin: 10,
        padding: 5
    },
    inputContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    modal: {
        alignItems: "center",
        justifyContent: "center"
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "50%"
    }
});
