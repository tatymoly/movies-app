"use client";

import * as React from "react";
import { useState } from "react";
import { Button, List, ListItem, TextField, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";

export default function TodoForm() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const handleClick = () => {
    if(!input) {
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      text: input,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((task)=> task.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h2>TODO List</h2>
      <form>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "315px",
          }}
        >
          <TextField
            id="text-field"
            size="small"
            label="Add task..."
            variant="outlined"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button variant="contained" onClick={handleClick}>
            Add To do
          </Button>
        </div>
        <List>
          {todos.map((task) => (
            <ListItem key={task.id} disablePadding>
              {task.text}
              
              <IconButton aria-label="delete" onClick={() => deleteTodo(task.id)} >
                <Delete />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </form>
    </div>
  );
}
