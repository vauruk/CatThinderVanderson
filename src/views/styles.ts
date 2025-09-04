import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const color = {
  primary: '#F5F6FA',
  secondary: '#4A90E2',
  background: '#F5F6FA',
  white: '#FFFFFF',
  shadow: '#222222',
  textSecondary: '#888888',
  error: '#FF6F61',
  underlayColor: '#8d7373ff',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
    justifyContent: 'center', // centraliza verticalmente
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 16,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: width - 32,
    height: width * 1.1,
    backgroundColor: color.white,
    borderRadius: 24,
    marginHorizontal: 0,
    shadowColor: color.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 24,
  },
  buttonBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 16,
    marginHorizontal: 70,
  },
  actionButton: {
    backgroundColor: color.white,
    borderRadius: 40,
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
    shadowColor: color.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  actionBar: {
    marginTop: 30,
    flexDirection: 'row',
    borderRadius: 50,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '50%',
    paddingVertical: 5,
    backgroundColor: color.white,
  },
  likeText: {
    color: color.error,
    fontWeight: 'bold',
    fontSize: 18,
  },
  dislikeText: {
    color: color.shadow,
    fontWeight: 'bold',
    fontSize: 18,
  },
  actionBarButton: {
    borderRadius: 40,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: color.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
});
