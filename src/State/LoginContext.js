import React,{ useState , useEffect } from 'react'

const LoginContext = React.createContext({
  isLogged:false,
  onLogin:()=>{},
  onLogout:()=>{},
  page:false,
  setPage:()=>{}
});

export const LoginContextProvider = (props) => {
  
  const [isLogged,setIsLogged] = useState(false);
  const [page,setPage] = useState(false);

  useEffect(()=>{
    const stayLogin = localStorage.getItem("userName");
    if(stayLogin){
      setIsLogged(true)
    }
  },[])

  const onLoginHandler = (name,email) => {
    localStorage.setItem("userName",name);
    localStorage.setItem("userEmail",email);
  }

  const onLogoutHandler = () => {
    localStorage.removeItem("userName")
    localStorage.removeItem("userEmail")
    setIsLogged(false);
  }

  return(
    <LoginContext.Provider
      value={{
        isLogged:isLogged,
        page:page,
        setPage:setPage,
        setIsLogged:setIsLogged,
        onLogin:onLoginHandler,
        onLogout:onLogoutHandler,
        userName:localStorage.getItem("userName"),
        userEmail:localStorage.getItem("userEmail")
      }}
    >
      {props.children}
    </LoginContext.Provider>
  )
}

export default LoginContext