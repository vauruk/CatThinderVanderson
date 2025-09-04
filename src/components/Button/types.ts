import { ViewStyle, TextStyle, ImageSourcePropType } from 'react-native';

export interface ButtonProps {
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: ImageSourcePropType;
  label?: string;
  underlayColor?: string;
}
