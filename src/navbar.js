import React from 'react';
import { Grid, useMediaQuery } from '@mui/material'
import {useState} from 'react'
import "./App.css"
import App from './App'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
export default function Navbar(props) { 
  //console.log("props in navbar::",props.cart_qty)


  const [display, setDisplay]=useState(false)
  const [display_shop, setDisplay_shop]=useState(false)
  const screen_size = useMediaQuery('(min-width:768px)')
  function dropDown (){
    setDisplay(!display);
  }
  function dropDown_sm (){
    setDisplay_shop(!display_shop);
  }
  return(
    <>
      
        <div className="nav_bar">
        <div className="nav_bar_flex">
            {screen_size ? <div className="nav_list_div">
                <ul type="none" className="nav_list">
                <Grid  sx={{display: 'flex',flexDirection:'row'}}	columnGap={3}>
                    <li ><button className="home" >Home</button></li>
                    <li ><button className="about" >About</button></li>
                    <li><button className="Shop_btn" onClick={() => dropDown_sm()}>Shop</button></li>
                    {display_shop ? <li className="dropdown">
                      <select>
                          <option>All Products</option>
                          <hr/>
                          <option>Popular Items</option>
                          <option>New Arrivals</option>
                      </select>
                    </li>:<></>}
                  </Grid>
                </ul>
              </div>:
              <div className="menu_div"><button className="menu_btn" onClick={() => dropDown()}><MenuIcon/></button></div>}
              {display ? <div className="nav_list_div">
                <ul type="none" className="nav_list">
                  <li ><button className="home" >Home</button></li>
                    <li ><button className="about" >About</button></li>
                    <li><button className="Shop_btn" onClick={() => dropDown_sm()}>Shop</button></li>
                      <div className="cart_div">
                        <button className="cart_btn"><ShoppingCartIcon/>
                        <span className="cart">Cart</span>
                        <span className="cart_qty">{props.cart_qty}</span></button>
                      </div>
                    
                    {display_shop ? <li className="dropdown">
                      <select>
                          <option>All Products</option>
                          <hr/>
                          <option>Popular Items</option>
                          <option>New Arrivals</option>
                      </select>
                  </li>:<></>}
                </ul>
              </div>:<></>}
            {screen_size? <div className="cart_div">
                <button className="cart_btn"><ShoppingCartIcon/>
                <span className="cart">Cart</span>
                <span className="cart_qty">{props.cart_qty}</span></button>
              </div>: <></>
            }
        </div>
      </div>
    </>
  );
}

  
