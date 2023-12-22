import React, { useContext } from 'react'
import NoteContext from './Context/notes/NoteContext'


export default function ChildA() {
    const a = useContext(NoteContext)
  return (
    <>
   <div>
    This is About {a.name} and he is in {a.class}.
   </div>
   </>
  )
}

