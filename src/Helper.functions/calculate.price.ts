import FoodMenu from "Interfaces/foodMenu"

 const calculatePrice = (cartItems: FoodMenu[]) => {
  const prices = cartItems.map( item => {return item.foodPrice})
  
  if (prices.length === 0) {
    return
  }

  return prices.reduce( (prevPrice:number, currentValue: number) => {
    return prevPrice + currentValue
  })
}

export default calculatePrice