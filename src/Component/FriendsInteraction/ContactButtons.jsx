'use client' ;

import { useState } from "react";
import { toast } from "react-toastify";


const ContactButtons = ({type, friend}) => {

    const [loading, setLoading] = useState(false);

    // Contact History save
    const saveToTimeline = (newContactInfo) =>{
        const existing = JSON.parse(localStorage.getItem("timeline"))||[] ;
        localStorage.setItem("timeline", JSON.stringify([newContactInfo, ...existing])) ;
    }

    const handleContact = ()=>{

        const newContactInfo = {
            id: Date.now(),
            type,
            name: friend.name,
            date: new Date().toISOString()
    };
        saveToTimeline(newContactInfo) ;

        // console.log(type, 'clicked')
        // logic:
       setLoading(true);
       let message = "" ;

       if(type === "call"){
            message = `Call with ${friend.name}`
       }
       else if(type === "text"){
            message = `Text with ${friend.name}`
       }
       else if(type === "video"){
            message = `Video call with ${friend.name}`
       }

       setTimeout(()=>{
            toast.success(message);
            setLoading(false);
       }, 250)

    // toast.success(message);

    }

    return (
        <button onClick={handleContact}
            className="text-lg btn btn-ghost text-gray-700" disabled={loading}>
            {loading ? "..." : type}
        </button>
    );
};

export default ContactButtons;