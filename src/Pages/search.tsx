import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import RestaurantsContainer from 'Containers/Restaurants';
import RestaurantCategories from 'Components/Filters/restaurants.categories';
import { useSelector } from 'react-redux';


const SearchPage = () => {

  const state: any = useSelector( state => state)
  const searchTerm = state.searchReducer.value
  return (
    <>
     
      <Box  sx={{  height: '100%', marginTop: "100px"}}>
        <Container  maxWidth="lg">
          <Grid container spacing={4} >
            <h3> 
              {searchTerm ? `Toate rezultatele pentru '${searchTerm}' in Bucuresti` : "Toate restaurantele din Bucuresti"}
            </h3>
            <RestaurantsContainer />
          </Grid> 
        </Container> 
      </Box>
      
    </>
  )
}

export default SearchPage