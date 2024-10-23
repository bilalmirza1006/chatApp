import logo from './logo.svg';
import './App.css';
import AppRouter from './components/AppRouter';
import { Provider } from 'react-redux';
import store from './store/store'
import Home from './pages/Home';
import Chat from './pages/Chat';

function App() {
  return (
    <Provider store={store}>
      {/* <Home /> */}
      <Chat/>
      {/* <AppRouter /> */}
    </Provider>
  );
}

export default App;
