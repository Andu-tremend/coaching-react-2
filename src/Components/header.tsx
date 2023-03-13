import Grid from '@mui/material/Grid';
import logo from "../StaticFiles/SVGs/logo.svg";
import AppButton from './Buttons/button/button';
import Search from './Inputs/search';
import { useNavigate } from 'react-router-dom';
import { forwardRef, useEffect, useRef } from 'react';

import SearchWithRefs from './Inputs/search.with.ref';
const headerStyle = {
  justifyContent: "space-between",
  padding: "30px 7.5%",
}

const Header = () => {

  const navigate = useNavigate()
  const searchRef: any = useRef(null)

  const handleClick = () => {
    alert("Incepe prin a cauta un restaurant")
    searchRef.current.select()
  }
  
  return (
    
    <header>
      <Grid container sx={headerStyle} spacing={2}>
        <Grid item lg={2} md={6} xs={12}>
          <img onClick={() => {navigate('./')}} src={logo} style={{maxWidth: 119, cursor: "pointer"}} />
        </Grid>
        <Grid item lg={3} md={6} xs={10}>
          {/* <Search  placeholder="Cautare" /> */}
          <SearchWithRefs ref={searchRef} placeholder="Cautare" />
        </Grid>
        <Grid item lg={2} md={12} xs={12}>
          <AppButton className='headerButton' color='secondary' label='Sa incepem' onClick={handleClick} />
        </Grid>
      </Grid>
    </header>
  )
}

export default Header