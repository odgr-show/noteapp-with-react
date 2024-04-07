import React from "react";
import "./Sidebar.scss";

export const Sidebar = ({
    onAddNote,
    notes,
    onDeleteNote,
    activeNote,
    setActiveNote,
}) => {
    const sortedNotes = notes.sort((a, b) => b.modDate - a.modDate);

    return (
        <div className="app-sidebar">
            <div className="app-sidebar__header">
                <h1>ノート</h1>
                <button onClick={onAddNote}>追加</button>
            </div>
            <div className="app-sidebar__notes">
                {sortedNotes.map((note) => (
                    <div
                        className={`app-sidebar__note ${
                            note.id === activeNote && "active"
                        }`}
                        key={note.id}
                        onClick={() => setActiveNote(note.id)}
                    >
                        <div className="app-sidebar__note__title">
                            <strong>{note.title}</strong>
                            <button onClick={() => onDeleteNote(note.id)}>
                                削除
                            </button>
                        </div>
                        <p>{note.content}</p>
                        <small>
                            {new Date(note.modDate).toLocaleDateString(
                                "ja-JP",
                                {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                }
                            )}
                        </small>
                    </div>
                ))}
            </div>
        </div>
    );
};
