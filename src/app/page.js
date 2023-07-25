"use client";

import { useState } from "react";
import {
  IconButton,
  Button,
  Switch,
  List,
  ListItem,
  TextField,
} from "@mui/material";
import { AddCircle, RemoveCircle } from "@mui/icons-material";

export default function Home() {
  const [count, setCount] = useState(0);

  const [isEnabled, setIsEnabled] = useState(true);

  const handleRemove = () => {
    setCount(count - 1);
  };

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleEnabled = () => {
    setIsEnabled(!isEnabled);
  };

  return (
    <div>
      <h2>Basic Counter</h2>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <IconButton onClick={handleRemove} aria-label="remove" color="primary">
          <RemoveCircle />
        </IconButton>
        <p>{count}</p>
        <IconButton onClick={handleAdd} aria-label="add" color="primary">
          <AddCircle />
        </IconButton>
      </div>
      <h2>Toggle enabled</h2>
      <div>
        <Button onClick={handleEnabled} variant="contained">
          Enable/Disable toggle
        </Button>
        <Switch disabled={!isEnabled} />
      </div>
      <h2>TODO List</h2>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "300px",
          }}
        >
          <TextField size="small" label="Add task..." variant="outlined" />
          <Button variant="contained">Add Todo</Button>
        </div>
        <List>
          <ListItem disablePadding>Learn useState</ListItem>
          <p>...</p>
        </List>
      </div>
    </div>
  );
}
