import ReactDOM from 'react-dom/client'
import './index.css'
import { DataProvider } from './store/DataProvider';
import { Router } from './Router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <DataProvider>
    <Router />
  </DataProvider>
)
