import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import 'normalize.css/normalize.css';
import thunk from 'redux-thunk';
import historicDataReducer from './store/reducers/historicData';
import liveDataReducer from './store/reducers/liveData';
import useCaseReducer from './store/reducers/useCaseData';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import "./styles/styles.scss";

const rootReducer = combineReducers({
    historicData: historicDataReducer,
    liveData: liveDataReducer,
    useCaseData: useCaseReducer
});

// const composeEnhancers = process.env.NODE_ENV ==='development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


const app = (
    <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
