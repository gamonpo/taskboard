import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: ${RFPercentage(15)}px;
  width: ${RFPercentage(25)}px;

  border-radius: 5px;

  margin: 10px;
  justify-content: flex-end;

  background-color: ${({ theme }) => theme.colors.primary_light};
`;

export const Footer = styled.View`
  width: 100%;
  height: ${RFPercentage(5)}px;

  justify-content: center;
  padding: 10px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;


  background-color: ${({ theme }) => theme.colors.primary_medium};
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text_light};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;
