import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import uuid from 'react-native-uuid';

import { Alert, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Container,
  Header,
  GoBack,
  Icon,
  Title,
  CollumnHeader,
  Text,
  CollumsList,
  CardList,
  ToDoList,
  Item,
  Footer,
  Input,
  Add,
  Remove,
  Card,
  Actions,
  Button,
} from './styles';

import TaskItem, { TaskProps } from '../../components/TaskItem';
import { useBoard } from '../../hooks/Board';

export interface ToDoListProps extends TaskProps {
  id: string;
}

interface RemoveProps {
  id: string;
  type: string;
}

const Project: React.FC = () => {
  const {
    board, setBoard, dataKey, project,
  } = useBoard();
  const [modalTodo, setModalTodo] = useState<boolean>(false);
  const [modalDoing, setModalDoing] = useState<boolean>(false);
  const [modalDone, setModalDone] = useState<boolean>(false);
  const [todoIn, setTodoIn] = useState<string>();
  const [doingIn, setDoingIn] = useState<string>();
  const [doneIn, setDoneIn] = useState<string>();
  const [description, setDescriptionIn] = useState<string>();
  const [tag, setTag] = useState<string>();

  const navigation = useNavigation();

  const addTask = async (type:string) => {
    if (type === 'todo' && todoIn !== undefined) {
      const newTask = {
        id: String(uuid.v4()),
        title: todoIn,
        description,
        tag,
      };

      project.todo.push(newTask);

      const filterredBoard = board.filter((p) => p.id !== project.id);

      filterredBoard.push(project);

      try {
        await AsyncStorage.setItem(dataKey, JSON.stringify(filterredBoard));

        setBoard(filterredBoard);
      } catch (error) {
        return Alert.alert('Error', 'Could not save');
      }

      setTodoIn(undefined);
      setDescriptionIn(undefined);
      setTag(undefined);
      setModalTodo(false);
    } else if (type === 'doing' && doingIn !== undefined) {
      const newTask = {
        id: String(uuid.v4()),
        title: doingIn,
        description,
        tag,
      };

      project.doing.push(newTask);

      const filterredBoard = board.filter((p) => p.id !== project.id);

      filterredBoard.push(project);

      try {
        await AsyncStorage.setItem(dataKey, JSON.stringify(filterredBoard));

        setBoard(filterredBoard);
      } catch (error) {
        return Alert.alert('Error', 'Could not save');
      }

      setDoingIn(undefined);
      setDescriptionIn(undefined);
      setTag(undefined);
      setModalDoing(false);
    } else if (type === 'done' && doneIn !== undefined) {
      const newTask = {
        id: String(uuid.v4()),
        title: doneIn,
        description,
        tag,
      };

      project.done.push(newTask);

      const filterredBoard = board.filter((p) => p.id !== project.id);

      filterredBoard.push(project);

      try {
        await AsyncStorage.setItem(dataKey, JSON.stringify(filterredBoard));

        setBoard(filterredBoard);
      } catch (error) {
        return Alert.alert('Error', 'Could not save');
      }

      setDoneIn(undefined);
      setDescriptionIn(undefined);
      setTag(undefined);
      setModalDone(false);
    } else {
      Alert.alert('Erro', 'A task must be name it');
    }
  };

  const removeTask = async (obj:RemoveProps) => {
    if (obj.type === 'todo') {
      const newTodo = project.todo.filter((task) => task.id !== obj.id);

      project.todo = newTodo;

      const filterredBoard = board.filter((p) => p.id !== project.id);

      filterredBoard.push(project);

      try {
        await AsyncStorage.setItem(dataKey, JSON.stringify(filterredBoard));

        setBoard(filterredBoard);
      } catch (error) {
        return Alert.alert('Error', 'Could not save');
      }
    } else if (obj.type === 'doing') {
      const newTodo = project.doing.filter((task) => task.id !== obj.id);

      project.doing = newTodo;

      const filterredBoard = board.filter((p) => p.id !== project.id);

      filterredBoard.push(project);

      try {
        await AsyncStorage.setItem(dataKey, JSON.stringify(filterredBoard));

        setBoard(filterredBoard);
      } catch (error) {
        return Alert.alert('Error', 'Could not save');
      }
    } else if (obj.type === 'done') {
      const newTodo = project.done.filter((task) => task.id !== obj.id);

      project.done = newTodo;

      const filterredBoard = board.filter((p) => p.id !== project.id);

      filterredBoard.push(project);

      try {
        await AsyncStorage.setItem(dataKey, JSON.stringify(filterredBoard));

        setBoard(filterredBoard);
      } catch (error) {
        return Alert.alert('Error', 'Could not save');
      }
    }
  };

  return (
    <Container>

      { project.id === undefined ? (<>  </>) : (
        <>
          <Header>
            <GoBack onPress={() => navigation.goBack()}>
              <Icon name="arrow-left" />
            </GoBack>

            <Title>{project.title}</Title>

          </Header>

          <CollumsList>
            <CardList>
              <ToDoList
                data={project.todo}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <Item>
                    <TaskItem data={item} />
                    <Remove onPress={() => removeTask({ id: item.id, type: 'todo' })}>
                      <Icon name="trash" />
                    </Remove>
                  </Item>
                )}
                ListHeaderComponent={(
                  <CollumnHeader>
                    <Text>To do</Text>
                  </CollumnHeader>
        )}
                ListFooterComponent={(
                  <Footer>
                    <Modal
                      visible={modalTodo}
                      transparent
                    >
                      <Card>
                        <Input
                          value={todoIn}
                          onChangeText={setTodoIn}
                          autoCapitalize="none"
                          autoCorrect={false}
                          placeholder="Card name"
                        />

                        <Input
                          value={description}
                          onChangeText={setDescriptionIn}
                          autoCapitalize="none"
                          autoCorrect={false}
                          placeholder="Card description"
                        />

                        <Input
                          value={tag}
                          onChangeText={setTag}
                          autoCapitalize="none"
                          autoCorrect={false}
                          placeholder="Card tag"
                        />

                        <Actions>
                          <Button onPress={() => addTask('todo')}>
                            <Icon name="check" />
                          </Button>
                          <Button onPress={() => setModalTodo(false)}>
                            <Icon name="x" />
                          </Button>
                        </Actions>

                      </Card>
                    </Modal>

                    <Add onPress={() => setModalTodo(true)}>
                      <Icon name="plus" />
                    </Add>
                  </Footer>

          )}
              />
            </CardList>

            <CardList>
              <ToDoList
                data={project.doing}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <Item>
                    <TaskItem data={item} />
                    <Remove onPress={() => removeTask({ id: item.id, type: 'doing' })}>
                      <Icon name="trash" />
                    </Remove>
                  </Item>
                )}
                ListHeaderComponent={(
                  <CollumnHeader>
                    <Text>Doing</Text>
                  </CollumnHeader>
        )}
                ListFooterComponent={(
                  <Footer>
                    <Modal
                      visible={modalDoing}
                      transparent
                    >
                      <Card>
                        <Input
                          value={doingIn}
                          onChangeText={setDoingIn}
                          autoCapitalize="none"
                          autoCorrect={false}
                          placeholder="Card name"
                        />

                        <Input
                          value={description}
                          onChangeText={setDescriptionIn}
                          autoCapitalize="none"
                          autoCorrect={false}
                          placeholder="Card description"
                        />

                        <Input
                          value={tag}
                          onChangeText={setTag}
                          autoCapitalize="none"
                          autoCorrect={false}
                          placeholder="Card tag"
                        />

                        <Actions>
                          <Button onPress={() => addTask('doing')}>
                            <Icon name="check" />
                          </Button>
                          <Button onPress={() => setModalDoing(false)}>
                            <Icon name="x" />
                          </Button>
                        </Actions>

                      </Card>
                    </Modal>

                    <Add onPress={() => setModalDoing(true)}>
                      <Icon name="plus" />
                    </Add>
                  </Footer>

        )}
              />
            </CardList>

            <CardList>
              <ToDoList
                data={project.done}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <Item>
                    <TaskItem data={item} />
                    <Remove onPress={() => removeTask({ id: item.id, type: 'done' })}>
                      <Icon name="trash" />
                    </Remove>
                  </Item>
                )}
                ListHeaderComponent={(
                  <CollumnHeader>
                    <Text>Done</Text>
                  </CollumnHeader>
        )}
                ListFooterComponent={(
                  <Footer>
                    <Modal
                      visible={modalDone}
                      transparent
                    >
                      <Card>
                        <Input
                          value={doneIn}
                          onChangeText={setDoneIn}
                          autoCapitalize="none"
                          autoCorrect={false}
                          placeholder="Card name"
                        />

                        <Input
                          value={description}
                          onChangeText={setDescriptionIn}
                          autoCapitalize="none"
                          autoCorrect={false}
                          placeholder="Card description"
                        />

                        <Input
                          value={tag}
                          onChangeText={setTag}
                          autoCapitalize="none"
                          autoCorrect={false}
                          placeholder="Card tag"
                        />

                        <Actions>
                          <Button onPress={() => addTask('done')}>
                            <Icon name="check" />
                          </Button>
                          <Button onPress={() => setModalDone(false)}>
                            <Icon name="x" />
                          </Button>
                        </Actions>

                      </Card>
                    </Modal>

                    <Add onPress={() => setModalDone(true)}>
                      <Icon name="plus" />
                    </Add>
                  </Footer>

        )}
              />
            </CardList>
          </CollumsList>

        </>

      ) }

    </Container>
  );
};

export default Project;
