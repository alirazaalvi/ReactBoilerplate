import Constants from '../constants/index';
import Immutable from 'immutable';

let initialData = Immutable.Map({value: 0});
export default (state = initialData, action) => {
  switch (action.type) {
    case Constants.INCREMENT:
      let incrementedValue = state.get('value') + 1;
      return state.set('value', incrementedValue);
      break;
    case Constants.DECREMENT:
      let decrementedValue = state.get('value') - 1;
      return state.set('value', decrementedValue);
      break;
    default:
      return state;
  }
}
