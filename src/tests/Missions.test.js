import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Missions from '../components/missions/Missions';
import store from '../redux/configureStore';

const renderMissions = () => {
  render(
    <Provider store={store}>
      <Missions />
    </Provider>,
  );
};

describe('check missions component', () => {
  test('should render missions', () => {
    renderMissions();
    expect(document.body.innerHTML).toMatchSnapshot();
  });

  test('check if main missions component renders', () => {
    renderMissions();
    expect(document.querySelector('.missions')).toMatchSnapshot();
  });

  test('check if the missions table renders', () => {
    renderMissions();
    expect(screen.getByRole('table')).toBeInTheDocument();
  });
});
