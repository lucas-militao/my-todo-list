import React from 'react';

import AddIcon from '../../assets/add_icon.svg'

import {
  Container,
} from './styles';

export function AddTaskButton() {

  return(
    <Container>
      <AddIcon width={24}/>
    </Container>
  )
}