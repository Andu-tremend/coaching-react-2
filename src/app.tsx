
import Header from './Components/header';
import Homepage from './Pages/homepage';
import './app.css';
import {  ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router,
  Route,
  Link, 
  Routes} from 'react-router-dom';
import "./Sass/style.scss";
import Container from '@mui/material/Container';
import glovoTheme from './Theme/theme';
import RestaurantPage from './Pages/restaurant';
import { Provider } from 'react-redux'
import store from 'Stores/Store';
import Restaurants from 'Pages/restaurants';
import SearchPage from 'Pages/search';
import RestaurantContainer from 'Containers/Restaurant';
import MyOrders from 'Pages/my.orders';
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={glovoTheme}>
        <Router>
          <div className='app'>
            <Header />
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/:restaurantId' element={<RestaurantContainer />} />
              <Route path='/restaurante' element={<Restaurants  />} />
              <Route path='/restaurante/:restaurantCategory' element={<Restaurants />} />
              <Route path='/search' element={<SearchPage />} />
              <Route path='/checkout' element={<MyOrders />} />
            </Routes>
            <Container sx={{padding: 5}}>
              
            </Container>
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
