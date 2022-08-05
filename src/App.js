import './App.css';
import { MainPage } from './moduls/MainPage';
import { Provider } from 'react-redux';
import { store } from './moduls/store';

function App() {

  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}

export default App;
