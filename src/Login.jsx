import React from "react";
import {Wrapper,Description,Title,InputWrapper,Input} from './stayle'
function App() {
  return (
    <Wrapper>
      <Description>
        Already have an account
      </Description>
      <Title>Login here</Title>
      <InputWrapper>
      <Input placeholder="Usename"/>
      </InputWrapper>
      <InputWrapper>
      <Input placeholder="Password"/>
      </InputWrapper>
    </Wrapper>
  );
}

export default App;
