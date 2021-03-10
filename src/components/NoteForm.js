import React, { useState, useContext, useEffect } from 'react'
import { TextField, Button } from '@material-ui/core';

import {GlobalContext} from '../context/GlobalContext'

const NoteForm = ({ formMode, setShowForm, noteInfo }) => {
    const { addNote, editNote } = useContext(GlobalContext)

    const [id, setId] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onSubmit = () => {
        const note = {
            id: id,
            title: title,
            content: content,
        }

        if (formMode === 'add') {
            addNote(note)
            closeAndResetForm()
        }

        if (formMode === 'edit') {
            editNote(note)
            closeAndResetForm()
        }
    }

    const closeAndResetForm = () => {
        setId('')
        setTitle('')
        setContent('')
        setShowForm(false)
    }

    useEffect(() => {
        if (formMode === 'edit') {
            console.log('update form to edit mode')
            setId(noteInfo.id)
            setTitle(noteInfo.title)
            setContent(noteInfo.content)
        }
    }, [noteInfo])

    return (
        <div className="notes-form">
            <h3 className="sub-title">{formMode == 'add' ? 'Add new ' : 'Update'} note</h3>

            <div className="note-form--title">
                {/* <input type="hidden" value={id} /> */}
                <small><b>ID: </b>{id}</small>
                <br/>
                <br/>

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
                > cancel </Button>

                <Button variant="contained"
                    color="secondary"
                    classes={{ root: 'form-btn' }}
                    onClick={onSubmit}
                > save </Button>
            </div>
        </div>
    )
}

export default NoteForm
