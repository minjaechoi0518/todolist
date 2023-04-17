## 프로젝트 명 : TodoList
React 훅 useState와 props, jsx를 이용해서 간단히 만들어보는 TodoList입니다.

### 배포 
https://todolist-beta-one.vercel.app/


###  코드 리뷰


우선, useState 훅을 사용하여 상태값을 관리합니다. content는 현재 할 일 목록을 나타내며, title과 todo는 새로운 할 일을 추가할 때 제목과 내용을 입력받습니다.

contentChangeHandler 함수는 title 또는 todo의 값을 변경할 때마다 호출되어 해당 값을 업데이트합니다.

buttonForAdd 함수는 새로운 할 일을 추가하는 함수입니다. title과 todo의 값이 모두 입력되어 있을 때만 새로운 할 일을 추가할 수 있습니다.

buttonForRemove 함수는 선택한 할 일을 삭제하는 함수입니다.

buttonForComplete 함수는 선택한 할 일을 완료 처리하는 함수입니다. 선택한 할 일의 isDone 속성값을 true로 변경합니다.

buttonForCancel 함수는 완료된 할 일을 취소 처리하는 함수입니다. 선택한 할 일의 isDone 속성값을 false로 변경합니다.

마지막으로, render() 메서드에서는 입력 폼과 현재 할 일 목록을 나타내는 두 개의 리스트를 렌더링합니다. filter() 함수를 사용하여 isDone 값이 false인 할 일 목록과 true인 완료된 할 일 목록을 나누어 렌더링합니다.

이 코드는 사용자가 입력한 제목과 내용을 기반으로 할 일 목록을 관리하는데 사용됩니다. 사용자는 새로운 할 일을 추가하고, 완료된 할 일을 확인하고, 필요에 따라 할 일을 삭제하거나 취소 처리할 수 있습니다. 코드에서 사용된 useState 훅, filter() 함수 등은 React에서 자주 사용되는 함수이므로 React를 배우는 초보자들에게 유용할 것입니다.




4. 원본코드. 


```
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

```
