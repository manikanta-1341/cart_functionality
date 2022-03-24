import React from 'react';
import { useState } from 'react';
import { Box, Grid } from '@mui/material';
import './App.css';
import Navbar from './navbar';
import Banner from './banner';
export default function App(props) {
  const [state, setState] = useState([
    {
      Id: '1',
      Img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      Item_Name: 'Fancy Product',
      Item_Price: '$40.00 - $80.00',
      Offer_Price: null,
      Button_Name: 'View Options',
    },
    {
      Id: '2',
      Img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      Item_Name: 'Special Item',
      Item_Price: '$20.00',
      Offer_Price: '$18.00',
      Button_Name: 'Add to cart',
    },
    {
      Id: '3',
      Img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      Item_Name: 'Sale Item',
      Item_Price: ' $50.00',
      Offer_Price: '$25.00',
      Button_Name: 'Add to cart',
    },
    {
      Id: '4',
      Img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      Item_Name: 'Popular Item',
      Item_Price: '$40.00',
      Offer_Price: null,
      Button_Name: 'Add to cart',
    },
    {
      Id: '5',
      Img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      Item_Name: 'Sale Item',
      Item_Price: '$50.00',
      Offer_Price: '$25.00',
      Button_Name: 'Add to cart',
    },
    {
      Id: '6',
      Img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      Item_Name: 'Fancy Product',
      Item_Price: '$120.00 - $280.00',
      Offer_Price: null,
      Button_Name: 'Add to cart',
    },
    {
      Id: '7',
      Img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      Item_Name: 'Special Item',
      Item_Price: '$20.00',
      Offer_Price: '$18.00',
      Button_Name: 'Add to cart',
    },
    {
      Id: '8',
      Img: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      Item_Name: 'Popular Item',
      Item_Price: '$40.00',
      Offer_Price: null,
      Button_Name: 'Add to cart',
    },
  ]);
  const [cart_qty, setCart_qty] = useState(0);
  const [item_qty, setItem_qty] = useState(0);
  function Cart(e) {
    if (e.Button_Name === 'View Options') {
      return View_Options(e);
    } else {
      return Add_to_cart(e);
    }
  }
  function View_Options(e) {
    console.log('view option function');
  }
  function Add_to_cart(e) {
    let new_arr = [...state];
    setCart_qty(0);
    setCart_qty(cart_qty + 1);
    new_arr[e.Id - 1].Button_Name === 'Add to cart'
      ?document.querySelector(`.btn_div${e.Id}`).innerHTML = `
        <div className="plus_minus_div">
            <button className="minus_btn" onClick='${() => Minus_btn(e)}'>-</button> &nbsp;
            <span className="item_qty${e.Id}">1</span> &nbsp;
            <button className="plus_btn" onClick="${() =>
              Plus_btn(e)}">+</button>
        </div>
        `
        :document.querySelector(`.item_qty${e.Id}`).innerText = setItem_qty(
          item_qty + 1
        );
  }

  function Plus_btn(e) {
    console.log('in plus button');
    let num = document.querySelector(`#item_qty${e.Id}`).innerText
    parseInt(num)>=10?document.querySelector(`.item_qty${e.Id}`).innerText = setItem_qty(item_qty + 1):
    document.querySelector(`.item_qty${e.Id}`).innerText = "Limit Reached"
    setCart_qty(cart_qty+1)
  }
  function Minus_btn(e) {
    console.log('in minus button');
    let num = document.querySelector(`#item_qty${e.Id}`).innerText
    parseInt(num)>1?document.querySelector(`.item_qty${e.Id}`).innerText = setItem_qty(item_qty - 1):
    document.querySelector(`.item_qty${e.Id}`).innerText = "Add to cart"
    cart_qty>=1?setCart_qty(cart_qty-1):setCart_qty(0)
  }

  return (
    <div>
      <Navbar cart_qty={cart_qty} />
      <Banner />
      <div className="container">
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <Grid
            container
            sx={{ justifyContent: 'space-evenly', rowGap: 6 }}
            spacing={6}
            columns={{ xs: 1, sm: 2, md: 32 }}
          >
            {state.map((e) => (
              <Grid item xs={1} sm={1} md={8}>
                <div className={` item item${e.Id}`}>
                  <p className="sale">Sale</p>
                  <img src={e.Img} alt="img" />
                  <h2>{e.Item_Name}</h2>
                  <p className="price">
                    <span>{e.Item_Price}</span> {e.Offer_Price}
                  </p>
                  <div className={` btn_div btn_div${e.Id}`}>
                    <button
                      className={`button button${e.Id}`}
                      onClick={() => Cart(e)}
                    >
                      {e.Button_Name}
                    </button>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
}
