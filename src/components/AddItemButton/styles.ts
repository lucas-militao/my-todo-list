import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
  width: 64px;
  height: 64px;

  border-radius: 32px;

  background-color: #FFFFFF;

  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 44px;
  right: 16px;

  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
`;