import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import Signup from './components/signup'; // 정확한 파일 이름으로 수정

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignupButton = styled(Link)`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  &:hover {
    background-color: #45a049;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/"
            element={
              <AppContainer>
                <TodoTemplate>
                  <TodoHead />
                  <TodoList />
                  <TodoCreate />
                </TodoTemplate>
                <SignupButton to="/signup">Sign Up</SignupButton>
              </AppContainer>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
