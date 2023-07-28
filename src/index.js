import React from 'react';
import ReactDOM from 'react-dom/client';
import './page/LoginPage/index.css';
import App from './page/App';
import reportWebVitals from './reportWebVitals';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import {BrowserRouter} from "react-router-dom";

import {Provider} from 'react-redux'
import reduxThunk from 'redux-thunk'
import reducer from './redux/reducer'
import {applyMiddleware, legacy_createStore as createStore} from "redux";

const store = createStore(reducer, {}, applyMiddleware(reduxThunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
              <React.StrictMode>
                <App />
              </React.StrictMode>
            </BrowserRouter>
    </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
