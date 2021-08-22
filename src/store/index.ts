import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userReduser } from './userReduser';

const rootReducer = combineReducers({
    user: userReduser
})

export const store = createStore(rootReducer, composeWithDevTools())

export type RootState = ReturnType<typeof rootReducer>