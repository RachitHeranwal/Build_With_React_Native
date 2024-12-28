import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  useColorScheme,
  TouchableOpacity 
} from 'react-native';

const AppPro = (): JSX.Element => {
  const isDarkMode = true;
  return (
    <View style={[
      styles.Container,
      isDarkMode ? styles.darkBackground : styles.lightBackground
    ]}>
      <TouchableOpacity style={styles.button}>
        <Text style={[isDarkMode ? styles.whiteText : styles.darkText]}>
          Hello World!
        </Text>
      </TouchableOpacity>
    </View>
  );
}; 

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  button: {
    backgroundColor: '#333333',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#11',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  whiteText: {
    color: '#FFFFFF',
  },
  darkText: {
    color: '#000000',
  },
  darkBackground: {
    backgroundColor: '#1a1a1a',
  },
  lightBackground: {
    backgroundColor: '#FFFFFF',
  },
});

export default AppPro;
