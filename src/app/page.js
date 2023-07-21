"use client";

import { Button } from "@mui/material";
import MyButton from "../components/button";

export default function Home() {
  const handleOnClick = () => {
    console.log("me hicieron click");
  };
  const handleMaterialClick = () => {
    console.log("hice click en el boton de material");
  };
  return (
    <main>
      <Button onClick={handleMaterialClick} variant="contained">
        Contained
      </Button>
      <MyButton handleOnClick={handleOnClick}>Mi boton personalizado</MyButton>
    </main>
  );
}
