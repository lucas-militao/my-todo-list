import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 301px;
  height: 69px;

  border-radius: 10px;

  background-color: #EBEFF5;
`;

export const CategoryText = styled.View`
  flex: 1;

  padding: 12px 13px 0 16px;
`;

export const CategoryTitle = styled.Text`
  font-size: ${RFValue(19)}px;
  font-family: 'Roboto_500Medium';
  margin-bottom: 4px;

  color: #252A31;
  opacity: 0.9;
`;

export const TasksQuantity = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: 'Roboto_400Regular';

  color: #252A31;
  opacity: 0.5;
`;
