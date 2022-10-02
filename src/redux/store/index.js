import { createStore } from 'redux';
import middleware from '../middleware';
import reducer from '../reducers';

// esi deprecation warning a talis, hal arar update anes lava
export const store = createStore(reducer, middleware);
