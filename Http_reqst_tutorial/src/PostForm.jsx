import { useState } from "react"
export const PostForm =() => {
    const [userId, setUserId] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    return <form>
        <div>
            <input type="text" placeholder = 'User ID' value={userId} onChange={e => setUserId(e.target.value)}/>
        </div>
        <div>
            <input type="text" placeholder = 'Title' value={title} />
        </div>
        <div>
            <input type="text" placeholder = 'Body' value={body} />
        </div>
    </form>
}