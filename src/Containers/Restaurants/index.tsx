import Restaurants from 'Components/Elements/restaurants';
import CardWithLoading from 'Components/Cards/Card.withLoading';
import useFetch from 'Hooks/useFetch';
import { Server } from "Classes/Enums/server.enums";
import RestaurantsRepository from 'Classes/Repositories/restaurants.repository';
import { useSelector } from 'react-redux/es/exports';

const RestaurantsContainer = (props: {nrOfRestaurants?: number}) => {

  const store: any = useSelector (state => state)
  const restaurantServer = {
    url: Server.url,
    path: Server.pathRestaurant
  }

  const filterQuery = store.filterReducer.value !== "" && store.filterReducer

  const query = [
    store.searchReducer,
    filterQuery
  ]  


  const restaurantRepoInstante = new RestaurantsRepository(restaurantServer.url)
  const restaurantsData = useFetch(restaurantRepoInstante, restaurantServer.path, query) 

  const RestaurantsWithLoading = CardWithLoading(Restaurants)
  return (
    <RestaurantsWithLoading 
      loading={restaurantsData.loaded} 
      restaurants={restaurantsData.data}
      limit={props.nrOfRestaurants} 
    />
  )
  
};

export default RestaurantsContainer

