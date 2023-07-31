"use client";

import * as React from "react";
import { useState } from "react";
import { Button, List, ListItem, TextField } from "@mui/material";
import { IconButton } from "@mui/material/IconButton";
import { Delete } from "@mui/icons-material";

export default function TodoForm() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const handleClick = () => {
    const newTodo = {
      id: new Date().getTime(),
      text: input,
      completed: false,
    };
    setTodos([...todos].concat(newTodo));
    setInput("");
  };

  const deleteTodo = (id) => {
    const updatedTodos = [...todos].filter((input) => input.id !== id);
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
            width: "300px",
          }}
        >
          <TextField
            size="small"
            label="Add task..."
            variant="outlined"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button variant="contained" onClick={() => handleClick()}>
            Add To do
          </Button>
        </div>
        <List>
          {todos.map((input) => (
            <ListItem key={input.id} disablePadding>
              {input.text}
              
              <IconButton aria-label="delete" onClick={() => deleteTodo(input.id)} >
                <Delete />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </form>
    </div>
  );
}
