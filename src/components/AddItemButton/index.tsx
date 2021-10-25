import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import AddIcon from '../../assets/add_icon.svg'

import {
  Container,
} from './styles';

type Props = RectButtonProps;

export function AddItemButton({
  ...rest
}: Props) {

  return(
    <Container {...rest}>
      <AddIcon width={24}/>
    </Container>
  )
}