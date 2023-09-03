import { UPDATE_USER_DATA } from "../actions/actionTypes";
const initialState = {
  userDtls: {
    firstName: "",
    lastName: "",
    gender: "",
  },
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_USER_DATA:
      return {
        ...state,
        userDtls: {
          ...state.userDtls,
          firstName: payload.firstName,
          lastName: payload.lastName,
          gender: payload.gender,
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
