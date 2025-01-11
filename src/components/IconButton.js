//import { images } from '../images';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

const IconButton = ({ type }) => {
  return (
    <TouchableOpacity style={styles.iconbutton}>
      <Image source={type} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconbutton: {
    margin: 10,
  },
});

export default IconButton;