declare var global: any;
global.__DEV__ = true;

import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CatTinderScreen from '../src/views/CatTinderScreen';
import { fireEvent, render } from '@testing-library/react-native';

const mockStore = configureStore([]);

describe('CatTinderScreen', () => {
  it('should call dispatch when like button is pressed', () => {
    const initialState = {
      cats: {
        cats: [
          { id: 'cat1', url: 'url1', breeds: [] },
          { id: 'cat2', url: 'url2', breeds: [] },
        ],
        loading: false,
        error: null,
      },
      catDetail: {
        detail: null,
        loading: false,
        error: null,
      },
      vote: {
        loading: false,
        error: null,
      },
    };
    const store = mockStore(initialState);
    store.dispatch = jest.fn();
    const { getAllByTestId } = render(
      <Provider store={store}>
        <CatTinderScreen />
      </Provider>,
    );
    // Like button is the second button in the buttonBar
    const likeButtonTestId = getAllByTestId('likeButtonTestId')[1];
    fireEvent.press(likeButtonTestId);
    expect(store.dispatch).toHaveBeenCalled();
  });
});
