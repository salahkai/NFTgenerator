import React from "react";
import { SliderComponent } from "./Slider";
import { TextField } from "@material-ui/core";
import { ObjectContext, ObjectSelection } from "./App";
import { Button, Input } from "@material-ui/core";

export const EditorInput = (props) => {
  // eslint-disable-next-line no-undef
  const { objects, dispatch1 } = React.useContext(ObjectContext);
  const { selection, dispatch2 } = React.useContext(ObjectSelection);

  const commonStyle = {
    margin: "20px",
    backgroundColor: "#c1c9d1",
    padding: "5px",
    borderRadius: "10px",
    boxShadow: "1px 3px 1px #afafaf",
  };

  const [input1, setInput1] = React.useState({ name: "height", value: null });
  const [input2, setInput2] = React.useState({ name: "width", value: null });

  return (
    <div
      style={{
        marginTop: "10px",
        backgroundColor: "#dee2e7",
        padding: "10px",
        borderRadius: "10px",
        boxShadow: "1px 3px 1px #acacaf",
      }}
    >
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          fontWeight: "bold",
          fontSize: "20px",
          fontFamily: "monospace",
        }}
      >
        Manual Input
      </div>
      <div style={commonStyle}>
        <div style={{ fontWeight: "bolder", fontFamily: "monospace" }}>
          Height:
        </div>
        <div>
          <TextField
            variant="outlined"
            onChange={(event) => {
              setInput1({ name: "height", value: event.target.value });
            }}
          />
        </div>
      </div>
      <div style={commonStyle}>
        <div style={{ fontWeight: "bold", fontFamily: "monospace" }}>
          {" "}
          Width:
        </div>

        <TextField
          variant="outlined"
          onChange={(event) => {
            setInput2({ name: "width", value: event.target.value });
          }}
        />
      </div>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.setValues(input1, input2)}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};
