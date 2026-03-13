import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./styles/GlobalStyles.css";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import { FilterProvider } from "./context/FilterContext";

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <FilterProvider>
      <App />
    </FilterProvider>
  </Provider>
)
