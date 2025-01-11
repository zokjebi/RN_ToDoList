// 참조 사이트 : https://velog.io/@yyy/React-Native-To-do-list-%EB%A7%8C%EB%93%A4%EA%B8%B0

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

  const _addTask = () => {
    alert(`add : ${newTask}`);
    setNewTask('');
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
          <Task text="todo list 1" />
          <Task text="todo list 2" />
          <Task text="todo list 3" />
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