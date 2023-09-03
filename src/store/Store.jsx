import { createStore } from 'redux';

import rootReducer from '../components/redux/reducers/rootReducer';

const store = createStore(rootReducer);

export default store;

