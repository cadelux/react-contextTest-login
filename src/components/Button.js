
import ThemeContext from '../context/ThemeContext'

import { useContext } from 'react';


function Button() {

  // const data=useContext(ThemeContext) // buarada useContext' de parametre i�inde kulland���m�z isim app.js de provider olarak gelen value de�erini d�nd�r�r.
    const {theme,setTheme} = useContext (ThemeContext) 
// yani burada ki theme ve setthemethemecontext i�inde ki value de�eri.
    

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