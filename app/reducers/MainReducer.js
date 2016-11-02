import immutable from 'immutable';
import Constants from '../constants/Index';

const { Map } = immutable;

const initialData = Map({ value: 0 });
export default (state = initialData, action) => {
  switch (action.type) {
    case Constants.INCREMENT:
      {
        const incrementedValue = state.get('value') + 1;
        return state.set('value', incrementedValue);
      }
    case Constants.DECREMENT:
      {
        const decrementedValue = state.get('value') - 1;
        return state.set('value', decrementedValue);
      }
    default:
      {
        return state;
      }
  }
};
