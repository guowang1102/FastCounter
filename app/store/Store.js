import thunk from 'redux-thunk';
import {
    createStore,
    applyMiddleware,
} from 'redux';
import rootReducesr from '../reducers/rootReducer';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleware(rootReducesr);

export default store;