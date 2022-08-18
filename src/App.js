import Header from "./components/Header";
import Search from "./components/Search";
import Notes from "./components/Notes";
import { nanoid } from "nanoid";

import style from "./style.css";

import { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    filterHandler();
  }, [search, notes]);

  // func

  const filterHandler = () => {
    setFilteredNotes(
      notes.filter((note) => note.text.toLowerCase().includes(search))
    );
  };

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <div className="container">
        <Search setSearch={setSearch} />
        <Header setDarkMode={setDarkMode} darkMode={darkMode} />
        <Notes
          notes={notes}
          setNotes={setNotes}
          text={text}
          setText={setText}
          filteredNotes={filteredNotes}
        />
      </div>
    </div>
  );
}

export default App;
