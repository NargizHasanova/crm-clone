import { createContext, useState } from "react"

export const DataContext = createContext()


export default function Context({ children }) {
    const [getData, setGetData] = useState([])
    return (
        <DataContext.Provider value={{ getData, setGetData }}>
            {children}
        </DataContext.Provider>
    )
}
