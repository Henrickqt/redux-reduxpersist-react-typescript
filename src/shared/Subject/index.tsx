import React from 'react';

import { Container, Title } from './styles';

interface SubjectProps {
  title: string;
}

const Subject: React.FC<SubjectProps> = (props) => {
  return (
    <Container>
      <Title>
        {props.title}
      </Title>
      
      {props.children}
    </Container>
  );
}

export default Subject;
