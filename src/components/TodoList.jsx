import React from "react";
import styled from "styled-components";
import Todoitem from "./Todoitem";
 
const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-x: auto;
`;
 
function TodoList() {
    return (
        <TodoListBlock>
            <Todoitem text="프로젝트 생성하기" done={true} />
            <Todoitem text="컴포넌트 스타일링 하기" done={true} />
            <Todoitem text="Context 만들기" done={false} />
            <Todoitem text="기능 구현하기" done={false} />
        </TodoListBlock>
    );
}
 
export default TodoList;