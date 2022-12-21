import { SearchReducer, FilterReducer, RestaurantName } from "Classes/Enums/redux.enums"
import FoodMenu from "Interfaces/foodMenu"
import { cartActions } from "Classes/Enums/addToCartEnums"

const EnumValues = {
  searchAction: SearchReducer.search,
  filterAction: FilterReducer.filter,
  nameAction: RestaurantName.name
}

export const searchAction = (searchTerm: string) => {
  return {
    type: EnumValues.searchAction,
    payload: searchTerm
  }
}

export const filterAction = (filterTerm: string) => {
  return {
    type: EnumValues.filterAction,
    payload: filterTerm
  }
}

export const singleRestaurantAction = (restaurantData: any) => {
  return {
    type: EnumValues.nameAction,
    payload: restaurantData
  }
}

export const addToCart = (foodToAdd: FoodMenu) => {
  return {
    type: cartActions.add,
    payload: foodToAdd
  }
}

export const removeFromCart = (foodToRemove: FoodMenu) => {
  return {
    type: cartActions.remove,
    payload: foodToRemove
  }
}
