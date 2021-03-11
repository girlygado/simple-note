import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
    notes: [
        {
            id: 1111,
            title: 'My favourite clothes',
            content: 'By Rini',
        },
    ],
    isSearchActive: false,
    searchResults: []
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component -- attach state
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    function addNote(note) {
        dispatch({
            type: 'ADD_NOTE',
            payload: note
        })
    }

    function editNote(note) {
        dispatch({
            type: 'EDIT_NOTE',
            payload: note
        })
    }

    function deleteNote(id) {
        dispatch({
            type: 'DELETE_NOTE',
            payload: id
        })
    }

    function searchNotes(query) {
        dispatch({
            type: 'SEARCH_NOTES',
            payload: query
        })
    }

    return <GlobalContext.Provider value={{ 
        state,
        addNote,
        editNote,
        deleteNote,
        searchNotes
     }}>
        {children}
    </GlobalContext.Provider>
}
