import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

interface IDraggabbleCardProps {
  toDo: string;
  index: number;
}

function DragablleCard({ toDo, index }: IDraggabbleCardProps) {
  console.log(`${toDo} has been rendering`);
  return (
    <Draggable key={toDo} draggableId={toDo} index={index}>
      {(magic) => (
        <Card ref={magic.innerRef} {...magic.draggableProps} {...magic.dragHandleProps}>
          {toDo}
        </Card>
      )}
    </Draggable>
  );
}

const Card = styled.div`
  margin-bottom: 5px;
  padding: 10px;
  background-color: ${(props) => props.theme.cardColor};
`;

export default React.memo(DragablleCard);
