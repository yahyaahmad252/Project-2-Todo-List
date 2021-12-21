import React from 'react'

export default function Todo(props) {
    const {_id , title , isCompleted} = props.tasks;
    return (
        <div className='Todo'>
            <p>TITLE: {title}</p>
            <div className='parent'>
                <div className='child'>Title</div>
            </div>
        </div>
    )
}
