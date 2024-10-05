// @ts-check
import React from "react";
import { produce } from "immer";
import { Cell } from "./Cell";

import { createSlice, configureStore } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";
import { dataSlice } from "./store";

function App() {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { row, column } = e.target.dataset;
    dispatch(
      dataSlice.actions.setCell({
        row,
        column,
        value: e.target.value,
      })
    );
  };

  return (
    <table onChange={handleChange}>
      <thead>
        <tr>
          <th>🦆</th>
          {data[0].map((_, idx) => (
            <th>{columnNumToLetter(idx)}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <th>{rowIndex + 1}</th>
            {row.map((each, columnIndex) => (
              <Cell
                key={columnIndex}
                value={each}
                rowIndex={rowIndex}
                columnIndex={columnIndex}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;

function columnNumToLetter(num) {
  if (num > 25) {
    return (
      columnNumToLetter(Math.floor(num / 26)) +
      String.fromCharCode((num % 26) + 65)
    );
  }
  return String.fromCharCode(num + 65);
}
