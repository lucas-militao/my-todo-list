import React from "react";
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

        <CategoriesContainer>
          <CategoryTitle>Lists</CategoryTitle>
          <CategoryCard />
          <CategoryCard category="Family"/>
          <CategoryCard category="Personal"/>
          <CategoryCard category="Shopping"/>
          <CategoryCard category="Work"/>
        </CategoriesContainer>
      </Content>
      
      <AddOptionWindow />
      <AddItemButton />
    </Container>
  )
}