import React from 'react';
import { Divider } from '../Divider';

import {
  Background,
  WindowContainer,
  Option,
  OptionIcon,
  OptionTitle,
} from './styles';

export function AddOptionWindow() {

  return (
    <>
      <Background />
      <WindowContainer>
        <Option>
          <OptionIcon name="check-circle"/>
          <OptionTitle>Task</OptionTitle>
        </Option>
        <Divider />
        <Option>
          <OptionIcon name="list"/>
          <OptionTitle>List</OptionTitle>
        </Option>
      </WindowContainer>
    </>
  )
}