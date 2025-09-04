import React from 'react';
import {
  TouchableHighlight,
  Text,
  Image,
  ViewStyle,
  TextStyle,
  ImageSourcePropType,
  ActivityIndicator,
} from 'react-native';
import { styles } from './styles';

interface ButtonProps {
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: ImageSourcePropType;
  label?: string;
  underlayColor?: string;
  loading?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  style,
  textStyle,
  icon,
  label,
  underlayColor = '#8d7373ff',
  // disabled = false,
  loading = false,
}) => (
  <TouchableHighlight
    style={[styles.button, style]}
    onPress={onPress}
    underlayColor={underlayColor}
    disabled={loading}
  >
    {loading ? (
      <ActivityIndicator size="small" color="#FF6F61" />
    ) : icon ? (
      <Image source={icon} />
    ) : (
      <Text style={[styles.buttonText, textStyle]}>{label}</Text>
    )}
  </TouchableHighlight>
);

export default Button;
