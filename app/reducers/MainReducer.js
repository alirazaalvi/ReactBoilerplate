import Constants from '../constants/index';
import Immutable from 'immutable';

let initialData = Immutable.Map({value: 0});
export default (state = initialData, action) => {
  switch (action.type) {
    case Constants.INCREMENT:
      let newValue = state.get('value') + 1;
      return state.set('value', newValue);
      break;
    default:
      return state;
  }
}
