'use client'
import React, { createContext, useEffect, useState } from 'react';

export const FriendContext = createContext() ;
const FriendProvider = ({children}) => {
    const [friends, setFriends] = useState([]);

    useEffect(()=>{
        const fetchData = async() =>{
            const res = await fetch("keen-keeper-one-nu.vercel.app/data.json");
            const data = await res.json();
            setFriends(data);
        }
        fetchData();
    },[]);

    return (
        <FriendContext.Provider value={{friends, setFriends}}>
            {children}
        </FriendContext.Provider>
    );
};

export default FriendProvider;