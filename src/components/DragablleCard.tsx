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
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  );
}

const Card = styled.div<{ isDragging: boolean }>`
  margin-bottom: 5px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${(props) => (props.isDragging ? '#e4f2ff' : props.theme.cardColor)};
  box-shadow: ${(props) => (props.isDragging ? '0px 2px 5px rgba(0, 0, 0, 0.5)' : 'none')};
`;

export default React.memo(DragablleCard);
