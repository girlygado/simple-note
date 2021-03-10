import React, { useState, useContext} from 'react'
import { TextField, Button, IconButton } from '@material-ui/core';
import { AddCircle, ContactlessOutlined, } from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';

import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';

import {GlobalContext} from './context/GlobalContext'


const App = () => {
    const { notes } = useContext(GlobalContext)
    
    const [showForm, setShowForm] = useState(false)
    const [formMode, setFormMode] = useState('')
    const [currentNoteToUpdate, setCurrentNoteToUpdate] = useState()

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

    return (
        <div>
            <div className="container">
                <Header onAdd={onAdd} />

                <div className="main">
                    {/* list */}
                    <NoteList
                        notes={notes}
                        onEdit={onEdit}
                        />

                    {
                        /* add form */
                        showForm 
                            ? <NoteForm 
                                formMode={formMode}
                                setShowForm={setShowForm}
                                noteInfo={currentNoteToUpdate}/>
                            : ''
                    }
                </div>
            </div>
        </div>
    )
}

export default App
