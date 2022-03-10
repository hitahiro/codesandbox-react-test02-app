import React from "react";

export const ImcompleteTodos = (props) => {
  const { todoList, onClickComplete, onClickDelete } = props;
  return (
    <div className="imcomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todoList.map((todo, index) => {
          return (
            // mapなどのループ処理をする場合、最初のタグにkeyを追加する必要がある。
            // JSに引数を渡す場合、そのまま定義するとレンダリングする時に実行してしまうので、アロー関数で定義するとレンダリング時に実行しないようになる
            <li key={todo}>
              <div className="list-row">
                <span>{todo}</span>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
