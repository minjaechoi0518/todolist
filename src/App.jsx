import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [content, setContent] = useState([
    {
      id: 1,
      title: "Write Down Your Todo",
      todo: "오늘해야할일1",
      isDone: false,
    },
  ]);
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState("");

  const contentChangeHandler = (e) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setTodo(e.target.value);
    }
  };

  const buttonForAdd = () => {
    if (title.length > 0 && todo.length > 0) {
      const newContent = {
        id: content.length + 1,
        title: title,
        todo: todo,
        isDone: false,
      };
      setContent([...content, newContent]);
      setTitle("");
      setTodo("");
    }
  };

  const buttonForRemove = (id) => {
    const newContent = content.filter((content) => content.id !== id);
    setContent(newContent);
  };

  const buttonForComplete = (id) => {
    setContent(
      content.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isDone: true,
          };
        }
        return item;
      })
    );
  };

  const buttonForCancel = (id) => {
    setContent(
      content.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isDone: false,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="App">
      <div className="head clearfix">
        <h1>My Todo List</h1>
        <h2>React</h2>
      </div>

      <div className="mainContainer">
        제 목
        <input
          name="title"
          onChange={contentChangeHandler}
          className="titleBox"
          value={title}
        ></input>
        내 용
        <input
          name="todo"
          onChange={contentChangeHandler}
          className="titleBox"
          value={todo}
        ></input>
        <button onClick={buttonForAdd} className="buttonForAdd btnFirst">
          추가하기
        </button>
      </div>
      <div className="listTitle">Working Zone</div>
      <div className="con_list">
        {content
          .filter((item) => !item.isDone)
          .map((item) => {
            return (
              <div className="con_todo" key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.todo}</p>
                <div className="button-Set">
                  <button
                    onClick={() => buttonForComplete(item.id)}
                    className="buttonForComplete btnFirst"
                  >
                    완료하기
                  </button>
                  <button
                    onClick={() => buttonForRemove(item.id)}
                    className="btnRemove btnFirst"
                  >
                    삭제하기
                  </button>
                </div>
              </div>
            );
          })}
      </div>
      <div className="listTitle">Done Zone</div>
      <div className="con_list">
        {content
          .filter((item) => item.isDone)
          .map((item) => {
            return (
              <div className="con_todo">
                <h2>{item.title}</h2>
                <p>{item.todo}</p>
                <div className="button-Set">
                  <button
                    onClick={() => buttonForCancel(item.id)}
                    className="buttonForCancle btnFirst"
                  >
                    취소하기
                  </button>
                  <button
                    onClick={() => buttonForRemove(item.id)}
                    className="btnRemove btnFirst "
                  >
                    삭제하기
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default App;
