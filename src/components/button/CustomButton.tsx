import React from "react";
import Button from "@material-ui/core/Button";
import "./CustomButton.css";

export default function CustomButton({ text, url }: any) {
  return (
    <Button href={url} id="button">
      {text}
    </Button>
  );
}
