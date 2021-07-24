import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import uuid from 'react-native-uuid';

import { Alert } from 'react-native';
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
} from './styles';

import TaskItem, { TaskProps } from '../../components/TaskItem';

export interface ToDoListProps extends TaskProps {
  id: string;
}

interface RemoveProps {
  id: string;
  type: string;
}

const Project: React.FC = () => {
  const [todo, setTodo] = useState<ToDoListProps[]>([]);
  const [doing, setDoing] = useState<ToDoListProps[]>([]);
  const [done, setDone] = useState<ToDoListProps[]>([]);
  const [todoIn, setTodoIn] = useState<string>();
  const [doingIn, setDoingIn] = useState<string>();
  const [doneIn, setDoneIn] = useState<string>();

  const route = useRoute();

  const { project } = route.params;

  const navigation = useNavigation();

  const addTask = (type:string) => {
    if (type === 'todo' && todoIn !== '') {
      const newTask = {
        id: String(uuid.v4()),
        title: todoIn,
      };

      setTodo([...todo, newTask]);
      setTodoIn('');
    } else if (type === 'doing' && doingIn !== '') {
      const newTask = {
        id: String(uuid.v4()),
        title: doingIn,
      };

      setDoing([...doing, newTask]);
      setDoingIn('');
    } else if (type === 'done' && doneIn !== '') {
      const newTask = {
        id: String(uuid.v4()),
        title: doneIn,
      };

      setDone([...done, newTask]);
      setDoneIn('');
    } else {
      Alert.alert('Erro', 'A task must be name it');
    }
  };

  const removeTask = (obj:RemoveProps) => {
    if (obj.type === 'todo') {
      const newTodo = todo.filter((task) => task.id !== obj.id);
      setTodo(newTodo);
    } else if (obj.type === 'doing') {
      const newTodo = doing.filter((task) => task.id !== obj.id);

      setDoing(newTodo);
    } else if (obj.type === 'done') {
      const newTodo = done.filter((task) => task.id !== obj.id);

      setDone(newTodo);
    }
  };

  return (
    <Container>

      <Header>
        <GoBack onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" />
        </GoBack>

        <Title>{project.title}</Title>

      </Header>

      <CollumsList>

        <CardList>
          <ToDoList
            data={todo}
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
                <Input
                  value={todoIn}
                  onChangeText={setTodoIn}
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="Card name"
                />

                <Add onPress={() => addTask('todo')}>
                  <Icon name="plus" />
                </Add>
              </Footer>

          )}
          />
        </CardList>

        <CardList>
          <ToDoList
            data={doing}
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
                <Input
                  value={doingIn}
                  onChangeText={setDoingIn}
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="Card name"
                />
                <Add onPress={() => addTask('doing')}>
                  <Icon name="plus" />
                </Add>
              </Footer>

        )}
          />
        </CardList>

        <CardList>
          <ToDoList
            data={done}
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
                <Input
                  value={doneIn}
                  onChangeText={setDoneIn}
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="Card name"
                />
                <Add onPress={() => addTask('done')}>
                  <Icon name="plus" />
                </Add>
              </Footer>

        )}
          />
        </CardList>

      </CollumsList>

    </Container>
  );
};

export default Project;
