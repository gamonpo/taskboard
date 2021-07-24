import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Modal } from 'react-native';
import uuid from 'react-native-uuid';
import ProjectItem from '../../components/ProjectItem';

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
  const [boards, setBoard] = useState<DataListProps[]>([]);
  const [modal, setModal] = useState<boolean>(false);
  const [title, setTitle] = useState<string>();

  const navigation = useNavigation();

  const createBoard = () => {
    if (title === '') {
      return Alert.alert('Error', 'A board must be name it');
    }

    const newBoard = {
      id: String(uuid.v4()),
      title,
    };

    setBoard([...boards, newBoard]);
    setTitle('');
    setModal(false);
  };

  return (
    <Container>
      <Header>
        <Text>Boards</Text>

      </Header>

      <AddProject onPress={() => setModal(true)}>
        <Icon name="plus" />
      </AddProject>

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
        data={boards}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProjectItem
            title={item.title}
            onPress={() => navigation.navigate('Project', { project: item })}

          />
        )}
      />
    </Container>
  );
};

export default Home;
