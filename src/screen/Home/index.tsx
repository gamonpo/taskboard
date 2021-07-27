import React, { useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Alert, Modal } from 'react-native';
import uuid from 'react-native-uuid';
import ProjectItem from '../../components/ProjectItem';

import { useBoard } from '../../hooks/Board';

import {
  Container,
  Header,
  Text,
  AddProject,
  Icon,
  List,
  Card,
  Input,
  Actions,
  Button,
} from './styles';

export interface DataListProps {
  id: string;
  title: string;
}

const Home: React.FC = () => {
  const {
    board, setBoard, setProject, dataKey,
  } = useBoard();

  const [modal, setModal] = useState<boolean>(false);
  const [title, setTitle] = useState<string>();

  const navigation = useNavigation();

  const loadBoard = async () => {
    const response = await AsyncStorage.getItem(dataKey);
    const list = response ? JSON.parse(response) : [];

    setBoard(list);
  };

  const createBoard = async () => {
    if (title === '') {
      return Alert.alert('Error', 'A board must be name it');
    }

    const newBoard = {
      id: String(uuid.v4()),
      title,
      todo: [],
      doing: [],
      done: [],
    };

    try {
      const data = await AsyncStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];

      const dataFormatted = [...currentData, newBoard];

      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));

      setBoard([...board, newBoard]);
      setTitle('');
      setModal(false);
    } catch (error) {
      setModal(false);

      return Alert.alert('Error', 'Could not save');
    }
  };

  const goBoard = (id:string) => {
    const filterredProject = board.find((p) => p.id === id);

    setProject(filterredProject);

    navigation.navigate('Project');
  };

  useFocusEffect(
    useCallback(() => {
      loadBoard();
    }, []),
  );

  return (
    <Container>
      <Header>
        <Text>Boards</Text>

      </Header>

      <Modal
        visible={modal}
        transparent
      >
        <Card>
          <Input
            value={title}
            onChangeText={setTitle}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Project name"
          />

          <Actions>
            <Button onPress={() => createBoard()}>
              <Icon name="check" />
            </Button>
            <Button onPress={() => setModal(false)}>
              <Icon name="x" />
            </Button>
          </Actions>

        </Card>
      </Modal>

      <List
        data={board}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProjectItem
            id={item.id}
            title={item.title}
            onPress={() => goBoard(item.id)}

          />
        )}
      />

      <AddProject onPress={() => setModal(true)}>
        <Icon name="plus" />
      </AddProject>
    </Container>
  );
};

export default Home;
