import Constants from '../constants/index';

let initialData = {value: 0};
export default (state = initialData, action) => {
  switch (action.type) {
    case Constants.INCREMENT:
      state.value = state.value + 1;
      return Object.create(state);
      break;
    default:
      return state;
  }
}
