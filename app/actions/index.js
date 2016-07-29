import Constants from '../constants';

export function increment(data) {
  return {
    type: Constants.INCREMENT,
    data: data
  }
}
