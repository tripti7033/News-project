// import React from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_STORIES":
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case "DELETE_POST":
      return {
        ...state,
        hits: state.hits.filter((curEle) => curEle.objectID !== action.payload),
      };
    case "SEARCH_POST":
      return {
        ...state,
        query: action.payload,
      };

      case "PREV_POST":
        let num = state.page - 1;
        if(num < 0 ){
           num = 0
        }
        return{
            ...state,
            page: num,
        }

        case "NEXT_POST":
          let numInc = state.page + 1;
        if(numInc >= state.nbPages) {
           numInc = 0;
        }
        return{
            ...state,
            page: numInc,
        }

    default:
      return state;
  }
  //   return  state;
};

export default reducer;
