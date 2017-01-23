import { fromJS } from 'immutable';
import reducer from '../../reducers/MainReducer';
import Constants from '../../constants';


describe('reducers', () => {
  it('should return initial state', () => {
    expect(
      reducer(undefined, {}).toJS(),
    ).toEqual({
      value: 0,
    });
  });

  it('should return incremented value', () => {
    const nextState = reducer(undefined,
      {
        type: Constants.INCREMENT,
        data: {},
      });

    expect(nextState).toEqual(fromJS({
      value: 1,
    }));
  });

  it('should return decremented value', () => {
    const nextState = reducer(undefined,
      {
        type: Constants.DECREMENT,
        data: {},
      });

    expect(nextState).toEqual(fromJS({
      value: -1,
    }));
  });
});
