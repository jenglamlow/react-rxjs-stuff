import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mapTo';

// Actions
const PING = 'rxjs/ping/PING';
const PONG = 'rxjs/pong/PONG';

// Reducer
const initialState = {
  isPinging: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case PING:
      return {
        ...state,
        isPinging: true
      };

    case PONG:
      return {
        ...state,
        isPinging: false
      };
    default: 
      return state;
  }
}

// Action Creators
export function ping() {
  return { 
    type: PING 
  };
}

export function pong() {
  return { 
    type: PONG 
  };
}

// side effects
// Epics
export const pingEpic = action$ =>
  action$.ofType(PING)
    .delay(1000) 
    .mapTo({ type: PONG });
