import * as actionTypes from "../actions/types";

const initialState = {
  items: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      let item = state.items.find(
        item =>
          item.drink === action.payload.drink &&
          item.option === action.payload.option
      );
      if (item) {
        item.quantity = item.quantity + action.payload.quantity;
        return {
          ...state,
          items: [...state.items]
        };
      } else {
        return {
          ...state,
          items: [...state.items.concat(action.payload)]
        };
      }

    case actionTypes.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item !== action.payload)
      };
    case actionTypes.CHECKOUT:
      return {
        ...state,
        items: []
      };

    default:
      return state;
  }
};

export default cartReducer;
