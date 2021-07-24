import React from 'react';

import {
  Container,
  Text,
} from './styles';

export interface TaskProps {
  id: string;
  title: string;
  description?: string;
}

interface Props {
  data: TaskProps
}

const TaskItem: React.FC<Props> = ({ data }:Props) => (
  <Container>
    <Text>{data.title}</Text>
  </Container>
);

export default TaskItem;
