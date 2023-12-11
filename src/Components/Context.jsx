import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

let apii ="https://hn.algolia.com/api/v1/search?";
const initialState = {
        isLoading: true,
        query: "HTML",
        nbPages: 0,
        page: 0,
        hits: [],
    };

export const AppContext = React.createContext();

const AppProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState);

    
    const fetchapiData = async (url) => {
        dispatch({ type: "SET_LOADING"});
        
        try{
            let res = await fetch(url);
            let result = await res.json();
            console.log(result);
            
            dispatch({
                type:"GET_STORIES",
                payload:{
                    hits: result.hits,
                    nbPages: result.nbPages,
                } 
            })
            
        }catch(error){
            console.log(error);
        }
    }
    const handleDelete = (post_id) => {
     dispatch({
         type: "DELETE_POST",
         payload: post_id,
     })
    }

    const searchPost = (data) => {
        dispatch({
            type: "SEARCH_POST",
            payload: data,
        })
    }
    const getNextPage = () => {
        dispatch({
            type: "NEXT_POST",
        })
    }
    const getPrevPage = () => {
        dispatch({
            type: "PREV_POST",
        })
    }
   useEffect(()=>{
     fetchapiData(`${apii}query=${state.query}&page=${state.page}`);
   //  sethits(list);

   },[state.query, state.page])
    return(
        <AppContext.Provider value={{ ...state, handleDelete, searchPost, getPrevPage, getNextPage }}>
           {/* <Search/> */}
           {children}
        </AppContext.Provider>
    )

}
    // custom hook
export const useGlobalContext = () => {
   return useContext(AppContext);
}
export default AppProvider;