import React, { useState } from 'react'
import { TextField, Button, IconButton  } from '@material-ui/core';
import { AddCircle, } from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';

import { v4 as uuidv4 } from 'uuid';


const App = () => {
    const [id, setId] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [notes, setNotes] = useState([])
    const [showForm, setShowForm] = useState(false)
    const [formMode, setFormMode] = useState('');

    const handleSave = () => {
        if (formMode == 'add') {
            let newNote = {
                id: uuidv4(),
                title: title,
                content: content,
                isFavorite: 0,
                isDeleted: 0,
            }
    
            setNotes([...notes, newNote])
            
        } else {
            let newNotes = [...notes].map(note => {
                if (note.id === id) {
                    note.title = title
                    note.content = content

                    return note;
                }
                return note;
            })

            setNotes(newNotes)
        }
        
        setTitle('')
        setContent('')
        setShowForm(false)
    }

    const onAdd = () => {
        setTitle('')
        setContent('')
        setFormMode('add')
        setShowForm(true)
    }

    const onEdit = (id) => {
        const note = notes.filter(note => note.id === id)[0];

        setId(note.id)
        setTitle(note.title)
        setContent(note.content)
        setFormMode('edit')
        setShowForm(true)
    }

    const onDelete = (id) => {
        console.log(id)
        const noteUpdated = notes.filter(note => note.id !== id);
        setNotes(noteUpdated)
    }

    return (
        <div>
            <div className="container">
                <h2 className="title">Simple Note App</h2>
                <div className="add-btn-container">
                    <IconButton
                        onClick={onAdd}
                        size="medium"
                        color="secondary"
                        aria-label="add"
                        classes={{ 
                            root: 'add-btn'
                         }}>
                        <AddCircle />
                    </IconButton>
                </div>

                {/* list */}
                <div className="notes-list">
                    {notes.map(note => (
                        <div className="note-list-item" key={note.id}>
                            <div className="note-list-item--title">{note.title}</div>
                            <div className="note-list-item--content">{note.content}</div>

                            <div className="note-list-item--actions">
                                <IconButton
                                    onClick={() => onEdit(note.id)} 
                                    color="inherit"
                                    aria-label="delete"
                                    classes={{ 
                                        root: 'edit-btn action-btn'
                                     }}>
                                    <CreateIcon />
                                </IconButton>

                                <IconButton 
                                    onClick={() => onDelete(note.id)}
                                    color="inherit"
                                    aria-label="delete"
                                    classes={{ 
                                        root: 'delete-btn action-btn'
                                     }}>
                                    <DeleteIcon />
                                </IconButton>
                            </div>
                        </div>
                    ))}
                </div>

                {/* add form */}
                {
                    showForm
                        ?
                        <div className="notes-form">
                            <h3 className="sub-title">{formMode == 'add' ? 'Add new ' : 'Update'} note</h3>

                            <div className="note-form--title">
                                <input type="hidden" value={id} />
                                <TextField
                                    label="Note title"
                                    value={title}
                                    placeholder="Note title..."
                                    fullWidth={true}
                                    onChange={(e) => setTitle(e.target.value)}
                                    color="secondary"
                                    InputProps={{
                                        className: "",
                                    }} />
                            </div>


                            <div className="note-form--content">
                                <TextField
                                    id="contentField"
                                    label="Note content"
                                    value={content}
                                    placeholder="Note content"
                                    onChange={(e) => setContent(e.target.value)}
                                    fullWidth={true}
                                    multiline={true}
                                    color="secondary"
                                    InputProps={{
                                        className: "",
                                    }} />
                            </div>


                            <div className="form-btn-container">
                                <Button variant="outlined"
                                    classes={{ root: 'form-btn' }}
                                    onClick={() => setShowForm(false)}
                                >
                                    Cancel
                        </Button>

                                <Button variant="contained"
                                    color="secondary"
                                    classes={{ root: 'form-btn' }}
                                    onClick={handleSave}
                                >
                                    save
                        </Button>
                            </div>

                        </div>
                        : ''
                }

            </div>
        </div>
    )
}

export default App
