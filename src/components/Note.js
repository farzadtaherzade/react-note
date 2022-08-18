import React from "react";

export default function Header({ text, time, notes, setNotes, note, color }) {
  const deleteNoteHandler = () => {
    setNotes(notes.filter((el) => el.id !== note.id));
  };
  return (
    <div className="note" style={{ backgroundColor: color }}>
      <p className="note-text">{text}</p>
      <div className="note-data">
        <span className="note-time">{time}</span>
        <button className="btn-note" onClick={deleteNoteHandler}>
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </div>
  );
}
