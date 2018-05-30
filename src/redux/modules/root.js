import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import ping, { pingEpic } from './ping';

export const rootEpic = combineEpics(
  pingEpic,
);

export const rootReducer = combineReducers({
  ping
});