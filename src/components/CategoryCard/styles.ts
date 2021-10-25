import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
  width: 100%;
  height: 69px;

  border-radius: 10px;

  background-color: #000000;
  
  padding: 0 16px;
  flex-direction: row;
  align-items: center;

  margin-bottom: 8px;
`;

export const CategoryText = styled.View`
  flex: 1;
`;

export const CategoryTitle = styled.Text`
  font-size: ${RFValue(19)}px;
  font-family: 'Roboto_500Medium';
  margin-bottom: 4px;

  color: #FFFFFF;
`;

export const TasksQuantity = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: 'Roboto_400Regular';
  color: #FFFFFF;
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

