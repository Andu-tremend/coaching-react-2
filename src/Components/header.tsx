import Grid from '@mui/material/Grid';
import logo from "../StaticFiles/SVGs/logo.svg";
import AppButton from './Buttons/button/button';
import Search from './Inputs/search';
import { useNavigate } from 'react-router-dom';
import ModalWithChildren from './Modals';

const headerStyle = {
  justifyContent: "space-between",
  padding: "30px 7.5%",
}

const Header = () => {

  const navigate = useNavigate()

  const onClick = () => {alert("Inca nu m-am hotarat unde sa duca butonul asta")}
  return (
    
    <header>
      <Grid container sx={headerStyle} spacing={2}>
        <Grid item lg={2} md={6} xs={12}>
          <img onClick={() => {navigate('./')}} src={logo} style={{maxWidth: 119, cursor: "pointer"}} />
        </Grid>
        <Grid item lg={3} md={6} xs={10}>
          <Search placeholder="Cautare" />
        </Grid>
        <Grid item lg={2} md={12} xs={12}>
          <AppButton className='headerButton' color='secondary' label='Sa incepem' onClick={onClick} />
          {/* <ModalWithChildren >
            Make modal more abstract, move the styles only on hp widgets and use this as cart
          </ModalWithChildren> */}
        </Grid>
      </Grid>
    </header>
  )
}

export default Header