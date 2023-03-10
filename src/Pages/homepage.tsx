import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import AppButton from '../Components/Buttons/button/button';
import {useTheme} from '@mui/material/styles';
import RestaurantsContainer from 'Containers/Restaurants';
import RestaurantCategories from 'Components/Filters/restaurants.categories';
import { useNavigate } from 'react-router-dom';
import ModalWithChildren from 'Components/Modals';

//Images import 

// Pune imaginile intr-un alt fisier si impora o singura chestie cu switch case ceva

import riderImage from "../StaticFiles/Images/rider-image.png"
import partnersImage from "../StaticFiles/Images/partners-image.png"
import careersImage from "../StaticFiles/Images/careers-image.png"
import citiesImage from "../StaticFiles/SVGs/cities.svg"
import shakeHandsImg from "../StaticFiles/SVGs/together.svg"

import HeroCategories from 'Containers/Hero.categories';
import mockCategoriesFromDb from 'Containers/Hero.categories/mockData';
import CategoriesWidget from "Containers/Hero.categories.widget"

const Homepage = () => {

  const theme = useTheme()
  const navigate = useNavigate()

  
  return (
    <>
      <Box className="hp__yellow-wrapper" sx={{  height: '100%' }}>
        <Container maxWidth="lg" sx={{textAlign: "center"}}>
          <h3>Livreare la Soseaua Virtutii</h3>
        </Container>
        <CategoriesWidget />
      </Box>
      <Box className="hp__filter-wrapper" sx={{  height: '100%', marginTop: "100px"}}>
        <Container  maxWidth="lg">
          <h3 className='highlighted-heading'>Mancare langa tine</h3>
          <Grid container spacing={4} >
            <Container maxWidth="lg" sx={{marginTop: 4}}>
              <RestaurantsContainer nrOfRestaurants={9}/>
            </Container>
          </Grid>
          <Box sx={{display: "flex", justifyContent: "center", padding: 10}}>
            <AppButton  
              textColor={theme.palette.secondary.main} 
              color={theme.palette.secondary.light} 
              label='Vezi mai multe restaurante' 
              onClick={() => {navigate("/restaurante")}}
              />
          </Box>
          <Box className='flex-center flex-column'>
            <img src={citiesImage} alt="cities" />
            <h2>Cele mai bune Categorii din Bucuresti</h2>
            <Box sx={{marginTop: 3, display: "inline-flex", flexWrap: "wrap", gap:1, justifyContent: "center"}}>
              <RestaurantCategories renderButtons />
            </Box>
          </Box>
        </Container> 
      </Box>
      <Box className="hp__other-pages-wrapper">
        <Container maxWidth="lg" >
          <div className="hp__other-pages-heading">
            <img src={shakeHandsImg} alt="" />
            <h2>Hai sa reusim impreuna</h2>
          </div>
          <Grid className="hp__other-pages-column-wrapper" container spacing={24}>
            <Grid item xs={12} md={6} lg={4} >
              <img src={riderImage} alt='' />
              <h3>Devino curier</h3>
              <p>Fii propriul t??u ??ef! Bucur??-te de flexibilitate, libertate ??i c????tiguri competitive livr??nd cu Glovo.
              </p>
              <AppButton
                color="secondary" 
                label='Alatura-te' 
                onClick={() => {alert("Link to external page")}}
                />
            </Grid>
            <Grid item xs={12} md={6} lg={4} >
              <img src={partnersImage} alt='' />
              <h3>Devino partener</h3>
              <p>Dezvolt??-??i afacerea cu Glovo! Tehnologia noastr?? ??i baza noastr?? de utilizatori te poate ajuta s?? cre??ti v??nz??rile ??i s?? descoperi noi oportunit????i!
              </p>
              <AppButton   
                color="secondary" 
                label='Alatura-te' 
                onClick={() => {alert("Link to external page")}}
                />
            </Grid>
            <Grid item xs={12} md={6} lg={4} >
              <img src={careersImage} alt='' />
              <h3>Cariere</h3>
              <p>E??ti gata pentru o nou?? provocare interesant??? Dac?? e??ti ambi??ios, modest ??i iube??ti s?? lucrezi cu al??ii, atunci dorim s?? ne contactezi!
              </p>
              <AppButton   
                color="secondary" 
                label='Alatura-te' 
                onClick={() => {alert("Link to external page")}}
                />
            </Grid>
          </Grid> 
        </Container>
      </Box>
    </>
  )
}

export default Homepage