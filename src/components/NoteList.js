import NoteListItem from "./NoteListItem"
const NoteList = ({ notes, onEdit, onDelete }) => {
    return (
        <div className="notes-list">
            {notes.map(note => (
                <NoteListItem
                    key={note.id}
                    note={note}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    />
            ))}
        </div>
    )
}

export default NoteList
