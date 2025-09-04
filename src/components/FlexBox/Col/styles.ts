import { StyleSheet } from 'react-native';

const styles = (flexValue: number) => {
  return StyleSheet.create({
    content: {
      flex: flexValue,
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};

export default styles;
