import styled from "styled-components/native";

import { Feather } from '@expo/vector-icons';
import { getBottomSpace } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import { BorderlessButton } from "react-native-gesture-handler";

export const Background = styled.View`
  width: 100%;
  height: 100%;

  position: absolute;
 
  background-color: #FFFFFF;
  opacity: .7;
`;

export const WindowContainer = styled.View`
  width: 220px;
  height: 120px;

  position: absolute;
  bottom: ${getBottomSpace() + 120}px;
  right: 16px;

  border-radius: 10px;
  background-color: #FFFFFF;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  opacity: 1;
`;

export const Option = styled(BorderlessButton)`
  flex: 1;

  padding: 0 18px;

  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const OptionIcon = styled(Feather).attrs({
  size: 24
})`
  color: #006CFF;
  margin-right: 12px;
`;

export const OptionTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: 'Roboto_500Medium';

  color: #006CFF;
`;
