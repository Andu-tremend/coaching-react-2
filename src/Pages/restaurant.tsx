import Box from "@mui/material/Box/Box"
import Container from '@mui/material/Container/Container';
import CardHeader from "Components/Cards/Card.header";
import Card from "Components/Cards/Card";
import CardFooter from "Components/Cards/Card.footer";
import Grid from "@mui/material/Grid/Grid";
import { Spacing } from "Classes/Helper/Spacing.style";
import logoWhite from "StaticFiles/SVGs/logo-white.svg";
import Menu from "Containers/Food.menu";
import { Restaurant } from "Interfaces/restaurant";
import Cart from "Components/Cart";

 const RestaurantPage = ({restaurantData}: any) => {

  const spacingStyle = new Spacing
  spacingStyle.setPadding("2rem");
  const customPadding = spacingStyle.style

 
    
  return (
    <Box className="restaurant-page__wrapper" >
      <div className="restaurant-page__bg-image">
        <img src={restaurantData?.picture} />
      </div>
      <Container maxWidth="xl" >
        <div style={{padding: "2rem 0"}}>
          <img src={logoWhite} width="119px" />
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={9}> 
            <Card style={customPadding} className="restaurant-page__header-wrapper">
              <CardHeader name={restaurantData?.name} />
              <CardFooter justifyContent="flex-start" 
              rating={restaurantData.rating}
              delivery={restaurantData.delivery}
              />
            </Card>
            <Menu menuData={restaurantData?.menu}/>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Card style={customPadding}>
              <CardHeader name="glovo-ul tau" />
              <Cart  />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default RestaurantPage
