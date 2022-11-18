import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../redux/configureStore';
import Rockets from '../components/rockets/Rockets';

describe('Rocket page testing', () => {
  test('Does Rocket match the snapshot', () => {
    const rocket = render(
      <BrowserRouter>
        <Provider store={store}>
          <Rockets />
        </Provider>
      </BrowserRouter>,
    );
    expect(rocket).toMatchSnapshot();
  });
});