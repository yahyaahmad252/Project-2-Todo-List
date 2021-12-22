import React , {useState} from 'react'

export default function Add(props) {

    const [newTitle, setnewTitle] = useState("")
    const createNewTodo = ()=>{
        console.log('create_to_do');
        props.createFunction({title: newTitle, isCompleted: false});
    }
    return (
        <div className='Add'>
            <input placeholder='write new title here' onChange={(e)=>{setnewTitle(e.target.value)}} />
            <button onClick={createNewTodo}>create new Todo</button>
        </div>
    )
}
