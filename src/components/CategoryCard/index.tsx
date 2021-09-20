import React from 'react';

import {
  Container,
  CategoryText,
  CategoryTitle,
  TasksQuantity,
} from './styles';

export function CategoryCard() {

  return (
    <Container>
      <CategoryText>
        <CategoryTitle>Personal</CategoryTitle>

        <TasksQuantity>2 tasks</TasksQuantity>
      </CategoryText>
    </Container>
  );
}