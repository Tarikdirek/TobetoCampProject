import React, { useState } from "react";
import {  Container, Menu } from "semantic-ui-react";
import { useSelector } from "react-redux";
import CartSummary from "./CartSummary";
import SignedOut from "./SignedOut";
import SingedIn from "./SingedIn";
import { NavLink } from "react-router-dom";

export default function Navi() {

  const [isAut,setIsAut] =useState(true);
  const {cartItems} = useSelector(state => state.cart)
  
  
 function handleSignOut(params) {
    setIsAut(false)
    
 }

 function handleSignIn(params) {
  setIsAut(true)
}

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" as={NavLink} to="/"/>
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
                {cartItems.length>0&&<CartSummary/>}

            { isAut ? <SingedIn signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn}/>}

          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
