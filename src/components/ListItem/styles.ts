import { BorderlessButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 16px;
`;

export const CheckButton = styled(BorderlessButton)``;

export const TaskTitle = styled.Text`
  flex: 1;
  font-size: ${RFValue(18)}px;
  font-family: 'Roboto_400Regular';

  padding-left: 16px;
`;

export const DotCategory = styled.View`
  width: 12px;
  height: 12px;

  border-radius: 6px;

  background-color: #61DEA4;
`;