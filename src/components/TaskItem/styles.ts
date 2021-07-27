import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

export const Container = styled(RectButton)`
  height: ${RFPercentage(10)}px;
  width: ${RFPercentage(25)}px;

  margin: 5px;
  padding: 5px;
  justify-content: center;
  align-items: flex-start;

  elevation: 5;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.text_light};
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text_dark};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.text_dark};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Tag = styled.Text`
  color: ${({ theme }) => theme.colors.text_dark};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Card = styled.View`
  width: ${RFPercentage(40)}px;

  top: ${RFPercentage(15)}px;
  align-self: center;
  padding: 20px;

  border-radius: 5px;
  background-color:  ${({ theme }) => theme.colors.background_regular};
`;

export const Button = styled.TouchableOpacity`
  width: ${RFPercentage(5)}px;
  height: ${RFPercentage(5)}px;

  align-self: flex-end;

  border-radius: 5px;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.background_dark};
  font-size: ${RFValue(24)}px;
`;

export const CardField = styled.View`
  margin: 10px;
  padding: 5px;

  background-color: ${({ theme }) => theme.colors.background_light};
  border-radius: 5px;
  elevation: 5;
`;
