// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            const newNote = {
                id: 'note.'+Math.random(),
                title: action.payload.title,
                content: action.payload.content
            }

            return {
                ...state,
                notes: [...state.notes, newNote]
            }

        case 'EDIT_NOTE':            
            return {
                ...state,
                notes: [...state.notes].map(note => {
                    if (note.id === action.payload.id) {
                        note.title = action.payload.title
                        note.content = action.payload.content
                        return note
                    }

                    return note
                })
            }

        case 'DELETE_NOTE':
            return {
                ...state,
                notes: [...state.notes].filter(note => note.id !== action.payload)
            }

        default:
            return state;
    }
}