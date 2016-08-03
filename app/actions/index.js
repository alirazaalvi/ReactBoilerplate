import Constants from '../constants';

export function increment(data) {
  return {
    type: Constants.INCREMENT,
    data: data
  }
}

export function decrement(data) {
  return {
    type: Constants.DECREMENT,
    data: data
  }
}
