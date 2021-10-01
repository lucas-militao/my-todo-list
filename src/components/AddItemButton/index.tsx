import React from 'react';

import AddIcon from '../../assets/add_icon.svg'

import {
  Container,
} from './styles';

export function AddItemButton() {

  return(
    <Container>
      <AddIcon width={24}/>
    </Container>
  )
}