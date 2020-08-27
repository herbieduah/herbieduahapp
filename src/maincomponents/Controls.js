import React from "react";
import { useGlobalState } from "../State";

export const IncrementButton = () => {
  const { count, setCount } = useGlobalState();
  return <button onClick={() => setCount(count + 1)}>+</button>;
};

export const DecrementButton = () => {
  const { count, setCount } = useGlobalState();
  return <button onClick={() => setCount(count - 1)}>-</button>;
};

export const ThemeSelector = () => {
  const { theme, setTheme } = useGlobalState();
  return (
    <select value={theme} onChange={(evt) => setTheme(evt.target.value)}>
      <option>light</option>
      <option>dark</option>
    </select>
  );
};
