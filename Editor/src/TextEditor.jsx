import React, { useState, useEffect } from 'react';
import { Editor, EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';

function TextEditor() {
  const [editorState, setEditorState] = useState(() => {
    const savedContent = localStorage.getItem('editorContent');
    if (savedContent) {
      const contentState = convertFromRaw(JSON.parse(savedContent));
      return EditorState.createWithContent(contentState);
    } else {
      return EditorState.createEmpty();
    }
  });

  const handleEditorChange = (newEditorState) => {
    setEditorState(newEditorState);
    const contentState = newEditorState.getCurrentContent();
    const contentStateJSON = convertToRaw(contentState);
    localStorage.setItem('editorContent', JSON.stringify(contentStateJSON));
  };

  const handleSave = () => {
    const contentState = editorState.getCurrentContent();
    const contentStateJSON = convertToRaw(contentState);
    localStorage.setItem('editorContent', JSON.stringify(contentStateJSON));
    alert('Content saved!');
  };

  return (
    <div>
      <h1>Title</h1>
      <button onClick={handleSave}>Save</button>
      <div className="editor-container">
        <Editor
          editorState={editorState}
          onChange={handleEditorChange}
        />
      </div>
    </div>
  );
}

export default TextEditor;
