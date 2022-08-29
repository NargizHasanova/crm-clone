import { createContext, useState } from "react"

export const DataContext = createContext()
export const EditModeContext = createContext()
export const EditTicketContext = createContext()


export default function Context({ children }) {
    const [getData, setGetData] = useState([])
    const [editMode, setEditMode] = useState(undefined)
    const [ticketForEdit, setTicketForEdit] = useState({})
    return (
        <DataContext.Provider value={{ getData, setGetData }}>
            <EditModeContext.Provider value={{ editMode, setEditMode }}>
                <EditTicketContext.Provider value={{ ticketForEdit, setTicketForEdit }}>
                    {children}
                </EditTicketContext.Provider>
            </EditModeContext.Provider>
        </DataContext.Provider>
    )
}
