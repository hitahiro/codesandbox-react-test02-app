import React from "react";

export const CompleteTodos = (props) => {
  const { todoList, onClickUndo } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {todoList.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="list-row">
                <span>{todo}</span>
                <button onClick={() => onClickUndo(index)}>戻す</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
