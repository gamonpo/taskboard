import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Alert } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useBoard } from '../../hooks/Board';

import {
  Container,
  Text,
  Footer,
  Button,
  Icon,
  Project,
} from './styles';

export interface ProjectProps extends RectButtonProps {
  id: string;
  title: string;
  onPress: () => void;
}

const ProjectItem: React.FC<ProjectProps> = ({ id, title, onPress }:ProjectProps) => {
  const {
    board, setBoard, dataKey,
  } = useBoard();

  const del = async (list) => {
    try {
      await AsyncStorage.setItem(dataKey, JSON.stringify(list));

      setBoard(list);
    } catch (error) {
      return Alert.alert('Error', 'The board could not be deleted');
    }
  };

  const deleteBoard = (id_board:string) => {
    const list = board.filter((b) => b.id !== id_board);

    Alert.alert(
      'Warning',
      `Are you sure you want to delete ${title}?`,
      [
        {
          text: 'Delete',
          onPress: () => del(list),
        },
        {
          text: 'Cancel',
        },
      ],

    );
  };

  return (
    <Container>
      <Button onPress={() => deleteBoard(id)}>
        <Icon name="x" />
      </Button>

      <Footer onPress={onPress}>
        <Project>
          <Text>{title}</Text>
        </Project>
      </Footer>

    </Container>
  );
};

export default ProjectItem;
