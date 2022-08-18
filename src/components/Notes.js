import React from "react";
// import Components
import Note from "./Note";
import AddNote from "./AddNote";

export default function Notes({
  text,
  setText,
  notes,
  setNotes,
  filteredNotes,
}) {
  return (
    <div className="notes-container">
      {filteredNotes.map((note) => (
        <Note
          text={note.text}
          time={note.date}
          color={note.color}
          key={note.id}
          setNotes={setNotes}
          notes={notes}
          note={note}
        />
      ))}
      <AddNote
        notes={notes}
        setNotes={setNotes}
        text={text}
        setText={setText}
      />
    </div>
  );
}
