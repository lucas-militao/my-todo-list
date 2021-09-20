import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  margin-top: ${getStatusBarHeight() + 60}px;
  padding-left: 60px;
  padding-right: 12px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitle = styled.Text`
  font-family: 'Roboto_700Bold';
  font-size: ${RFValue(41)}px;
`;

export const Menu = styled(BorderlessButton)`
  width: 25px;
  height: 25px;

  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Dot = styled.View`
  width: 5px;
  height: 5px;

  border-radius: 2.5px;

  background-color: #006CFF;

`;

export const Content = styled.View`
  width: 100%;

  padding: 16px 0;
`;

export const Separator = styled.View`
  width: 315px;
  height: 1px;

  background-color: #EBEFF5;
`;

export const CategoriesContainer = styled.View`
  padding-left: 60px;
`;

export const CategoryTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: 'Roboto_700Bold';

  color: #252A31;
  opacity: .3; 

  margin-bottom: 15px;
`;
