import React from 'react';

import Unmarked from '../../assets/unmarked.svg';

import {
  Container,
  CheckButton,
  TaskTitle,
  DotCategory,
} from './styles';


type Props = {
  name: string;
  completed: boolean;
  category?: 'Work' | 'Shopping' | 'Family' | 'Personal';
}

export function ListItem({
  name,
  completed = false,
  category
}: Props) {

  return(
    <Container>
      <CheckButton>
        <Unmarked width={28}/>
      </CheckButton>
      <TaskTitle>{name}</TaskTitle>
      <DotCategory />
    </Container>
  )
}