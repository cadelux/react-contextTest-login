import React from 'react'
import { useContext,useState} from 'react'
import UserContext from '../context/UserContext'

function Profile() {

const {user,setUser}= useContext(UserContext); // usercontextden user ve setuser kelimelerini getirdik.
const [loading,setLoading]=useState(false)

const logout=()=>{
    setUser(null)
}

const handleLogin=()=>{
    setLoading(true)
    setTimeout(() => {
        setUser({id:1,username:'mehmet',bio:'loreeem ipsm dolor'})
        setLoading(false)

    }, 1500);  

}
  return (
      <div>

          {!user && 
          (<button onClick={handleLogin}>{loading ? "loading..." : "login"}</button>   
          )}
        <hr></hr>
    <code>{JSON.stringify(user)}</code>
   <br></br>
{user && <button onClick={logout}>log out</button>}
    </div>
  )
}

export default Profile