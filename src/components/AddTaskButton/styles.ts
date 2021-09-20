import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
  width: 64px;
  height: 64px;

  border-radius: 32px;
  border-width: 1px;
  border-color: #006CFF;

  background-color: #FFFFFF;

  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 44px;
  right: 16px;
`;