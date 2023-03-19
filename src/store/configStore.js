import {applyMiddleware, combineReducers, createStore} from 'redux';
import reduxThunk from 'redux-thunk'
import { NavigateReducer } from './reducers/NavigateReducer';


//middleware saga
import createMiddleWareSaga from 'redux-saga';
import { rootSaga } from './sagas/rootSaga';


const middleWareSaga = createMiddleWareSaga();
const rootReducer = combineReducers({
    //reducer khai báo tại đây
    NavigateReducer,

})

const store = createStore(rootReducer,applyMiddleware(reduxThunk,middleWareSaga));

//Gọi saga
middleWareSaga.run(rootSaga);


export default store;

