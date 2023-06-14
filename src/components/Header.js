import React from 'react'
import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'


function Header() {

    const {theme,setTheme} = useContext (ThemeContext) 

  return (
      <div>

      <button onClick={()=>{
          setTheme(theme==='light' ? 'dark' : 'light') }}>Change theme</button>
        
        <div>Active Theme : {theme}  </div>


    </div>
  )
}

export default Header