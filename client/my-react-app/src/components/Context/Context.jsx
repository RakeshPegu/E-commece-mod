import React, { createContext, useEffect, useState } from 'react';


    //create a context
    export const AuthContext = createContext()
    // define the context provider
    
    export const AuthContextProvider = ({children})=>{
        
        const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
    
        const update = (data)=>{
            setCurrentUser(data)
        }
        useEffect(()=>{
            if (currentUser !== null) {
                localStorage.setItem("user", JSON.stringify(currentUser));
            } else {
                localStorage.removeItem("user");
            }
        }, [currentUser, update])
        return (
            <AuthContext.Provider value={{update, currentUser}}>
               {children}
            </AuthContext.Provider>

        );
    }

