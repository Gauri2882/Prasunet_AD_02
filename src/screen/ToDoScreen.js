import {
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import React from 'react';
import { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import Fallback from "../components/Fallback"; 

const ToDoScreen = () => {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [editedTodo, setEditedTodo] = useState(null);

    const handleAddTodo = () => {
        if (editedTodo) {
            
            const updatedTodoList = todoList.map(item =>
                item.id === editedTodo.id ? { ...item, title: todo } : item
            );
            setTodoList(updatedTodoList);
            setEditedTodo(null);
        } else {
           
            setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);
        }
        setTodo("");
    };

    const handleDeleteTodo = (id) => {
        const updatedTodoList = todoList.filter((todo) => todo.id !== id);
        setTodoList(updatedTodoList);
    };

    const handleEditTodo = (todo) => {
        setEditedTodo(todo);
        setTodo(todo.title);
    };

    const renderTodos = ({ item }) => {
        return (
            <View
                style={{
                    backgroundColor: "#1e90ff",
                    borderRadius: 6,
                    paddingHorizontal: 6,
                    paddingVertical: 8,
                    marginBottom: 12,
                    flexDirection: "row",
                    alignItems: "center",
                    width: 360,
                    height: 70,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.8,
                    shadowRadius: 3,
                }}
            >
                <Text style={{
                    color: "#fff",
                    fontSize: 20,
                    fontWeight: "800",
                    flex: 1,
                }}>
                    {item.title}
                </Text>

                <Icon
                    name="edit"
                    size={25}
                    color="#fff"
                    style={{ marginRight: 10 }}
                    onPress={() => handleEditTodo(item)} />

                <Icon
                    name="trash"
                    size={25}
                    color="#fff"
                    style={{ marginRight: 10 }}
                    onPress={() => handleDeleteTodo(item.id)} />
            </View>
        );
    };

    return (
        <View style={{ marginHorizontal: 16, top: 16 }}>
            <TextInput
                style={{
                    borderWidth: 2,
                    borderColor: '#1e90ff',
                    borderRadius: 6,
                    paddingVertical: 6,
                    paddingHorizontal: 16,
                }}
                placeholder="Add a task"
                value={todo}
                onChangeText={(userText) => setTodo(userText)}
            />

            <TouchableOpacity
                style={{
                    backgroundColor: "#000",
                    borderRadius: 6,
                    paddingVertical: 12,
                    marginVertical: 34,
                    alignItems: "center",
                }}
                onPress={() => handleAddTodo()}
            >
                <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
                    {editedTodo ? "Save" : "Add"}
                </Text>
            </TouchableOpacity>

            <FlatList data={todoList} renderItem={renderTodos} />

            {todoList.length <= 0 && <Fallback />}
        </View>
    );
};

export default ToDoScreen;

const styles = StyleSheet.create({});
