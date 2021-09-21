import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";

type Props = {
  category: 'Inbox' | 'Work' | 'Shopping' | 'Family' | 'Personal';
}

export const Container = styled.View<Props>`
  width: 301px;
  height: 69px;

  border-radius: 10px;

  ${({ category }) => category === 'Inbox' && css`
    background-color: #EBEFF5;
  `};
  ${({ category }) => category === 'Work' && css`
    background-color: #61DEA4;
  `};
  ${({ category }) => category === 'Shopping' && css`
    background-color: #F45E6D;
  `};
  ${({ category }) => category === 'Family' && css`
    background-color: #FFE761;
  `};
  ${({ category }) => category === 'Personal' && css`
    background-color: #B678FF;
  `};

  padding: 0 16px;
  flex-direction: row;
  align-items: center;

  margin-bottom: 8px;
`;

export const CategoryText = styled.View`
  flex: 1;
`;

export const CategoryTitle = styled.Text<Props>`
  font-size: ${RFValue(19)}px;
  font-family: 'Roboto_500Medium';
  margin-bottom: 4px;

  color: #FFFFFF;

  ${({ category }) => 
    (category === 'Inbox' ||  category === 'Family') && css`
      color: #252A31;
      opacity: 0.9;
  `};
`;

export const TasksQuantity = styled.Text<Props>`
  font-size: ${RFValue(14)}px;
  font-family: 'Roboto_400Regular';
  color: #FFFFFF;

  ${({ category }) => 
    (category === 'Inbox' ||  category === 'Family') && css`
      color: #252A31;
      opacity: 0.5;
  `};
`;

export const CheckContainer = styled.View`
  width: 28px;
  height: 28px;

  border-radius: 14px;

  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
`;

export const IconCheck = styled(Feather).attrs({
  size: 15
})`
  color: #006CFF;
`;

