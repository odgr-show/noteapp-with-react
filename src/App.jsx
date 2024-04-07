import { useState } from "react";
import "./App.scss";
import Main from "./components/Main";
import { Sidebar } from "./components/Sidebar";
import uuid from "react-uuid";

export const App = () => {
    const [notes, setNotes] = useState([]);
    const [activeNote, setActiveNote] = useState(false);

    const onAddNote = () => {
        // console.log("新しくノートが追加されました。");
        const newNote = {
            id: uuid(),
            title: "新しいノート",
            content: "",
            modDate: Date.now(),
        };
        setNotes([...notes, newNote]);
    };

    const onDeleteNote = (id) => {
        const filterNotes = notes.filter((note) => note.id !== id);
        setNotes(filterNotes);
    };

    const getActiveNote = () => {
        return notes.find((note) => note.id === activeNote);
    };

    const onUpdateNote = (updatedNote) => {
        // 修正された新しいノートの配列を返す。
        const updatedNotesArray = notes.map((note) => {
            if (note.id === updatedNote.id) {
                return updatedNote;
            } else {
                return note;
            }
        });

        setNotes(updatedNotesArray);
    };

    return (
        <div className="App">
            <Sidebar
                onAddNote={onAddNote}
                notes={notes}
                onDeleteNote={onDeleteNote}
                activeNote={activeNote}
                setActiveNote={setActiveNote}
            />
            <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
        </div>
    );
};