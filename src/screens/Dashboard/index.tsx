import React, { useState } from "react";
import { FlatList, ScrollView } from "react-native";
import { AddOptionWindow } from "../../components/AddOptionWindow";
import { AddItemButton } from "../../components/AddItemButton";
import { CategoryCard } from "../../components/CategoryCard";
import { Task } from "../../components/Task";

import { 
  Container,
  Header,
  HeaderTitle,
  Content,
  Separator,
  CategoriesContainer,
  CategoryTitle,
  Menu,
  Dot,
} from './styles';
import { ModalTasksCategory } from "../../components/ModalTasksCategory";

interface Category {
  title: string;
}

export function Dashboard() {
  const [showAddItemWindow, setShowAddItemWindow] = useState(false);
  const [categoryDetails, setCategoryDetails] = useState({} as Category);
  const [showModal, setShowModal] = useState(false);

  function handleVisibilityOfAddItemWindow() {
    setShowAddItemWindow(!showAddItemWindow);
  }

  function handleShowCategoryDetails(category: Category) {
    setCategoryDetails(category);
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <Container>
      
      <Header>
        <HeaderTitle>Today</HeaderTitle>

        <Menu>
          <Dot />
          <Dot />
          <Dot />
        </Menu>
      </Header>

      <Content horizontal={false}>
        <FlatList
          data={[1, 2, 4, 5, 6, 7, 8, 9]}
          keyExtractor={key => String(key)}
          renderItem={(item) => (
            <Task 
              name={`tarefa ${item.index}`}
            />
          )}
          ItemSeparatorComponent={Separator}
          style={{ marginBottom: 32 }}
          nestedScrollEnabled
        />

        <FlatList
          data={[1, 2, 3, 4]}
          keyExtractor={key => String(key)}
          renderItem={(item) => (
            <CategoryCard 
              category={{ title: `Categoria ${item.index}` }}
              showDetails={handleShowCategoryDetails}
            />
          )}
          nestedScrollEnabled
          style={{ paddingLeft: 58, paddingRight: 16 }}
        />
      </Content>

      <ModalTasksCategory 
        show={showModal}
        category={categoryDetails}
        closeModal={handleCloseModal}
      />
      
      {
        showAddItemWindow && <AddOptionWindow />
      }
      <AddItemButton onPress={handleVisibilityOfAddItemWindow}/>

    </Container>
  )
}