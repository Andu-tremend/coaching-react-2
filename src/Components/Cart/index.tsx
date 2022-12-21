import Box from "@mui/material/Box/Box";
import React from "react";
import emptyCart from "../../StaticFiles/SVGs/astronaut-grey-scale.svg"
import { connect } from "react-redux";
import FoodMenu from "Interfaces/foodMenu";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { removeFromCart } from "Stores/Actions";
import AppButton from "Components/Buttons/button/button";
import CartService from "Classes/Services/Cart.service";
import CartCTA from "Components/Cart.cta";
import { Server } from "Classes/Enums/server.enums";
import calculatePrice from "Helper.functions/calculate.price";
class Cart extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
  }

  renderEmpty() {
    return (
      <Box sx={{textAlign: "center", margin: "auto", padding: "1rem"}}>
        <img src={emptyCart} />
        <p>Nu ai adăugat încă niciun produs. Când vei adăuga, îl vei vedea aici!</p>
      </Box>
    )
  }

  renderCart(cartItems: FoodMenu[]) {
    if (cartItems.length === 0) {
      return this.renderEmpty()
    }

    return cartItems?.map( (item) => {
      const handleRemove = () => {
        this.props.dispatch(removeFromCart(item))
      }

      const handleAddDuplicate = () => {
        alert("Not implemented yet")
      }

      return (
        <Box>
          <Box sx={{display: "flex", justifyContent: "space-between", padding: " 2rem"}}>
            <h4>1 X</h4>
            <p>{item.foodName}</p>
            <p>{item.foodPrice} RON</p>
          </Box>
          <Box sx={{display: "flex", justifyContent: "space-between"}}>
          <RemoveIcon onClick={() => {handleRemove()}} className="addIcon" />
          <AddIcon onClick={() => {handleAddDuplicate()}} className="addIcon"  />
          </Box>
        </Box>
      )
    })
  }

  render() {
    return (
      <>
        {this.renderCart(this.props.cartItems)}
        <CartCTA cartItems={this.props.cartItems} />
      </>
    )
  }
}

const mapStateToProps = (state: any) => ({ cartItems: state.cartReducer })

export default connect(mapStateToProps)(Cart)