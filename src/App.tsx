import { Provider } from 'react-redux';
import { store } from './store';
import CryptoTable from './components/CryptoTable';
import './App.css';

const App = () => (
    <Provider store={store}>
        <div className='App'>
            <h1>📈 Crypto Price Tracker</h1>
            <CryptoTable />
        </div>
    </Provider>
);

export default App;
