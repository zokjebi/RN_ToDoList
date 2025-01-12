import IconButton from './IconButton';
import { images } from '../images';

import { Dimensions, StyleSheet, Button, Text, TextInput, View } from 'react-native';

const Task = ({ item, deleteTask }) => {
    return (
      <View style={styles.container}>
        <IconButton type={images.uncompleted} />
        <Text style={{ fontSize: 20, flex: 1 }}>{item.text}</Text>
        <IconButton type={images.edit} />
        <IconButton type={images.delete} id={item.id} onPressOut={deleteTask} />
      </View>
    );
};
  
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: Dimensions.get('window').width - 15,
        marginLeft: 7,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});

export default Task;