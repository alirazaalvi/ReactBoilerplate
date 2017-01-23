import * as actions from '../../actions';
import Constants from '../../constants';

describe('actions', () => {
  it('should increment number', () => {
    const expectedAction = {
      type: Constants.INCREMENT,
      data: {},
    };

    expect(actions.increment({})).toEqual(expectedAction);
  });

  it('should decrement number', () => {
    const expectedAction = {
      type: Constants.DECREMENT,
      data: {},
    };

    expect(actions.decrement({})).toEqual(expectedAction);
  });
});

