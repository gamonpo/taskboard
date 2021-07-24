import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Text, Footer } from './styles';

export interface ProjectProps extends RectButtonProps {
  title: string;
  onPress: () => void;
}

const ProjectItem: React.FC<ProjectProps> = ({ title, onPress }:ProjectProps) => (
  <Container onPress={onPress}>

    <Footer>
      <Text>{title}</Text>

    </Footer>
  </Container>
);

export default ProjectItem;
