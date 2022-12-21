import { Server } from "Classes/Enums/server.enums"
import AppButton from "Components/Buttons/button/button"
import useFetch from "Hooks/useFetch"
import { nanoid } from "nanoid"
import { Link, useNavigate } from "react-router-dom"
import theme from "Theme/theme"
import {useSelector, useDispatch} from "react-redux"
import { filterAction } from "Stores/Actions"
import unique from "Helper.functions/unique"

import Paste from '@mui/icons-material/DinnerDiningOutlined'
import Libaneza from '@mui/icons-material/EggAltOutlined'
import Orientala from '@mui/icons-material/KebabDiningOutlined'
import Pizza from '@mui/icons-material/LocalPizzaOutlined'
import Burgeri from '@mui/icons-material/LunchDiningOutlined'
import Asiatica from '@mui/icons-material/RamenDiningOutlined'
import Traditionala from '@mui/icons-material/TapasOutlined'
import Greceasca from '@mui/icons-material/BreakfastDiningOutlined';
import { Restaurant } from "Interfaces/restaurant"
import RestaurantsRepository from "Classes/Repositories/restaurants.repository"


interface renderMode {
  renderButtons?: boolean
  renderFilters?: boolean
}

const RestaurantCategories = ({renderButtons, renderFilters}: renderMode) => {

  const getCategoryIcon = (categoryTerm:string) => {
    switch(categoryTerm) {
      case "Paste": 
        return (<Paste />);
      case "Libaneza": 
        return (<Libaneza />);
      case "Orientala": 
        return (<Orientala />);
      case "Asiatica": 
        return (<Asiatica />);
      case "Traditionala": 
        return (<Traditionala />);
      case "Pizza": 
        return (<Pizza />);
      case "Burgeri": 
        return (<Burgeri />);
      case "Greceasca": 
        return (<Greceasca />);
      default: 
        return (<Burgeri />)
    }
  }

  const dispatch = useDispatch()
  const store = useSelector(state => state)

  const restaurantServer = {
    url: Server.url,
    path: Server.pathRestaurant
  }
  const uniqueid = nanoid()
  const navigate = useNavigate()
  const restaurantRepoInstante = new RestaurantsRepository(restaurantServer.url)

  const restaurantsData = useFetch(restaurantRepoInstante, restaurantServer.path)

  const categories = restaurantsData?.data.map( (restaurant: any) => {
    return restaurant.category
  }).filter(unique)
  


  // Used to render filters as a list of buttons
  const renderCategoryButton = categories.map( (category, index) => {

    const handleClick = () => {
      const filter = category !== undefined ? category : ""
      dispatch(filterAction(filter))
      navigate(`/restaurante/${category}`)
    }
    return <>
      <AppButton 
        key={index} 
        textColor="#000" 
        color={theme.palette.primary.light} 
        label={category ? category : ""}
        onClick={() => {handleClick()}}
      /> 
    </>
  })

  // Used to render filters from categories
  const renderCategoryFilter = categories.map( (category) => {
    const currentPage:any = window.location.pathname;
    const activeClass = currentPage?.toString().includes(category) ? "active" : ""

    const handleFilter = () => {
      const filter = category !== undefined ? category : ""
      dispatch(filterAction(filter))
    }

    return <>
        <li  key={uniqueid}  className={activeClass}>
          <Link onClick={handleFilter} style={{display: "flex", alignItems: "center", gap: 8 }} 
          to={`/restaurante/${category}`}>
            <div className="filter__icon">
              {getCategoryIcon(category)}
            </div> 
            {category}
          </Link>
        </li>
    </>
  })

  return (
    <>
      {renderButtons  && renderCategoryButton}
      
      {renderFilters &&
      <ul className="restaurants__filter">
        {renderCategoryFilter}
      </ul>
      }
    </>
  )
}

export default RestaurantCategories