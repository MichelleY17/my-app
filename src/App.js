import './App.css';
import Button  from './components/Button';
import { useState } from 'react';

const todos = [
  {
    title: "Groceries",
    done: false
  },
  {
    title: "Gym",
    done: false,
  },
  {
    title:"Pet Ty",
    done: false,
  },
];

function App() {
  const [data, setData] = useState(todos);
  return (
    <div className="page">
      <header><h1>To Do List</h1></header>
      <div className="container">
        <div className="list">
          {data.map((item, index) => {
            return <TodoEntry key={index} label={item.title} />;
          })}
        </div>
        <Form setData={setData}/>
      </div>
    </div>
  );
}

export default App;

const TodoEntry = ({ label }) => {
  console.log(label);
  return (
    <div className="entry">
      <h2>{label}</h2>
      < Button />
    </div>
  );
};

const Form = ({setData}) => {
   const [formData, setFormData] = useState({
    title:"",
   });
   console.log(formData);  
  return(
    <div className='form'>
      <div className='typeInsert'>
        <label htmlform="title" className="form-label"><h1>ADD todo</h1></label>
        <input
          onChange={(ev)=> setFormData({title: ev.target.value,})}
          type="text"
          className="form-control"
          name="title"
          id="todo-title"
          aria-describedby='helpId'
          placeholder="write a new task"
        />
      </div>
      <button id="AddButton" onClick={()=> setData((prev) => [...prev, formData])}>ADD!</button>
    </div>

  );
};