import React from "react";
import { FlatList } from "react-native";
import { AddTaskButton } from "../../components/AddTaskButton";
import { CategoryCard } from "../../components/CategoryCard";
import { ListItem } from "../../components/ListItem";

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

export function Dashboard() {
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

      <Content>
        <FlatList
          data={[1, 2, 4, 5]}
          renderItem={(item) => (
            <ListItem 
              name="tarefa" 
              completed={false} 
            />
          )}
          ItemSeparatorComponent={Separator}
          style={{ marginBottom: 32 }}
        />

        <CategoriesContainer>
          <CategoryTitle>Lists</CategoryTitle>
          
          <CategoryCard />
        </CategoriesContainer>
      </Content>
      
      <AddTaskButton />
    </Container>
  )
}