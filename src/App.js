// git 경로 : https://github.com/zokjebi/RN_ToDoList
// 참조 사이트_1 : https://velog.io/@yyy/React-Native-To-do-list-%EB%A7%8C%EB%93%A4%EA%B8%B0
// 참조 사이트_2 : https://velog.io/@yyy/React-Native-To-do-list-%EB%A7%8C%EB%93%A4%EA%B8%B02

import Title from './components/Title';
import Input from './components/Input';
import Task from './components/Task';
//import IconButton from './components/IconButton';
//import { images } from './images';

import { StatusBar } from 'react-native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Button, Text, TextInput, View, ScrollView } from 'react-native';

export default function App() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState({
    1: { id: '1', text: 'todo list 1', completed: false },
    2: { id: '2', text: 'todo list 2', completed: false },
    3: { id: '3', text: 'todo list 3', completed: false },
    4: { id: '4', text: 'todo list 4', completed: false },
    5: { id: '5', text: 'todo list 5', completed: false },
    6: { id: '6', text: 'todo list 6', completed: false },
  });

  // 등록 함수
  const _addTask = () => {
    /*
    alert(`add : ${newTask}`);
    setNewTask('');
    */
    const ID = Date.now().toString();
    const newTaskObject = {
      [ID]: { id: ID, text: newTask, completed: false },
    };
    setNewTask('');
    setTasks({ ...tasks, ...newTaskObject });
  };

  //삭제 함수
  const _deleteTask = (id) => {
    const currentTasks = Object.assign({}, tasks);
    delete currentTasks[id];
    setTasks(currentTasks);
  };


  const _handleTextChange = (text) => {
    setNewTask(text);
  };

  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <Title title="Todo List✔️"></Title>
        <Input
          value={newTask}
          onChangeText={_handleTextChange}
          onSubmitEditing={_addTask}
        />
        <ScrollView>
          {Object.values(tasks)
            .reverse()
            .map((item) => (
              <Task key={item.id} item={item} deleteTask={_deleteTask} />
            ))}
        </ScrollView>
    </View>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#328da8',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});