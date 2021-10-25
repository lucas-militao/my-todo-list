import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";
import { BorderlessButton } from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;

  background-color: #FFF;
  padding-top: 5px;
  border-radius: 10px;
`;

export const TopBar = styled.View`
  width: 37px;
  height: 5px;

  border-radius: 2.5px;

  background-color: #252A31;
  opacity: 0.2;

  align-self: center;
`;

export const Header = styled.View`
  width: 100%;

  padding-left: 60px;
  padding-right: 12px;
  padding-bottom: 16px;

  margin-top: 22px;
  margin-bottom: 35px;
`;

export const HeaderTitle = styled.View`
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: 'Roboto_700Bold';
  font-size: ${RFValue(41)}px;

  margin-bottom: 3px;
`;

export const EditButton = styled(BorderlessButton)`
`;

export const EditButtonIcon = styled(Feather).attrs({
  size: 24,
  color: "black"
})``;

export const TaskQuantity = styled.Text`
  font-family: "Roboto_400Regular";
  font-size: ${RFValue(16)}px;
  color: #252A31;
  opacity: .5;
`;

export const Content = styled.View``;
