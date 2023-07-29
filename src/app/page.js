"use client"

import React from 'react'
import { useState } from 'react';
import {
  Button,
  List,
  ListItem,
  TextField,
} from "@mui/material";

export default function TodoForm() {
  
  const [input, setInput] = useState('')
  const[todos, setTodos] = useState([])
  const handleClick = () => {
    const newTodo = {
      id: new Date().getTime(),
      text: input,
      completed: false,
    }
    setTodos([...todos].concat(newTodo))
    setInput('')
  }

  return (
    <div>
      <h2>TODO List</h2>
        <form> 
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "300px",
            }}
          >
            <TextField size="small" label="Add task..." variant="outlined" value = {input}
              onChange = {(event) => setInput(event.target.value)} 
            />   
            <Button variant="contained" onClick= {() => handleClick()} >Add To do</Button>
          </div>         
          <List>
            {todos.map((input) => <ListItem disablePadding>{input.text}</ListItem> )}          
          </List>  
        </form>          
    </div>
  );
}
