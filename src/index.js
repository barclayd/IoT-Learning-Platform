import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import 'normalize.css/normalize.css';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import a11y from 'react-a11y';
import {watchHistoricData, watchLiveData, watchArduinoData, watchAuth, watchUseCaseDataFirebase, watchUsersDataFirebase, watchUpdateUseCaseData, watchCreateUseCase, watchSensorsData, watchUpdateProfile} from "./store/sagas";
import historicDataReducer from './store/reducers/historicData';
import liveDataReducer from './store/reducers/liveData';
import authReducer from './store/reducers/auth';
import useCaseFirebaseReducer from './store/reducers/useCaseFirebase';
import usersFirebaseReducer from './store/reducers/usersFirebase';
import createUseCaseReducer from './store/reducers/createUseCase';
import sensorsFirebaseReducer from './store/reducers/sensorsFirebase';
import createUserReducer from './store/reducers/createUser';
import userProfileReducer from './store/reducers/userProfile';
import arduinoDataReducer from './store/reducers/arduinoData';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import "./styles/styles.scss";



a11y(React, ReactDOM, {
        rules: {
            'img-uses-alt': 'warn',
            'img-redundant-alt': ['warn', ['image', 'photo', 'foto', 'bild']]
        }
    }
);

const rootReducer = combineReducers({
    historicData: historicDataReducer,
    liveData: liveDataReducer,
    arduinoData: arduinoDataReducer,
    auth: authReducer,
    useCaseFirebase: useCaseFirebaseReducer,
    users: usersFirebaseReducer,
    createUseCase: createUseCaseReducer,
    sensors: sensorsFirebaseReducer,
    createUser: createUserReducer,
    userProfile: userProfileReducer
});

const sagaMiddleware = createSagaMiddleware();

// enable line below to hide redux chrome tools when in production
// const composeEnhancers = process.env.NODE_ENV ==='development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, sagaMiddleware)));

sagaMiddleware.run(watchHistoricData);
sagaMiddleware.run(watchLiveData);
sagaMiddleware.run(watchArduinoData);
sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchUseCaseDataFirebase);
sagaMiddleware.run(watchUsersDataFirebase);
sagaMiddleware.run(watchUpdateUseCaseData);
sagaMiddleware.run(watchCreateUseCase);
sagaMiddleware.run(watchSensorsData);
sagaMiddleware.run(watchUpdateProfile);

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
