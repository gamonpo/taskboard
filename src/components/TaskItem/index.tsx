import React from 'react';

import {
  Container,
  Text,
  Tag,
  Description,
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

const TaskItem: React.FC<Props> = ({ data }:Props) => (
  <Container>
    <Tag>
      {data.tag}
    </Tag>
    <Text>
      {data.title}
    </Text>
    <Description>
      {data.description}
    </Description>

  </Container>
);

export default TaskItem;
