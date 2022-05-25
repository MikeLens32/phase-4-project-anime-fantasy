import React, { useState, useEffect, useContext, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageContext } from './message'

const UserContext = React.createContext()

function UserProvider({children}) {
    const [ user, setUser ] = useState(null);
    const { setMessage } = useContext(MessageContext);
    const history = useNavigate()

    const getCurrentUser = useCallback(async () => {
        try {
            const resp = await fetch('/me')
            if(resp.status === 200) {
                const data = await resp.json()
                setUser(data)
            } else {
                const errorObj = await resp.json()
                setMessage({message :errorObj.error, color: 'red'})
            }
        } catch (e) {
        setMessage(e.message)
        }
    }, [setMessage])

    const login = async (userDetail) => { 
        try {
            console.log(userDetail)
            const resp = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json',
                    'Accept':'application/json'
                },
                body: JSON.stringify(userDetail)
            })
            if (resp.status === 202) {
                const data = await resp.json()
                setUser(data)
                history.push('/home')
            } else {
                debugger
                const errorObj = await resp.json()
                setMessage(errorObj.error)
            }
        } catch (e) {
            setMessage(e.message)
        } 
     }

     const signup = async (userDetail) => { 
        try {
            const resp = await fetch('/signup', {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json',
                },
                body: JSON.stringify(userDetail)
            })
            if (resp.status === 201) {
                const data = await resp.json()
                debugger
                setUser(data)
                history.push('/home')
            } else {
                const errorObj = await resp.json()
                setMessage(errorObj.error)
            }
        } catch (e) {
            setMessage(e.message)
        } 
     }

     const signout = async () => { 
         try {
             const resp = await fetch('/signout', {
                 method: 'DELETE',
             })
             debugger
             setUser(null)
             history.push('/')
        } catch (e) {
            setMessage(e.message)
        } 
    }


    return (
        <UserContext.Provider value={{user, setUser, getCurrentUser, login, signup, signout}} >
            {children}
        </UserContext.Provider>
    )

}


export { UserContext, UserProvider }