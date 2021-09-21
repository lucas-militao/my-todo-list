import React, { useState } from 'react';

import { Task } from '../../components/Task';


import {
  Container,
  Header,
  ButtonContainer,
  ButtonCancelTitle,
  ButtonDoneTitle,
  Content,
  Footer,
  Divider,
  TaskOptions,
  IconsContainer,
  ButtonIconContainer,
  Icon,
  CategoryContainer,
  CategoryTitle,
  CategoryColor,
} from './styles';

export function Register() {

  return (
    <Container>
      <Header>
        <ButtonContainer>
          <ButtonCancelTitle>Cancel</ButtonCancelTitle>
        </ButtonContainer>

        <ButtonContainer>
          <ButtonDoneTitle>Done</ButtonDoneTitle>
        </ButtonContainer>
      </Header>

      <Content>
        <Task 
          name='' 
          placeholder="O que deseja fazer?"
        />
      </Content>

      <Footer>
        <Divider />

        <TaskOptions>
          <IconsContainer>
            <ButtonIconContainer>
              <Icon name="calendar" />
            </ButtonIconContainer>

            <ButtonIconContainer>
              <Icon name="clock" />
            </ButtonIconContainer>
          </IconsContainer>

          <CategoryContainer>
            <CategoryTitle>Inbox</CategoryTitle>
            <CategoryColor />
          </CategoryContainer>
        </TaskOptions>
      </Footer>
    </Container>
  )
}