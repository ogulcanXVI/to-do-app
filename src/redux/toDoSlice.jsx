import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
};

const toDoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      state.tasks.push(action.payload);
    },
    removeToDo: (state, action) => {
      state.tasks = state.tasks.filter((todo) => todo.id !== action.payload);
    },
    toggleToDo: (state, action) => {
      const todo = state.tasks.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addToDo, removeToDo, toggleToDo } = toDoSlice.actions;

export default toDoSlice.reducer;
