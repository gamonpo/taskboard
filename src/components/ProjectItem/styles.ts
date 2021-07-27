import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  height: ${RFPercentage(15)}px;
  width: ${RFPercentage(25)}px;

  margin: 5px;

  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primary_light};
`;

export const Footer = styled(RectButton)`
  height: ${RFPercentage(10)}px;

  justify-content: flex-end;
`;

export const Project = styled.View`
  padding: 10px;

  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primary_medium};
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text_light};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const Button = styled(RectButton)`
  width: ${RFPercentage(5)}px;
  height: ${RFPercentage(5)}px;

  border-radius: 5px;

  justify-content: center;
  align-items: center;

  align-self: flex-end;
`;

export const Icon = styled(Feather)`
  color: ${({ theme, name }) => (name === 'eye' ? theme.colors.background_light : theme.colors.background_dark)};
  font-size: ${RFValue(18)}px;
`;
