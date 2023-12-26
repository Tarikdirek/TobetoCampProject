import React, { useState } from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedOut from "./SignedOut";
import SingedIn from "./SingedIn";

export default function Navi() {

  const [isAut,setIsAut] =useState(true);
  
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
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
                <CartSummary></CartSummary>

            { isAut ? <SingedIn signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn}/>}

          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
