import React, { useState } from "react";
import { nanoid } from "nanoid";

export default function AddNote({ text, setText, notes, setNotes }) {
  const [color, setColor] = useState(false);
  let characterLimit = 200;
  const NoteHandler = (e) => {
    if (characterLimit - e.target.value.length >= 0) {
      setText(e.target.value);
    }
  };
  const saveNoteHandler = (e) => {
    const backgroundStyle = window
      .getComputedStyle(e.target, null)
      .getPropertyValue("background-color");
    const date = new Date();
    const time = `${
      date.getMonth() + 1
    }/${date.getDate()}/${date.getFullYear()}`;
    if (text.trim().length > 0) {
      setNotes([
        ...notes,
        {
          id: nanoid(),
          text: text,
          date: time,
          color: backgroundStyle,
        },
      ]);
      setText("");
      setColor(false);
    }
  };
  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        value={text}
        onChange={NoteHandler}
      ></textarea>
      <div className="note-data">
        <span className="note-lenght">{characterLimit - text.length}</span>
        <button
          className="btn-note"
          onClick={() => {
            setColor(!color);
          }}
        >
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      <ul className={`colors ${color ? "shown" : ""}`}>
        <li className="color" onClick={saveNoteHandler}></li>
        <li className="color" onClick={saveNoteHandler}></li>
        <li className="color" onClick={saveNoteHandler}></li>
        <li className="color" onClick={saveNoteHandler}></li>
      </ul>
    </div>
  );
}
