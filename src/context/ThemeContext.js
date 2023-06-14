import { createContext } from "react";
import { useState,useEffect } from 'react'


const ThemeContext= createContext();

export const ThemeProvider=({children})=>{
    
    // const [theme,setTheme]=useState('dark') //eski hali
    const [theme,setTheme]=useState(localStorage.getItem("renk") || "dark")
    // þimdi bu state'i aþaðýda ki value'de provide etmem lazým. 
    // nasýl yapacaðýz? þöyle bir deðer oluþturup..

    useEffect(()=>{localStorage.getItem("renk",theme)}
    ,[theme])

    


    const values={
        theme,
        setTheme,
    }

    return( 
    <ThemeContext.Provider value={values}> 

    {children} 
    {/* burada ki children button ve header komponentleri oluyor. */}

     </ThemeContext.Provider>

    )
}

export default ThemeContext

// bu sayfada önce themecontext adýnda context oluþturduk
// daha sonra bunu aþaðýda provide edip tüm componentlere duyurduk.
// peki ne duyurduk 2 etiket arasýnda ki childrený
// App.js de ki 2 etiket arasýnda ki buton komponenti burada children oldu.
