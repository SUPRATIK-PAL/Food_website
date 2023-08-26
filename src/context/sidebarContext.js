import { createContext, useContext, useReducer  } from "react";
import reducer from "../reducers/sidebarReducer"
import {OPEN_SIDEBAR, CLOSE_SIDEBAR} from "../actions/actions"



const SideBarContext = createContext({});


const initialState = {
  isSideBarOpen:false
}
export const SideBarProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const openSideBar = () => {
    dispatch({type:OPEN_SIDEBAR})
  }

  const closeSideBar = () => {
    dispatch({type:CLOSE_SIDEBAR})
  }

  return(
    <SideBarContext.Provider value={{
      ...state,
      openSideBar,
      closeSideBar
    }}>

    {children}

    </SideBarContext.Provider>
  )

}

export const useSideBarContext = () =>{
  return useContext(SideBarContext);
}