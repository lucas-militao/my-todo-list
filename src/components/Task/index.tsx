import React, { useState } from 'react';

import Unmarked from '../../assets/unmarked.svg';

import {
  Container,
  CheckButton,
  TaskInputTitle,
  DotCategory,
  TaskInfo,
  TaskPeriod,
  TaskDateInfo,
  Icon,
  TaskDate,
  TaskTimeInfo,
  TaskTime,
} from './styles';


type Props = {
  name: string;
  completed?: boolean;
  dated?: boolean;
  scheduled?: boolean
  category?: 'Inbox' | 'Work' | 'Shopping' | 'Family' | 'Personal';
  placeholder?: string;
}

export function Task({
  name = '',
  completed = false,
  dated = false,
  scheduled = false,
  category = 'Inbox',
  placeholder = '',
}: Props) {
  const [title, setTitle] = useState(name);

  return(
    <Container>
      <CheckButton>
        <Unmarked width={28}/>
      </CheckButton>

      <TaskInfo>
        <TaskInputTitle 
          value={title} 
          onChangeText={setTitle}
          placeholder={placeholder}
          style={{ marginBottom: (dated || scheduled) ? 5 : 0 }}
        />
 
        <TaskPeriod>
          {
            dated &&
            <TaskDateInfo>
              <Icon name="calendar"/>
              <TaskDate>Today</TaskDate>
            </TaskDateInfo>
          }

          {
            scheduled &&
              <TaskTimeInfo>
                <Icon name="clock"/>
                <TaskTime>7:00 pm</TaskTime>
              </TaskTimeInfo>
          }
        </TaskPeriod>

      </TaskInfo>
      <DotCategory />
    </Container>
  )
}