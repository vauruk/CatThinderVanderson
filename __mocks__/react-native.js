module.exports = {
  ...jest.requireActual('react-native'),
  Dimensions: {
    get: () => ({ width: 375, height: 667 }),
  },
  StyleSheet: {
    create: styles => styles,
  },
};
