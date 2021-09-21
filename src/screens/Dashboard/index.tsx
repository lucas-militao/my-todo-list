import React from "react";
import { FlatList, ScrollView } from "react-native";
import { AddTaskButton } from "../../components/AddTaskButton";
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
          data={[1, 2, 4, 5]}
          keyExtractor={key => String(key)}
          renderItem={(item) => (
            <Task 
              name={`tarefa ${item.index}`}
              completed={false} 
            />
          )}
          ItemSeparatorComponent={Separator}
          style={{ marginBottom: 32 }}
        />

        <CategoriesContainer>
          <CategoryTitle>Lists</CategoryTitle>
          
          <ScrollView>
            <CategoryCard />
            <CategoryCard category="Family"/>
            <CategoryCard category="Personal"/>
            <CategoryCard category="Shopping"/>
            <CategoryCard category="Work"/>
          </ScrollView>

        </CategoriesContainer>
      </Content>
      
      <AddTaskButton />
    </Container>
  )
}