import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import RestaurantsContainer from 'Containers/Restaurants';
import RestaurantCategories from 'Components/Filters/restaurants.categories';
import { useSelector } from 'react-redux';


const Restaurants = () => {

  const state: any = useSelector( state => state)
  const foodType = state.filterReducer.value

  const asideSticky = {
    position: "sticky",
    top: "20%" 
  } as React.CSSProperties
  
  return (
    <>
     
      <Box  sx={{  height: '100%', marginTop: "100px"}}>
        <Container  maxWidth="lg">
          <Grid container spacing={4} >
            <Grid  lg={2} item>
              <aside style={asideSticky} >
                <h5>Filtre</h5>
                <RestaurantCategories renderFilters/> 
              </aside>
            </Grid>
            <Grid lg={10} item>
              <h3> 
                {foodType ? `Livrare de ${foodType} in Bucuresti` : "Restaurante livrare in Bucuresti"}
              </h3>
              <RestaurantsContainer />
            </Grid>
          </Grid> 
        </Container> 
      </Box>
      
    </>
  )
}

export default Restaurants