import { BorderlessButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  height: auto;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 19px 16px;
`;

export const CheckButton = styled(BorderlessButton)``;


export const DotCategory = styled.View`
  width: 12px;
  height: 12px;
  
  border-radius: 6px;
  
  background-color: #61DEA4;
`;

export const TaskInfo = styled.View`
  flex: 1;

  padding: 0px 16px;
`;

export const TaskInputTitle = styled.TextInput`
  font-size: ${RFValue(18)}px;
  font-family: 'Roboto_400Regular';
`;

export const TaskPeriod = styled.View`
  flex-direction: row;
`;

export const TaskDateInfo = styled.View`
  flex-direction: row;
  align-items: center;

  margin-right: 12px;
`;

export const Icon = styled(Feather).attrs({
  size: 16
})`
  color: #D8D8D8;
  margin-right: 4px;
`;

export const TaskDate = styled.Text`
  color: #D8D8D8;
`;

export const TaskTimeInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TaskTime = styled.Text`
  color: #D8D8D8;
`;
