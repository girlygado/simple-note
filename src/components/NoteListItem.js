import React, { useState, useContext } from 'react'

import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';

import {GlobalContext} from '../context/GlobalContext'

const NoteListItem = ({ note, onEdit }) => {

    const { deleteNote } = useContext(GlobalContext)

    const onDelete = id => {
        console.log(id)
        deleteNote(id)
    }

    return (
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
    )
}

export default NoteListItem
