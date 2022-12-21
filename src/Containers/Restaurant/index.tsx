import RestaurantPage from "Pages/restaurant"
import { useSelector } from "react-redux"



const RestaurantContainer = () => {
  const store: any = useSelector (state => state)
  const restaurantData = store.restaurantPageReducer?.restaurant[0]
  return (
    <>
      <RestaurantPage restaurantData={restaurantData} />
    </>
    
  )
}

export default RestaurantContainer