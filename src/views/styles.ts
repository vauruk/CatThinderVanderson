import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
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
    backgroundColor: '#fff',
    borderRadius: 24,
    marginHorizontal: 0,
    shadowColor: '#000',
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
    backgroundColor: '#fff',
    borderRadius: 40,
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
    shadowColor: '#000',
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
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
  },
  likeText: {
    color: '#FF6F61',
    fontWeight: 'bold',
    fontSize: 18,
  },
  dislikeText: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
