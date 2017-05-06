import reducer from '../../reducers/MainReducer';
import Constants from '../../constants';


describe('reducers', () => {
  it('should return initial state', () => {
    expect(
      reducer(undefined, {}).get('value'),
    ).toEqual(0);
  });

  it('should return incremented value', () => {
    const nextState = reducer(undefined,
      {
        type: Constants.INCREMENT,
        data: {},
      });

    expect(nextState.get('value')).toEqual(1);
  });

  it('should return decremented value', () => {
    const nextState = reducer(undefined,
      {
        type: Constants.DECREMENT,
        data: {},
      });

    expect(nextState.get('value')).toEqual(-1);
  });
});
