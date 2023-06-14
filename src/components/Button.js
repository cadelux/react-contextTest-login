
import ThemeContext from '../context/ThemeContext'

import { useContext } from 'react';


function Button() {

  // const data=useContext(ThemeContext) // buarada useContext' de parametre içinde kullandýðýmýz isim app.js de provider olarak gelen value deðerini döndürür.
    const {theme,setTheme} = useContext (ThemeContext) 
// yani burada ki theme ve setthemethemecontext içinde ki value deðeri.
    

  return (
    <>

    <div>Active Theme : {theme} </div>  
    <button onClick={()=>{
      setTheme(theme==='dark'? 'light' : 'dark')
    }}>change theme</button>

    </>
      )
  
}

export default Button