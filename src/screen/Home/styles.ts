import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import { DataListProps } from '.';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.text_light};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(10)}px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.primary_light};
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text_light};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const AddProject = styled(BorderlessButton)`
  width: ${RFPercentage(8)}px;
  height: ${RFPercentage(8)}px;

  border-radius: 100px;

  justify-content: center;
  align-items: center;
  align-self: flex-end;

  margin: 25px;

  background-color: ${({ theme }) => theme.colors.add_icon};

`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.text_light};
  font-size: ${RFValue(24)}px;
`;
export const List = styled(FlatList as new () => FlatList<DataListProps>).attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2,
})`
  margin: 10px;
`;

export const Card = styled.View`
  width: ${RFPercentage(40)}px;
  height: ${RFPercentage(30)}px;

  justify-content: center;
  align-items: center;
  align-self: center;
  top: ${RFPercentage(25)}px;

  background-color:  ${({ theme }) => theme.colors.background};
`;

export const Input = styled.TextInput`
  width: ${RFPercentage(25)}px;
  height: ${RFPercentage(5)}px;

  border-radius: 1px;
  border-width: 0.1px;
  border-color: ${({ theme }) => theme.colors.text_dark};

  padding: 5px;
`;

export const Actions = styled.View`
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
  width: ${RFPercentage(15)}px;
  height: ${RFPercentage(5)}px;

  top: ${RFPercentage(5)}px;

  margin: 5px;

  background-color: ${({ theme }) => theme.colors.primary_light};


  justify-content: center;
  align-items: center;
`;
