import NoteContext from "./NoteContext";

const NoteState = (props) =>{
    const state = {
        "name": "Kankana",
        "class": "6A"
    }
    return(
        <NoteState.Provider>
            {props.children}
        </NoteState.Provider>
    )
}

export default NoteState;