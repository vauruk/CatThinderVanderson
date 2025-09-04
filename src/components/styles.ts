import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
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
  buttonText: {
    color: '#FF6F61',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },

  blank: {
    height: 120,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderTopEndRadius: 20,
    marginHorizontal: 20,
    borderTopStartRadius: 20,
    marginTop: -60,
    alignItems: 'flex-start',
    shadowColor: '#201616ff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    width: '90%',
    shadowRadius: 8,
    elevation: 2,
    minHeight: 56,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  noDetailText: {
    color: '#FF6F61',
    textAlign: 'center',
    width: '100%',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#222',
  },
  origin: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#BFBFC0',
  },
  text: {
    fontSize: 16,
    color: '#444',
    marginBottom: 4,
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
});
