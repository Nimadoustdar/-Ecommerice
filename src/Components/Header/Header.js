import React from 'react'
import './Header.css'
import Head from '../../Components/Head'
import Search from '../../Components/Search'
import Navbar from '../../Components/Navbar'
const Header = ({cartItem}) => {
  return (
    <>
    <Head/>
    <Search cartItem={cartItem}/>
    <Navbar/>

    </>
  )
}

export default Header