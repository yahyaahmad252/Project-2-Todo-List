import React , {useEffect, useState} from 'react';
import CSS from './App.css'

import axios from 'axios';
import Todo from './components/Todo';
export default function App() {

  const [tasks, settasks] = useState([])

  useEffect(()=>{
    getData()
  }, []);
  
  const getData= ()=>{
    axios.get('http://localhost:3000/tasks').then((response)=>{
      // console.log(`RESPONSE ${response}`);
      // console.log(`Data ${response.data}`);
      settasks(response.data);
    }).catch((err) =>{
      console.log(`Err ${err}`);
    })
  };

  const mapOverTasks = tasks.map((el , i)=> <Todo key={i} tasks={el}/>)

  return (
    <div className='App'>
      <p>app</p>
      <button onClick={getData}>getTasks</button>
      {mapOverTasks}
    </div>
  )
}
