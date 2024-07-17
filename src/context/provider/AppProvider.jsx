import React, {useReducer} from 'react'
import AppContext from "../store/Index.jsx";
import reducer, {initialState} from "../reducer/Reducer.js";

const AppProvider = ({children}) => {
    return (
        <AppContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </AppContext.Provider>
    )
}
export default AppProvider
