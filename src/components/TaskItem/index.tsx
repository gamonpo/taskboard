import React, { useState } from 'react';
import { Modal } from 'react-native';

import {
  Container,
  Text,
  Tag,
  Description,
  Card,
  CardField,
  Button,
  Icon,
} from './styles';

export interface TaskProps {
  id: string;
  title: string;
  description: string;
  tag: string;
}

interface Props {
  data: TaskProps
}

const TaskItem: React.FC<Props> = ({ data }:Props) => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <Container onPress={() => setModal(true)}>
      <Tag>
        {data.tag}
      </Tag>
      <Text>
        {data.title}
      </Text>
      <Modal
        visible={modal}
        transparent
      >
        <Card>
          <Button onPress={() => setModal(false)}>
            <Icon name="x" />
          </Button>
          <CardField>
            <Text>
              {data.title}
            </Text>
          </CardField>

          <CardField>
            <Tag>
              {data.tag}
            </Tag>
          </CardField>

          <CardField>
            <Description>
              {data.description}
            </Description>
          </CardField>

        </Card>
      </Modal>

    </Container>
  );
};

export default TaskItem;
