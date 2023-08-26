import { mealReducer } from "../reducers/mealReducer"
import { createContext, useContext, useEffect, useReducer } from "react"
import {startFetchCategories} from "../actions/mealsActions"

const initialState = {
  categories: [],
  categoryLoading: false,
  categoryError: false,
  categoryMeals: [],
  categoryMealsLoading: false,
  categoryMealsError: false,
  meals:[],
  mealsLoading:false,
  mealsError: false,
  meal:[],
  mealLoading:false,
  mealError:false,
}

const MealContext = createContext({});

export const MealContextProvider = ({children}) => {
  const[state, dispatch] = useReducer(mealReducer, initialState);

  useEffect(() => {
    startFetchCategories(dispatch);
  },[])

  return(
    <MealContext.Provider value={{
      ...state,
      dispatch
    }}>
      {children}
    </MealContext.Provider>
  )
}


export const useMealContext = () => {
  return useContext(MealContext);
}