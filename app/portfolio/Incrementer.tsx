"use client";

import React, { useState } from "react";

export function Incrementer() {
  // var count = 2
  const [count, setCount] = useState(0);
  const decrement = () => {
    // count = (count - 1)
    setCount((prevState) => {
      return prevState - 1;
    });
    console.log('count ', count)
  }

  const increment = () => {
    // count = (count + 1)
    setCount((prevState) => {
      return prevState + 1;
    });
    console.log('count ', count)
  }

  return (
    <>
      <p className=" text-lg"> hello world! portfolio </p>
      <p> {count}</p>
      <p className=" bg-slate-400">hii</p>
      <button onClick={(e) => { increment(); }}> + </button>
      <button onClick={(e) => { decrement(); }}> - </button>
    </>
  );
}