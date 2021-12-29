export const initialState = {
  isUpdated: false,
  isUpdating: false,
  UpdateErrorReason: "",
};

export const RANK_UPDATE_REQUEST = "RANK_UPDATE_REQUEST";
export const RANK_UPDATE_SUCCESS = "RANK_UPDATE_SUCCESS";
export const RANK_UPDATE_FAILURE = "RANK_UPDATE_FAILURE";

const RankReducer = (state = initialState, action) => {
  switch (action.type) {
    case RANK_UPDATE_REQUEST: {
      return {
        ...state,
        isUpdating: true,
        UpdateErrorReason: "",
      };
    }
    case RANK_UPDATE_SUCCESS: {
      return {
        ...state,
        isUpdating: false,
        data: action.data,
      };
    }
    case RANK_UPDATE_FAILURE: {
      return {
        ...state,
        isUpdating: false,
        UpdateErrorReason: action.error,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default RankReducer;
