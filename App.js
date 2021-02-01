import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import { v4 as uuidv4 } from 'uuid';


import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";

export default function App() {

  const [todos, setTodos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const addTodo = (inputValue) => {
    // on stocke un objet qui aura un id et une valeur, et non un simple input
    // on appelle la fonction de uuid4 pour générer une clé aléatoire 
    setTodos([...todos, { id: uuidv4(), value: inputValue }]);
    // setInputValue("");
  };

  const renderItem = (item) => {
    // item ici est un objet, qui a une propriété item et c'est cette propriété qui contient la valeur de l'item
    // ce n'est pas directement la value de l'input => FlatList va créer automatiquement un objet
    return (
      <TodoItem item={item} deleteItem={deleteItem}/>
    );
  };

  const deleteItem = (itemId) => {
    const array = todos.filter((item) => itemId !== item.id);
    setTodos(array);
  };

  const handleAddTodo = () => {
    setModalVisible(true);
  };

  // const closeModal = () => {
  //   setModalVisible(false);
  // };

  return (
    <View style={styles.container}>
      <Button title="Ajouter un todo" onPress={handleAddTodo}/>
      <TodoInput 
      addTodo={addTodo} 
      modalVisible={modalVisible} 
      setModalVisible={setModalVisible} 
      // on appelle la fonction ici 
      // closeModal={closeModal}
      />
      {/* l'intéret de la FlatList en comparaison avec la View, c'est qu'elle ne render que ce qui est visible sur l'écran (invisible à l'oeil nu) */}
      <FlatList
        // data est comme le tableau dans lequel on map 
        data={todos}
        // keyExtractor prend une fonction qui génère une clé 
        keyExtractor={(item) => item.id}
        // renderItem est comme un .map / prend en argument un item qui correspond à un objet 
        renderItem={renderItem}
      />
      {/* <ScrollView>
        {todos.map((todo, index) => {
          return (
            <View key={todo + index} style={styles.todoItem}>
              <Text>{todo}</Text>
            </View>
          );
        })}
      </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
  }
});
