import { createContext } from "react";
import { useState,useEffect } from 'react'


const ThemeContext= createContext();

export const ThemeProvider=({children})=>{
    
    // const [theme,setTheme]=useState('dark') //eski hali
    const [theme,setTheme]=useState(localStorage.getItem("renk") || "dark")
    // �imdi bu state'i a�a��da ki value'de provide etmem laz�m. 
    // nas�l yapaca��z? ��yle bir de�er olu�turup..

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

// bu sayfada �nce themecontext ad�nda context olu�turduk
// daha sonra bunu a�a��da provide edip t�m componentlere duyurduk.
// peki ne duyurduk 2 etiket aras�nda ki children�
// App.js de ki 2 etiket aras�nda ki buton komponenti burada children oldu.
