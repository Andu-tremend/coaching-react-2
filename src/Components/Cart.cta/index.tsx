import Box from "@mui/material/Box/Box"
import CartService from "Classes/Services/Cart.service"
import AppButton from "Components/Buttons/button/button"
import FoodMenu from "Interfaces/foodMenu"
import { Server } from "Classes/Enums/server.enums"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import calculatePrice from "Helper.functions/calculate.price"
const CartCTA = (props: any) => {

  const navigate = useNavigate()
  const storeState: any = useSelector(state => state)
  const restaurantName = storeState.restaurantPageReducer.restaurant[0].name
  

  const cart = new CartService
  const totalItemsInCart = props.cartItems.length
  const totalPrice = calculatePrice(props.cartItems)

  const handlePurchase = () => {
    cart.addToCart(Server.pathCart, restaurantName, props.cartItems)
    cart.getData(Server.pathCart).then(res => console.log(res))
    navigate("/checkout")
  }
  
  if (totalItemsInCart < 1) {
    return (
      <>
      </>
    )
  }
  
  return (
    <Box sx={{margin: "4rem auto 0 auto", display: "flex", justifyContent: "center"}}>
      <AppButton 
      className='headerButton' 
      color='secondary' 
      label={`Comanda ${totalItemsInCart} pentru ${totalPrice} RON`} 
      onClick={() => {handlePurchase()}} 
      />
    </Box>
  )
}

export default CartCTA