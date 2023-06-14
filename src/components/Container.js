import React from 'react'
import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import Button from './Button'
import Header from './Header'
import Profile from './Profile'
function Container() {

    const {theme}= useContext(ThemeContext)


  return (
    <div className={`App ${theme==='dark'? 'App' : 'beyaz'}` }>

    <Header/>
    <hr></hr>
    <Button/>
    <hr></hr>
  
    <Profile/>
    </div>
  )
}

export default Container