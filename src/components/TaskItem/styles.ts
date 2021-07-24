import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: ${RFPercentage(5)}px;
  width: ${RFPercentage(25)}px;
  border-radius: 5px;

  margin: 5px;
  padding: 5px;
  justify-content: center;
  align-items: flex-start;
  elevation: 5;

  background-color: ${({ theme }) => theme.colors.text_light};
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text_dark};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;
