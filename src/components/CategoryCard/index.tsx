import React from 'react';

import {
  Container,
  CategoryText,
  CategoryTitle,
  TasksQuantity,
  CheckContainer,
  IconCheck,
} from './styles';

type Props = {
  category?: 'Inbox' | 'Work' | 'Shopping' | 'Family' | 'Personal';  
  checked?: boolean;
}

export function CategoryCard({
  category = 'Inbox',
  checked = false
}: Props) {

  return (
    <Container category={category}>
      <CategoryText>
        <CategoryTitle category={category}>{category}</CategoryTitle>

        <TasksQuantity category={category}>2 tasks</TasksQuantity>
      </CategoryText>

      {
        checked && 
        <CheckContainer>
          <IconCheck name="check"/>
        </CheckContainer>
      }
    </Container>
  );
}