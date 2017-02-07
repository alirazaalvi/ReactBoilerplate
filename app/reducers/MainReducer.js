import immutable from 'seamless-immutable';
import Constants from '../constants';

const initialData = immutable({ value: 0 });
export default (state = initialData, action) => {
  switch (action.type) {
    case Constants.INCREMENT:
      {
        return immutable.update(state, 'value', (x => x + 1));
      }
    case Constants.DECREMENT:
      {
        return immutable.update(state, 'value', (x => x - 1));
      }
    default:
      {
        return state;
      }
  }
};
