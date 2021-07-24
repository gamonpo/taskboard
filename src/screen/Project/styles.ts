import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import { ToDoListProps } from '.';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.primary_regular};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(10)}px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.primary_medium};
`;

export const GoBack = styled(BorderlessButton)`
  right: ${RFPercentage(10)}px;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.text_light};
  font-size: ${RFValue(24)}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text_light};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const CollumnHeader = styled.View`
  width: ${RFPercentage(25)}px;
  height: ${RFPercentage(5)}px;

  justify-content: center;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text_dark};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const CollumsList = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
`;

export const CardList = styled.View`
  height: ${RFPercentage(50)}px;

`;

export const ToDoList = styled(FlatList as new () => FlatList<ToDoListProps>).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})`
  border-radius: 5px;
  width: ${RFPercentage(35)}px;
  margin: 20px;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Item = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Footer = styled.View`
  margin-top: 10px;

  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput`
  width: ${RFPercentage(25)}px;
  height: ${RFPercentage(5)}px;

  border-radius: 1px;
  border-width: 0.1px;
  border-color: ${({ theme }) => theme.colors.text_dark};

  padding: 5px;
`;

export const Add = styled(BorderlessButton)`
  width: ${RFValue(24)}px;
  height: ${RFValue(24)}px;
  border-radius: 15px;

  margin-top: 15px;
  margin-bottom: 15px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.primary_medium};
`;

export const Remove = styled(BorderlessButton)`
  width: ${RFValue(26)}px;
  height: ${RFValue(26)}px;
  border-radius: 15px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.primary_medium};
`;
