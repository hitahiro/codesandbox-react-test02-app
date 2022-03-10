import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { ImcompleteTodos } from "./components/ImcompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [imcompleteTodos, setImcompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };
  const onClickAdd = () => {
    if (todoText === "") return;
    if (imcompleteTodos.length >= 5) {
      alert("まずは他のTODOを終わらせてください。");
      return;
    }
    const newTodos = [...imcompleteTodos, todoText];
    setImcompleteTodos(newTodos);
    setTodoText("");
  };
  const onClickDel = (index) => {
    const newImcompleteTodos = [...imcompleteTodos];
    newImcompleteTodos.splice(index, 1);
    setImcompleteTodos(newImcompleteTodos);
  };
  const onClickComp = (index) => {
    const newImcompleteTodos = [...imcompleteTodos];
    newImcompleteTodos.splice(index, 1);
    setImcompleteTodos(newImcompleteTodos);

    const newCompleteTodos = [...completeTodos, imcompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
  };

  const onClickUndo = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);

    setImcompleteTodos([...imcompleteTodos, completeTodos[index]]);
  };
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={imcompleteTodos.length >= 5}
      />
      {imcompleteTodos.length >= 5 && <p>TODO消化してから追加しましょう</p>}
      <ImcompleteTodos
        todoList={imcompleteTodos}
        onClickComplete={onClickComp}
        onClickDelete={onClickDel}
      />
      <CompleteTodos todoList={completeTodos} onClickUndo={onClickUndo} />
    </>
  );
};

export default App;
