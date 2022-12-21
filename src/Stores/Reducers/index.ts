import { combineReducers } from "redux"
import { SearchReducer,FilterReducer, RestaurantName } from "Classes/Enums/redux.enums"
import FoodMenu from "Interfaces/foodMenu"
import { cartActions } from "Classes/Enums/addToCartEnums"
import { Restaurant } from "Interfaces/restaurant"

export const searchReducer = (state = {key: "q", value: ""}, action: {type: string, payload: any}) => {
  switch(action.type) {
    case SearchReducer.search : 
      return {
        ...state,
        value: action.payload
      }
  }

  return state
}


export const filterReducer = (state = {key: "category" , value: ""}, action: {type: string, payload: any}) => {
  switch(action.type) {
    case FilterReducer.filter: 
      return {
        ...state,
        value: action.payload

      }
  }
  return state
}

export const restaurantPageReducer = (state: Restaurant = {}, action: {type:string, payload: any}) => {
  switch (action.type) {
    case RestaurantName.name: 
      return {
        ...state, 
        restaurant: action.payload
      }
  }

  return state
}

const initialState: FoodMenu[] = []

export const cartReducer = (state = initialState, action: {type: string, payload: any}) => {

  switch (action.type) {
    case cartActions.add:
      return [
        ...state, 
        action.payload 
      ]
    case cartActions.remove:
      return state.filter( item => item !== action.payload)

  }

  return state
}


export default combineReducers({
  searchReducer,
  filterReducer,
  restaurantPageReducer,
  cartReducer
})