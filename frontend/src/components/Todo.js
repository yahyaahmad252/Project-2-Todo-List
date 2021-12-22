import React from 'react'

export default function Todo(props) {
    const {_id , title , isCompleted} = props.tasks;
    return (
        <div className='Todo'>
            {/* <p>TITLE: {title}</p> */}
            <div className='parent'>
                {/* <div className='child'>id: {_id}</div> */}
                <input type="checkbox" checked={isCompleted} />
                <div className='child'>Title:<span> {title}</span></div>
                <button className='child'><a href=''>X</a></button>
            </div>
        </div>
    )
}
