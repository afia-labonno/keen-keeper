'use client'
import { createContext, useEffect, useState } from "react";

export const TimelineContext = createContext();

const TimelineProvider = ({ children }) => {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("timeline")) || [];
        setLogs(data);

    }, []);

    const addLog = (newLog) => {
        setLogs((prevLogs) => {
            const updatedLog = [newLog, ...prevLogs];
            localStorage.setItem("timeline", JSON.stringify(updatedLog));

            return updatedLog ;
        }) ;
    };



    return (
        <TimelineContext.Provider value={{ logs, setLogs, addLog }}>
            {children}
        </TimelineContext.Provider>
    );
};

export default TimelineProvider;