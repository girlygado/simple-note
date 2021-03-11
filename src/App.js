import React, { useState, useContext, useEffect} from 'react'
import Header from './components/Header';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import { TextField } from '@material-ui/core';

import {GlobalContext} from './context/GlobalContext'

const App = () => {
    const { state, searchNotes } = useContext(GlobalContext)
    const {isSearchActive, notes, searchResults } = state

    const [currentNotes, setCurrentNotes] = useState([])
    
    const [showForm, setShowForm] = useState(false)
    const [formMode, setFormMode] = useState('')
    const [currentNoteToUpdate, setCurrentNoteToUpdate] = useState()
    const [query, setQuery] = useState('')

    const onAdd = () => {
        setFormMode('add')
        setShowForm(true)
    }

    const onEdit = (id) => {
        let note = notes.filter(note => note.id === id)[0]
        setCurrentNoteToUpdate(note)
        
        setFormMode('edit')
        setShowForm(true)
    }

    const onSearch = (e) => {
        let queryS = e.target.value
        let trimedQuery = queryS.trim().toLowerCase()

        setQuery(e.target.value)
        searchNotes(trimedQuery)
    }

    useEffect(() => {
        if (isSearchActive) {
            setCurrentNotes(searchResults)
        } else {
            setCurrentNotes(notes)
        }
    }, [isSearchActive, notes, searchResults])

    return (
        <div>
            <div className="container">
                <Header onAdd={onAdd} />

                <div className="search-container">
                    <TextField id="outlined-basic" 
                        color="secondary"
                        label="Search Notes" 
                        variant="outlined"
                        value={query} 
                        onChange={onSearch}
                        fullWidth={true} />
                </div>

                <div className="main">
                    {/* list */}
                    { currentNotes.length > 0
                        ? <NoteList
                        notes={currentNotes}
                        onEdit={onEdit}
                        />
                        :  <div className="no-results">no search results for "{query}"</div>
                    }

                    {
                        /* add form */
                        showForm 
                            ? <>
                                <hr className="divider"/>

                                <NoteForm 
                                formMode={formMode}
                                setShowForm={setShowForm}
                                noteInfo={currentNoteToUpdate}/>
                            </>
                            : ''
                    }
                </div>
            </div>
        </div>
    )
}

export default App
