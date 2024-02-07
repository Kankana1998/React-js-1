import React, { useState, useEffect } from 'react';
import { Editor, EditorState, convertToRaw, convertFromRaw, RichUtils, getDefaultKeyBinding, KeyBindingUtil } from 'draft-js';
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
    
  };

  // 2nd part 

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const keyBindingFn = (e) => {
    if (e.key === '#' && KeyBindingUtil.hasCommandModifier(e)) {
      return 'header-shortcut';
    }
    if (e.key === '*' && KeyBindingUtil.hasCommandModifier(e)) {
      return 'bold-shortcut';
    }
    return getDefaultKeyBinding(e);
  };

  const handleBeforeInput = (chars, editorState) => {
    if (chars === '#') {
      setEditorState(RichUtils.toggleBlockType(editorState, 'header-one'));
      return 'handled';
    }
    if (chars === '*' || chars === '**' || chars === '***') {
      setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
      return 'handled';
    }
  
   if (chars === '** ') {
      setEditorState(addRedLine(editorState));
      return 'handled';
    }
    return 'not-handled';
  }

  // const onChange = (newEditorState) => {
  //   setEditorState(newEditorState);
  // };

  const addRedLine = (editorState) => {
    const contentState = editorState.getCurrentContent();
    const selectionState = editorState.getSelection();
    const newContentState = contentState.createEntity('REDLINE', 'MUTABLE', { color: 'red' });
    // const entityKey = newContentState.getLastCreatedEntityKey();
    // const textWithEntity = Modifier.insertText(newContentState, selectionState, ' ', null, entityKey);
    // const newEditorState = EditorState.push(editorState, textWithEntity, 'insert-characters');
    // return EditorState.forceSelection(newEditorState, textWithEntity.getSelectionAfter());
  };

  return (
    <div>
      <div className='nav-comp'>
      <h1 id='heading'>Demo Editor by Kankana</h1>
      <button id='save' onClick={handleSave}>Save</button>
      </div>
      
      <div className="editor-container">
        <Editor
          editorState={editorState}
          onChange={handleEditorChange}
          handleKeyCommand={handleKeyCommand}
          keyBindingFn={keyBindingFn}
          handleBeforeInput={handleBeforeInput}
        />
      </div>
    </div>
  );
}

export default TextEditor;
