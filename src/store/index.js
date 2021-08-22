import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userReduser } from './userReduser';

export const store = createStore(userReduser, composeWithDevTools())