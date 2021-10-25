import React, { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Modal from "react-native-modal";

import {
  Container,
  TopBar,
  Header,
  HeaderTitle,
  Title,
  EditButton,
  EditButtonIcon,
  TaskQuantity,
  Content,
} from './styles';

interface Category {
  title: string;
}

interface Props {
  show: Boolean;
  category: Category;
  closeModal: () => void;
}

export function ModalTasksCategory({
  show = false,
  category,
  closeModal
}: Props) {

  return (

    <TouchableWithoutFeedback>
      <Modal
        isVisible={!!show}
        style={{
          margin: 0,
          marginTop: 53,
        }}
        onSwipeComplete={closeModal}
        swipeDirection="down"
      >
        <Container>
          <TopBar />

          <Header>
            <HeaderTitle>
              <Title>{category.title}</Title>
              <EditButton>
                <EditButtonIcon name="edit"/>
              </EditButton>
            </HeaderTitle>
            <TaskQuantity>2 tasks</TaskQuantity>
          </Header>

          <Content>

          </Content>
        </Container>
      </Modal>
    </TouchableWithoutFeedback>
  );
}