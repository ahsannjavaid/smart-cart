import React, { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Navbar from "./Navbar";
import Footer from "./Footer";
import LoadingBar from 'react-top-loading-bar';

const Layout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)
  const [user, setUser] = useState({ value: null })
  const [key, setKey] = useState()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem("cart")))
      }
      else {

      }
    } catch (error) {
      localStorage.clear();
    }
    const myuser = JSON.parse(localStorage.getItem('myuser'))
    if (myuser) {
      setUser({ value: myuser.token, email: myuser.email })
    }
    setKey(Math.random())
  }, [pathname])

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart))
    let subt = 0;
    let keys = Object.keys(myCart)
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setSubTotal(subt)
  }

  const clearCart = () => {
    setCart({})
    saveCart({})
  }

  const addToCart = (itemCode, qty, price, name, size, variant) => {
    if (Object.keys(cart).length === 0) {
      setKey(Math.random())
    }
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty
    }
    else {
      newCart[itemCode] = { qty: 1, price, name, size, variant }
    }
    setCart(newCart)
    saveCart(newCart)
  }

  const removeFromCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty
    }
    if (newCart[itemCode]["qty"] <= 0) {
      delete newCart[itemCode]
    }
    setCart(newCart)
    saveCart(newCart)
  }

  const buyNow = (itemCode, qty, price, name, size, variant) => {
    let newCart = {}
    newCart[itemCode] = { qty: 1, price, name, size, variant }
    setCart(newCart)
    saveCart(newCart)
    navigate('/checkout')
  }

  const logout = () => {
    localStorage.removeItem('myuser')
    setKey(Math.random())
    setUser({ value: null })
    navigate('/')
  }

  return (
    <>
      <LoadingBar
        color='#FF6600'
        waitingTime={500}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      {key && !pathname.startsWith('/admin') && (<Navbar logout={logout} user={user} key={key} buyNow={buyNow} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />)}
      <Outlet buyNow={buyNow} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
      <Footer />
    </>
  );
};

export default Layout;
