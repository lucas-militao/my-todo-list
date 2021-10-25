import React from 'react';

import {
  Container,
  CategoryText,
  CategoryTitle,
  TasksQuantity,
  CheckContainer,
  IconCheck,
} from './styles';

interface Category {
  title: string;
}

interface Props {
  category: Category;  
  checked?: boolean;
  showDetails: (category: Category) => void
}

export function CategoryCard({
  category,
  checked = false,
  showDetails
}: Props) {

  return (
    <Container onPress={() => {showDetails(category)}}>
      <CategoryText>
        <CategoryTitle>{category.title}</CategoryTitle>

        <TasksQuantity>2 tasks</TasksQuantity>
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