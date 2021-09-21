import { BorderlessButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: ${getStatusBarHeight() + 44}px;
  
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 11px 16px;
`;

export const ButtonContainer = styled(BorderlessButton)``;

export const ButtonCancelTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: 'Roboto_400Regular';

  color: #006CFF;
`;

export const ButtonDoneTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: 'Roboto_500Medium';

  color: #006CFF;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Footer = styled.View`
  width: 100%;
  height: 60px;
`;

export const Divider = styled.View`
  width: 100%;
  height: 1px;

  background-color: #252A31;
  opacity: .1;
`;

export const TaskOptions = styled.View`
  flex: 1;

  padding: 18px 16px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonIconContainer = styled(BorderlessButton)``;

export const IconsContainer = styled.View`
  flex-direction: row;
`;

export const Icon = styled(Feather).attrs({
  size: 24
})`
  color: #D8D8D8;

  margin-right: 20px;
`;

export const CategoryContainer = styled.View`
  flex-direction: row;

  justify-content: center;
  align-items: center;
`;

export const CategoryTitle = styled.Text`
  color: #252A31;

  opacity: 0.4;

  font-size: ${RFValue(15)}px;
  font-family: 'Roboto_400Regular';

  margin-right: 8px;
`;

export const CategoryColor = styled.View`
  width: 12px;
  height: 12px;

  border-radius: 6px;

  background-color: #EBEFF5;
`;

