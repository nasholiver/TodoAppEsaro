
import store from './store/store';
import AppNavigator from './AppNavigator.js';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
